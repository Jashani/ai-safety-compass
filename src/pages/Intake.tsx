import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backgrounds } from "@/data/v2/backgrounds";
import { createModes, domains } from "@/data/v2/labels";

const Intake = () => {
  const navigate = useNavigate();
  const [backgroundId, setBackgroundId] = useState<string>("");
  const [topics, setTopics] = useState<Set<string>>(new Set());
  const [modes, setModes] = useState<Set<string>>(new Set());

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
            Three quick questions. None of this is stored anywhere — your answers live in the URL.
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
            Don't see yours? Pick "Something else" — the topics and create-modes do most of the work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            What pulls you in?
          </h2>
          <div className="flex flex-wrap gap-2">
            {domains.map((d) => (
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
