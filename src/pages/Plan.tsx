import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { backgroundsById } from "@/data/v2/backgrounds";
import { composePlan } from "@/data/v2/composer";
import type { Profile } from "@/data/v2/composer";
import { contentById } from "@/data/v2/content";
import { generalResources } from "@/data/v2/general-resources";
import { createModeDisplay, domainDisplay } from "@/data/v2/labels";
import { BookOpen, Briefcase, ExternalLink, GraduationCap, Headphones, Play, Wrench } from "lucide-react";
import type { BackgroundResource, Content, Label } from "@/data/v2/types";
import { TodayStack } from "@/components/TodayStack";

const resolveResource = (ref: BackgroundResource | string): BackgroundResource | undefined => {
  if (typeof ref !== "string") return ref;
  const c = contentById[ref];
  if (!c) return undefined;
  return { title: c.title, url: c.url, byline: c.byline, summary: c.summary };
};

const LABEL_AXES_TO_SHOW: Label["axis"][] = ["domain", "create_mode"];

const labelDisplay = (l: Label): string => {
  if (l.axis === "domain") return domainDisplay[l.value] || l.value;
  if (l.axis === "create_mode") return createModeDisplay[l.value] || l.value;
  return l.value;
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
          {labelDisplay(l)}
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

const Plan = () => {
  const [params] = useSearchParams();
  const [copied, setCopied] = useState(false);

  const profile: Profile = useMemo(
    () => ({
      backgroundId: params.get("bg") || undefined,
      topics: (params.get("topics") || "").split(",").filter(Boolean),
      createModes: (params.get("modes") || "").split(",").filter(Boolean),
    }),
    [params]
  );

  const plan = useMemo(() => composePlan(profile), [profile]);
  const bg = profile.backgroundId ? backgroundsById[profile.backgroundId] : undefined;

  const browseQuery = useMemo(() => {
    const q = new URLSearchParams();
    if (profile.backgroundId) q.set("bg", profile.backgroundId);
    if (profile.topics.length > 0) q.set("topics", profile.topics.join(","));
    return q.toString();
  }, [profile]);

  const topicNames = profile.topics
    .map((t) => domainDisplay[t])
    .filter(Boolean)
    .join(", ");
  const modeNames = profile.createModes
    .map((m) => createModeDisplay[m])
    .filter(Boolean)
    .join(", ");

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(plan.brainstormPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasAnything =
    plan.todayConsume || plan.todayDoOrTry || plan.todayProduce || plan.people.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          to="/intake"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Edit answers
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">Your plan</h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {bg && bg.id !== "other" ? (
              <>With a background in <strong className="text-foreground font-medium">{bg.label.toLowerCase()}</strong></>
            ) : (
              <>Exploring AI safety</>
            )}
            {topicNames ? <>, an interest in <strong className="text-foreground font-medium">{topicNames.toLowerCase()}</strong></> : null}
            {modeNames ? <>, and a leaning towards creating with <strong className="text-foreground font-medium">{modeNames.toLowerCase()}</strong></> : null}
            .
          </p>
        </header>

        {!hasAnything && (
          <div className="rounded-lg border border-border bg-card p-5 mb-10">
            <p className="text-sm text-muted-foreground">
              We don't have content for these answers yet. Try picking different topics, or browse what we do have.
            </p>
          </div>
        )}

        {/* TODAY */}
        {hasAnything && (
          <TodayStack
            todayConsume={plan.todayConsume}
            todayDoOrTry={plan.todayDoOrTry}
            todayProduce={plan.todayProduce}
          />
        )}

        {/* GAPS */}
        {plan.gaps.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Gaps we'd love help filling
            </h2>
            <ul className="space-y-2">
              {plan.gaps.map((g, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50"
                >
                  {g}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Got a great resource or person to suggest?{" "}
              <a
                href="https://github.com/Jashani/ai-safety-compass"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Contribute on GitHub
              </a>{" "}
              — see the README for how to add content, people, or projects.
            </p>
          </section>
        )}

        {/* PEOPLE */}
        {plan.people.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              People in your space
            </h2>
            <div className="space-y-5">
              {plan.people.map((p) => (
                <PersonCard key={p.id} label={p.role} person={p} />
              ))}
            </div>
          </section>
        )}

        {/* DEEPER */}
        {plan.deeper.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Go deeper
            </h2>
            <div className="space-y-4">
              {plan.deeper.map((c) => (
                <ConsumeRow key={c.id} item={c} />
              ))}
            </div>
            <div className="mt-5">
              <Link
                to={`/browse?${browseQuery}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm hover:border-muted-foreground/60 transition-colors"
              >
                See all relevant resources
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </section>
        )}

        {/* BACKGROUND RESOURCES — tied directly to background, not topics */}
        {(() => {
          const refs = bg?.resources ?? [];
          const resolved = refs
            .map(resolveResource)
            .filter((r): r is BackgroundResource => !!r);
          if (resolved.length === 0) return null;
          return (
            <section className="mb-12">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Resources for your background
              </h2>
              <div className="space-y-4">
                {resolved.map((r) => (
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
          );
        })()}

        {/* COURSES */}
        {plan.courses.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Courses to sign up for
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Longer commitments — not for today, but worth signing up for if you want a structured path.
            </p>
            <div className="space-y-4">
              {plan.courses.map((c) => (
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

        {/* PROJECTS */}
        {plan.projects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              If you want to build something this weekend
            </h2>
            <div className="space-y-5">
              {plan.projects.map((p) => (
                <div key={p.id} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-base font-medium">{p.title}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{p.timeEstimate}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.blurb}</p>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {p.steps.map((s, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed">{s}</li>
                    ))}
                  </ol>
                  <LabelStrip labels={p.labels} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BRAINSTORM */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Brainstorm with an LLM
          </h2>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Copy this and paste into Claude, ChatGPT, or your assistant of choice.
            </p>
            <pre className="text-sm whitespace-pre-wrap leading-relaxed bg-muted/40 rounded p-3 mb-3 font-mono">
              {plan.brainstormPrompt}
            </pre>
            <button
              onClick={copyPrompt}
              className="rounded-md border border-border px-3 py-1.5 text-sm hover:border-muted-foreground/60 transition-colors"
            >
              {copied ? "Copied" : "Copy prompt"}
            </button>
          </div>
        </section>

        {/* GENERAL RESOURCES — backstop, always visible */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            General resources
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Foundational starting points if you want a broader view, regardless of background or interests.
          </p>
          <ul className="space-y-3">
            {generalResources.map((r) => (
              <li key={r.url} className="border-l-2 border-border pl-4">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:underline inline-flex items-center gap-1.5"
                >
                  {r.title}
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
                {r.byline && <p className="text-xs text-muted-foreground mt-0.5">{r.byline}</p>}
                {r.summary && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{r.summary}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
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
        {item.timeMinutes ? <span className="text-muted-foreground/70">· ~{item.timeMinutes} min</span> : null}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium hover:underline"
      >
        {item.title}
      </a>
      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.summary}</p>
      <LabelStrip labels={item.labels} />
    </div>
  );
};

const PersonCard = ({
  label,
  person,
  cta,
}: {
  label: string;
  person: import("@/data/v2/types").Person;
  cta?: string;
}) => (
  <div className="rounded-lg border border-border bg-card p-5">
    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{label}</div>
    <h3 className="text-base font-medium">{person.name}</h3>
    <p className="text-xs text-muted-foreground mt-0.5">{person.role}</p>
    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{person.why}</p>
    <div className="flex flex-wrap gap-3 mt-3">
      {person.links.map((l) => (
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
    {cta && <p className="text-sm text-foreground mt-3 leading-relaxed">{cta}</p>}
    <LabelStrip labels={person.labels} />
  </div>
);

export default Plan;
