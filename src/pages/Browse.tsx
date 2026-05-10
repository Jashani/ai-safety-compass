import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { backgrounds, backgroundsById } from "@/data/v2/backgrounds";
import { content as allContent } from "@/data/v2/content";
import { people as allPeople } from "@/data/v2/people";
import { projects as allProjects } from "@/data/v2/projects";
import { produceTemplates } from "@/data/v2/produce";
import { domainCategories, domainDisplay, domains } from "@/data/v2/labels";
import type { Content, Label, LabelDef } from "@/data/v2/types";
import {
  BookOpen,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Headphones,
  Play,
  Sparkles,
  Wrench,
} from "lucide-react";

const LABEL_AXES_TO_SHOW: Label["axis"][] = ["domain", "create_mode"];

const labelText = (l: Label): string => {
  if (l.axis === "domain") return domainDisplay[l.value] || l.value;
  return l.value.replace(/_/g, " ");
};

const LabelStrip = ({ labels }: { labels: Label[] }) => {
  const visible = labels.filter((l) => LABEL_AXES_TO_SHOW.includes(l.axis));
  if (visible.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/60">
      {visible.map((l, i) => (
        <span
          key={`${l.axis}-${l.value}-${i}`}
          className="text-[11px] uppercase tracking-wide text-muted-foreground/80 bg-muted/40 rounded px-1.5 py-0.5"
        >
          {labelText(l)}
        </span>
      ))}
    </div>
  );
};

const formatIcon = (c: Content) => {
  if (c.consumeType === "listen") return Headphones;
  if (c.consumeType === "watch") return Play;
  if (c.consumeType === "try") return Wrench;
  return BookOpen;
};

const consumeLabel: Record<Content["consumeType"], string> = {
  read: "Read",
  listen: "Listen",
  watch: "Watch",
  try: "Try it",
};

const matchesAnyTopic = (labels: Label[], topics: string[]) =>
  topics.length === 0 ||
  labels.some((l) => l.axis === "domain" && topics.includes(l.value));

