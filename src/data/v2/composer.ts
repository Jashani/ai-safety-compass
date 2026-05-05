import { backgroundsById } from "./backgrounds";
import { content as allContent } from "./content";
import { domainDisplay } from "./labels";
import { people as allPeople } from "./people";
import { projects as allProjects } from "./projects";
import { produceTemplates } from "./produce";
import type { Content, Label, Person, Project, ProduceTemplate } from "./types";

export interface Profile {
  backgroundId?: string;
  topics: string[];        // domain values
  createModes: string[];   // create_mode values
}

export interface Plan {
  effectiveTopics: string[];
  todayConsume?: Content;
  todayDoOrTry?: Content | Person;
  todayProduce?: ProduceTemplate;
  people: Person[];
  deeper: Content[];
  projects: Project[];
  brainstormPrompt: string;
  gaps: string[];
}

const labelsHave = (labels: Label[], axis: string, value: string) =>
  labels.some((l) => l.axis === axis && l.value === value);

const valuesByAxis = (labels: Label[], axis: string) =>
  labels.filter((l) => l.axis === axis).map((l) => l.value);

const overlap = (labels: Label[], axis: string, values: string[]) =>
  values.length === 0 ? 0 : labels.filter((l) => l.axis === axis && values.includes(l.value)).length;

const stableSort = <T extends { id: string }>(arr: T[], score: (x: T) => number): T[] =>
  [...arr]
    .map((x, i) => ({ x, s: score(x), i }))
    .sort((a, b) => b.s - a.s || a.x.id.localeCompare(b.x.id))
    .map(({ x }) => x);

const topicName = (t: string) => domainDisplay[t] || t;

