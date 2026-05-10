import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backgrounds, backgroundsById } from "@/data/v2/backgrounds";
import { createModes, domainCategories, domains } from "@/data/v2/labels";
import type { LabelDef } from "@/data/v2/types";

const Intake = () => {
  const navigate = useNavigate();
  const [backgroundId, setBackgroundId] = useState<string>("");
  const [topics, setTopics] = useState<Set<string>>(new Set());
  const [modes, setModes] = useState<Set<string>>(new Set());

  const suggestedTopicValues = useMemo(() => {
    const bg = backgroundId ? backgroundsById[backgroundId] : undefined;
    if (!bg) return new Set<string>();
    return new Set(
      bg.labels
        .filter((l) => l.axis === "domain")
        .map((l) => l.value)
        .filter((v) => domains.some((d) => d.value === v))
    );
  }, [backgroundId]);

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

  const toggle = (set: Set<string>, value: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  };

  const submit = () => {
    const params = new URLSearchParams();
    if (backgroundId) params.set("bg", backgroundId);
    if (topics.size > 0) params.set("topics", [...topics].join(","));
    if (modes.size > 0) params.set("modes", [...modes].join(","));
    navigate(`/plan?${params.toString()}`);
  };

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
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Build your action plan
          </h1>
          <p className="text-muted-foreground text-base">
            Three quick questions. None of this is stored anywhere.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            What's your background?
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
          <p className="text-xs text-muted-foreground mt-3">
            Don't see yours? Pick "Something else", or leave it empty.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
            What are you curious about?
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Pick as many as you'd like.
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
                    onClick={() => toggle(topics, d.value, setTopics)}
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
                      onClick={() => toggle(topics, d.value, setTopics)}
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

        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            How do you like to create?
          </h2>
          <div className="flex flex-wrap gap-2">
            {createModes.map((m) => (
              <button
                key={m.value}
                onClick={() => toggle(modes, m.value, setModes)}
                className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                  modes.has(m.value)
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-muted-foreground/60 hover:text-foreground"
                }`}
                title={m.description}
              >
                {m.display}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Pick whatever sounds appealing, even if you've never done it.
          </p>
        </section>

        <button
          onClick={submit}
          className="rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Build my plan &rarr;
        </button>
      </div>
    </div>
  );
};

export default Intake;