const Browse = () => {
  const [params] = useSearchParams();
  const initialBg = params.get("bg") || "";
  const initialTopics = (params.get("topics") || "").split(",").filter(Boolean);
  const [backgroundId, setBackgroundId] = useState<string>(initialBg);
  const [topics, setTopics] = useState<Set<string>>(new Set(initialTopics));

  const bg = backgroundId ? backgroundsById[backgroundId] : undefined;

  const suggestedTopicValues = useMemo(() => {
    if (!bg) return new Set<string>();
    return new Set(
      bg.labels
        .filter((l) => l.axis === "domain")
        .map((l) => l.value)
        .filter((v) => domains.some((d) => d.value === v))
    );
  }, [bg]);

  const suggestedDomains = useMemo(
    () => domains.filter((d) => suggestedTopicValues.has(d.value)),
    [suggestedTopicValues]
  );
  const otherDomains = useMemo(
    () => domains.filter((d) => !suggestedTopicValues.has(d.value)),
    [suggestedTopicValues]
  );

  const otherDomainsByCategory = useMemo(() => {
    const groups: { category: string; items: LabelDef[] }[] = [];
    for (const cat of domainCategories) {
      const items = otherDomains.filter((d) => d.category === cat);
      if (items.length > 0) groups.push({ category: cat, items });
    }
    const uncategorised = otherDomains.filter(
      (d) => !d.category || !domainCategories.includes(d.category)
    );
    if (uncategorised.length > 0) groups.push({ category: "Other", items: uncategorised });
    return groups;
  }, [otherDomains]);

  const toggleTopic = (value: string) => {
    setTopics((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const selectedTopics = useMemo(() => [...topics], [topics]);

  // Effective topics: explicit selection wins; otherwise fall back to background's topics
  // so picking just a background already shows something. If nothing is picked, show everything.
  const effectiveTopics = useMemo(() => {
    if (selectedTopics.length > 0) return selectedTopics;
    if (bg) return [...suggestedTopicValues];
    return [];
  }, [selectedTopics, bg, suggestedTopicValues]);

  const filteredContent = useMemo(
    () =>
      allContent.filter(
        (c) => c.format !== "course" && matchesAnyTopic(c.labels, effectiveTopics)
      ),
    [effectiveTopics]
  );
  const filteredCourses = useMemo(
    () =>
      allContent.filter(
        (c) => c.format === "course" && matchesAnyTopic(c.labels, effectiveTopics)
      ),
    [effectiveTopics]
  );
  const filteredPeople = useMemo(
    () => allPeople.filter((p) => matchesAnyTopic(p.labels, effectiveTopics)),
    [effectiveTopics]
  );
  const filteredProjects = useMemo(
    () => allProjects.filter((p) => matchesAnyTopic(p.labels, effectiveTopics)),
    [effectiveTopics]
  );
  const filteredProduce = useMemo(
    () => produceTemplates.filter((t) => matchesAnyTopic(t.labels, effectiveTopics)),
    [effectiveTopics]
  );

  // Group content by topic so it's clear what belongs to each interest.
  // Items that match multiple topics show under each.
  const contentByTopic = useMemo(() => {
    if (effectiveTopics.length === 0) return [];
    return effectiveTopics
      .map((t) => ({
        topic: t,
        items: filteredContent.filter((c) =>
          c.labels.some((l) => l.axis === "domain" && l.value === t)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [effectiveTopics, filteredContent]);

  const hasSelection = !!bg || selectedTopics.length > 0;

  const totalContent = filteredContent.length;
  const totalPeople = filteredPeople.length;
  const totalProjects = filteredProjects.length;
  const totalProduce = filteredProduce.length;
  const totalCourses = filteredCourses.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Browse content</h1>
          <p className="text-muted-foreground text-base">
            Pick a background and interests. You'll see everything we have for them.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Your background
          </h2>
          <div className="flex flex-wrap gap-2">
            {backgrounds.map((b) => (
              <button
                key={b.id}
                onClick={() => setBackgroundId(b.id === backgroundId ? "" : b.id)}
                className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                  backgroundId === b.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
            Your interests
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Pick as many as you'd like. Leave blank to browse everything matching your background.
          </p>

          {suggestedDomains.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-muted-foreground mb-2">
                Based on your background, you may be interested in:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedDomains.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => toggleTopic(d.value)}
                    className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                      topics.has(d.value)
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/40 text-foreground hover:border-foreground/70"
                    }`}
                  >
                    {d.display}
                  </button>
                ))}
              </div>
            </div>
          )}

          {suggestedDomains.length > 0 && otherDomainsByCategory.length > 0 && (
            <p className="text-xs text-muted-foreground mb-3 mt-1">Other topics:</p>
          )}

          <div className="space-y-5">
            {otherDomainsByCategory.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs uppercase tracking-wide text-muted-foreground/70 mb-2">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => toggleTopic(d.value)}
                      className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                        topics.has(d.value)
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-muted-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {d.display}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {hasSelection && (
          <p className="text-xs text-muted-foreground mb-10">
            Showing {totalContent} {totalContent === 1 ? "piece" : "pieces"} of content
            {totalCourses > 0 ? `, ${totalCourses} ${totalCourses === 1 ? "course" : "courses"}` : ""}
            {totalPeople > 0 ? `, ${totalPeople} ${totalPeople === 1 ? "person" : "people"}` : ""}
            {totalProjects > 0 ? `, ${totalProjects} ${totalProjects === 1 ? "project" : "projects"}` : ""}
            {totalProduce > 0 ? `, ${totalProduce} ${totalProduce === 1 ? "make-prompt" : "make-prompts"}` : ""}.
          </p>
        )}

        {/* CONTENT, grouped by topic when topics are explicit */}
        {filteredContent.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              To read, watch, listen, or try
            </h2>
            {contentByTopic.length > 0 ? (
              <div className="space-y-8">
                {contentByTopic.map(({ topic, items }) => (
                  <div key={topic}>
                    <h3 className="text-base font-medium mb-3">
                      {domainDisplay[topic] || topic}
                      <span className="text-muted-foreground font-normal text-sm ml-2">
                        · {items.length}
                      </span>
                    </h3>
                    <div className="space-y-4">
                      {items.map((c) => (
                        <ConsumeRow key={c.id} item={c} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredContent.map((c) => (
                  <ConsumeRow key={c.id} item={c} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* PEOPLE */}
        {filteredPeople.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              People to follow
            </h2>
            <div className="space-y-5">
              {filteredPeople.map((p) => (
                <div key={p.id} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="text-base font-medium">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{p.why}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm hover:underline inline-flex items-center gap-1"
                      >
                        {l.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                  <LabelStrip labels={p.labels} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {filteredProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Projects to build
            </h2>
            <div className="space-y-5">
              {filteredProjects.map((p) => (
                <div key={p.id} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-base font-medium">{p.title}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {p.timeEstimate}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.blurb}</p>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {p.steps.map((s, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {s}
                      </li>
                    ))}
                  </ol>
                  <LabelStrip labels={p.labels} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PRODUCE */}
        {filteredProduce.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Things to make
            </h2>
            <div className="space-y-5">
              {filteredProduce.map((t) => (
                <div key={t.id} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    Make
                  </div>
                  <h3 className="text-base font-medium mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.prompt}</p>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1.5">
                    Angles
                  </div>
                  <ul className="space-y-1.5">
                    {t.exampleAngles.map((a, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                  <LabelStrip labels={t.labels} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* COURSES */}
        {filteredCourses.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Courses
            </h2>
            <div className="space-y-4">
              {filteredCourses.map((c) => (
                <div key={c.id} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Course
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium hover:underline inline-flex items-center gap-1.5"
                  >
                    {c.title}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                  {c.byline && <p className="text-xs text-muted-foreground mt-1">{c.byline}</p>}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{c.summary}</p>
                  <LabelStrip labels={c.labels} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BACKGROUND RESOURCES */}
        {bg && bg.resources && bg.resources.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Resources for your background
            </h2>
            <div className="space-y-4">
              {bg.resources.map((r) => (
                <div key={r.url} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    <Briefcase className="h-3.5 w-3.5" />
                    For your background
                  </div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium hover:underline inline-flex items-center gap-1.5"
                  >
                    {r.title}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                  {r.byline && <p className="text-xs text-muted-foreground mt-1">{r.byline}</p>}
                  {r.summary && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{r.summary}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {hasSelection &&
          totalContent === 0 &&
          totalCourses === 0 &&
          totalPeople === 0 &&
          totalProjects === 0 &&
          totalProduce === 0 &&
          !(bg && bg.resources && bg.resources.length > 0) && (
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">
                Nothing matches yet. Try different interests, or{" "}
                <a
                  href="https://github.com/Jashani/ai-safety-compass"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  contribute on GitHub
                </a>
                .
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

const ConsumeRow = ({ item }: { item: Content }) => {
  const Icon = formatIcon(item);
  return (
    <div className="border-l-2 border-border pl-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground mb-1">
        <Icon className="h-3 w-3" />
        {consumeLabel[item.consumeType]}
        {item.timeMinutes ? (
          <span className="text-muted-foreground/70">· ~{item.timeMinutes} min</span>
        ) : null}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium hover:underline inline-flex items-center gap-1.5"
      >
        {item.title}
        <ExternalLink className="h-3 w-3 text-muted-foreground" />
      </a>
      {item.byline && <p className="text-xs text-muted-foreground mt-0.5">{item.byline}</p>}
      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.summary}</p>
      <LabelStrip labels={item.labels} />
    </div>
  );
};

export default Browse;