const formatList = (items: string[]): string => {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} or ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, or ${items[items.length - 1]}`;
};

export const effectiveTopics = (profile: Profile): string[] => {
  const bg = profile.backgroundId ? backgroundsById[profile.backgroundId] : undefined;
  const fromBackground = bg ? valuesByAxis(bg.labels, "domain") : [];
  const seen = new Set<string>();
  return [...profile.topics, ...fromBackground].filter((t) => {
    if (seen.has(t)) return false;
    seen.add(t);
    return true;
  });
};

const scoreContent = (c: Content, topics: string[]): number => {
  const domainHits = overlap(c.labels, "domain", topics);
  if (domainHits === 0) return 0;
  return domainHits;
};

const scorePerson = (p: Person, topics: string[]): number =>
  overlap(p.labels, "domain", topics);

const scoreProject = (p: Project, topics: string[], createModes: string[]): number => {
  const domainHits = overlap(p.labels, "domain", topics);
  if (domainHits === 0 && topics.length > 0) return 0;
  const modeHits = overlap(p.labels, "create_mode", createModes);
  return domainHits * 2 + modeHits;
};

const scoreProduce = (
  t: ProduceTemplate,
  topics: string[],
  createModes: string[]
): number => {
  const tDomains = valuesByAxis(t.labels, "domain");
  const tModes = valuesByAxis(t.labels, "create_mode");
  // Domain-agnostic templates (no domain labels) score on mode only — used as fallback.
  const domainScore =
    tDomains.length === 0 ? 0.5 : overlap(t.labels, "domain", topics) * 2;
  const modeScore =
    tModes.length === 0 || createModes.length === 0
      ? 0
      : overlap(t.labels, "create_mode", createModes);
  if (tDomains.length > 0 && topics.length > 0 && domainScore === 0) return 0;
  return domainScore + modeScore;
};

const levelWeight = (level: Content["level"]) =>
  level === "intro" ? 3 : level === "intermediate" ? 2 : 1;

export const composePlan = (profile: Profile): Plan => {
  const topics = effectiveTopics(profile);
  const { createModes } = profile;
  const gaps: string[] = [];

  // Filter content to topic-matching, then rank.
  const matchedContent = allContent.filter((c) => scoreContent(c, topics) > 0);

  // Per-topic: flag any topic with zero content so users know we have a gap there.
  const emptyTopics = topics.filter(
    (t) =>
      !allContent.some((c) =>
        c.labels.some((l) => l.axis === "domain" && l.value === t)
      )
  );
  if (emptyTopics.length > 0) {
    const names = emptyTopics.map((t) => domainDisplay[t] || t).join(", ");
    const verb = emptyTopics.length === 1 ? "is" : "are";
    gaps.push(
      `${names} ${verb} on our list but we don't have any content for it yet — your contributions would directly fill this gap.`
    );
  }

  // Slot 1: a consume-friendly piece, prefer intro/short.
  const consumeRanked = stableSort(matchedContent, (c) => {
    const base = scoreContent(c, topics) * 10;
    const lvl = levelWeight(c.level) * 3;
    const time = c.timeMinutes ? Math.max(0, 30 - c.timeMinutes) / 10 : 0;
    const tryPenalty = c.consumeType === "try" ? -2 : 0; // save interactives for slot 2
    return base + lvl + time + tryPenalty;
  });
  const todayConsume = consumeRanked[0];

  if (todayConsume && todayConsume.level === "deep") {
    const consumeTopics = todayConsume.labels
      .filter((l) => l.axis === "domain" && topics.includes(l.value))
      .map((l) => topicName(l.value));
    const where = consumeTopics.length > 0 ? ` on ${formatList(consumeTopics)}` : "";
    gaps.push(
      `We don't have a short, intro-level piece${where} yet. Below is the most relevant thing we have — help us find better.`
    );
  }

  // Slot 2: an interactive/try piece, else a person to DM.
  const tryItems = matchedContent.filter((c) => c.consumeType === "try");
  const tryRanked = stableSort(tryItems, (c) => scoreContent(c, topics));
  let todayDoOrTry: Content | Person | undefined = tryRanked[0];
  const peopleRanked = stableSort(allPeople, (p) => scorePerson(p, topics)).filter(
    (p) => scorePerson(p, topics) > 0
  );
  if (!todayDoOrTry && peopleRanked[0]) {
    todayDoOrTry = peopleRanked[0];
  }
  if (!todayDoOrTry) {
    const where =
      topics.length > 0 ? ` for ${formatList(topics.map(topicName))}` : "";
    gaps.push(
      `We don't yet have an interactive tool or person to DM${where}. Got a suggestion?`
    );
  }

  // Slot 3: a produce template.
  const produceRanked = stableSort(produceTemplates, (t) =>
    scoreProduce(t, topics, createModes)
  ).filter((t) => scoreProduce(t, topics, createModes) > 0);
  const todayProduce = produceRanked[0];
  if (!todayProduce) {
    const where =
      topics.length > 0 ? ` for ${formatList(topics.map(topicName))}` : "";
    gaps.push(
      `We don't have a produce prompt${where} that matches your create-mode yet — try the brainstorm prompt below.`
    );
  }

  // People list (top 3 by domain overlap).
  const peopleList = peopleRanked.slice(0, 3);

  // Deeper: ranked content excluding anything already shown in Today.
  const usedIds = new Set<string>();
  if (todayConsume) usedIds.add(todayConsume.id);
  if (todayDoOrTry && !isPerson(todayDoOrTry)) usedIds.add(todayDoOrTry.id);

  const deeperRanked = stableSort(matchedContent, (c) => {
    const base = scoreContent(c, topics) * 10;
    const lvl = (4 - levelWeight(c.level)) * 2; // prefer deeper here
    return base + lvl;
  }).filter((c) => !usedIds.has(c.id));

  // Interleave by primary domain so no single topic dominates the list.
  const buckets: Content[][] = topics.map((t) =>
    deeperRanked.filter((c) =>
      c.labels.some((l) => l.axis === "domain" && l.value === t)
    )
  );
  const seenInDeeper = new Set<string>();
  const deeper: Content[] = [];
  const target = 4;
  while (deeper.length < target) {
    let progressed = false;
    for (const bucket of buckets) {
      const next = bucket.find((c) => !seenInDeeper.has(c.id));
      if (next) {
        deeper.push(next);
        seenInDeeper.add(next.id);
        progressed = true;
        if (deeper.length >= target) break;
      }
    }
    if (!progressed) break;
  }

  // Projects.
  const projectsRanked = stableSort(allProjects, (p) =>
    scoreProject(p, topics, createModes)
  ).filter((p) => scoreProject(p, topics, createModes) > 0);
  const projectsList = projectsRanked.slice(0, 3);

  // Brainstorm prompt.
  const bg = profile.backgroundId ? backgroundsById[profile.backgroundId] : undefined;
  const bgPart = bg && bg.id !== "other" ? `My background is ${bg.label.toLowerCase()}.` : "";
  const topicPart =
    topics.length > 0
      ? `I'm drawn to AI safety questions around ${topics.join(", ").replace(/_/g, " ")}.`
      : "I'm exploring what in AI safety pulls me in.";
  const modePart =
    createModes.length > 0
      ? `I like creating things in the form of ${createModes.join(", ").replace(/_/g, " ")}.`
      : "";
  const brainstormPrompt = [
    bgPart,
    topicPart,
    modePart,
    "Help me brainstorm a one-day project I could realistically finish that uses my background and creates something I'd be willing to share publicly. Suggest 3 options at different levels of ambition, and for the one you think is best, give me a step-by-step plan.",
  ]
    .filter(Boolean)
    .join(" ");

  // Note potential format gaps — per topic, so users see which space lacks AV material.
  const topicsLackingAV = topics.filter((t) => {
    const inTopic = matchedContent.filter((c) =>
      c.labels.some((l) => l.axis === "domain" && l.value === t)
    );
    if (inTopic.length === 0) return false; // covered by the empty-topic gap
    const formats = new Set(inTopic.map((c) => c.format));
    return !formats.has("podcast") && !formats.has("video");
  });
  if (topicsLackingAV.length > 0) {
    gaps.push(
      `We don't have any listening or watching material on ${formatList(
        topicsLackingAV.map(topicName)
      )} yet — help us find some.`
    );
  }

  return {
    effectiveTopics: topics,
    todayConsume,
    todayDoOrTry,
    todayProduce,
    people: peopleList,
    deeper,
    projects: projectsList,
    brainstormPrompt,
    gaps,
  };
};

export const isPerson = (x: Content | Person | undefined): x is Person =>
  !!x && (x as Person).links !== undefined;
