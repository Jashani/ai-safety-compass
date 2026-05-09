import type { Content, ConsumeType, ContentFormat, Label, Level } from "../types";

import philosophy from "./philosophy.json";
import aiAndChildren from "./ai-and-children.json";
import societalResilience from "./societal-resilience.json";
import catastrophicRisk from "./catastrophic-risk.json";
import technicalSafety from "./technical-safety.json";
import humanAiInteraction from "./human-ai-interaction.json";
import misinformation from "./misinformation.json";
import governance from "./governance.json";
import domainSpecific from "./domain-specific.json";

// Friendly authoring shape used in the per-category JSON files.
// Editors only need to fill what's relevant; arrays default to empty.
interface RawContent {
  id: string;
  title: string;
  url: string;
  byline?: string;
  summary: string;
  format: ContentFormat;
  consume: ConsumeType;
  level: Level;
  minutes?: number;
  domains?: string[];
  actions?: string[];
  intents?: string[];
  formats?: string[];
  skills?: string[];
}

const expand = (raw: RawContent): Content => {
  const labels: Label[] = [
    ...(raw.domains ?? []).map((value) => ({ axis: "domain" as const, value })),
    ...(raw.actions ?? []).map((value) => ({ axis: "action" as const, value })),
    ...(raw.intents ?? []).map((value) => ({ axis: "intent" as const, value })),
    ...(raw.formats ?? []).map((value) => ({ axis: "format" as const, value })),
    ...(raw.skills ?? []).map((value) => ({ axis: "skill" as const, value })),
  ];
  return {
    id: raw.id,
    title: raw.title,
    url: raw.url,
    byline: raw.byline,
    summary: raw.summary,
    format: raw.format,
    consumeType: raw.consume,
    level: raw.level,
    timeMinutes: raw.minutes,
    labels,
  };
};

const sources: RawContent[][] = [
  philosophy as RawContent[],
  aiAndChildren as RawContent[],
  societalResilience as RawContent[],
  catastrophicRisk as RawContent[],
  technicalSafety as RawContent[],
  humanAiInteraction as RawContent[],
  misinformation as RawContent[],
  governance as RawContent[],
  domainSpecific as RawContent[],
];

export const content: Content[] = sources.flat().map(expand);

export const contentById: Record<string, Content> = Object.fromEntries(
  content.map((c) => [c.id, c])
);
