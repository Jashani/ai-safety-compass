import { useState } from "react";
import { Link } from "react-router-dom";
import { fields, backgrounds, skillLabels } from "@/data/fields";

const allSkillKeys = Object.keys(skillLabels);

const Explore = () => {
  const [selectedBackground, setSelectedBackground] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());

  const handleBackgroundClick = (category: string) => {
    const bg = backgrounds.find((b) => b.category === category);
    if (!bg) return;

    if (selectedBackground === category) {
      // Deselect: remove this background's skills
      setSelectedBackground(null);
      setSelectedSkills((prev) => {
        const next = new Set(prev);
        bg.skills.forEach((s) => next.delete(s));
        return next;
      });
    } else {
      setSelectedBackground(category);
      setSelectedSkills((prev) => {
        const next = new Set(prev);
        bg.skills.forEach((s) => next.add(s));
        return next;
      });
    }
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skill)) {
        next.delete(skill);
      } else {
        next.add(skill);
      }
      return next;
    });
  };

  const matchedFields = selectedSkills.size > 0
    ? fields
        .map((f) => {
          const matchCount = f.skills.filter((s) => selectedSkills.has(s)).length;
          return { field: f, matchCount };
        })
        .filter(({ matchCount }) => matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount)
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Find your path by skills and interests
          </h1>
          <p className="text-muted-foreground text-base">
            Select what you're good at or drawn to.
          </p>
        </header>

        {/* Step 1: Background */}
        <section className="mb-10">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Your background
          </h2>
          <div className="flex flex-wrap gap-2">
            {backgrounds.map((bg) => (
              <button
                key={bg.category}
                onClick={() => handleBackgroundClick(bg.category)}
                className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                  selectedBackground === bg.category
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {bg.label}
              </button>
            ))}
          </div>
        </section>

        {/* Step 2: Skills */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Skills and interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {allSkillKeys.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                  selectedSkills.has(skill)
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {skillLabels[skill]}
              </button>
            ))}
          </div>
        </section>

        {/* Results */}
        {selectedSkills.size === 0 ? (
          <p className="text-muted-foreground text-sm">
            Select some skills to see matching fields.
          </p>
        ) : (
          <>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Matching fields
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchedFields.map(({ field, matchCount }) => (
                <Link
                  key={field.slug}
                  to={`/field/${field.slug}`}
                  className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/40"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-medium group-hover:text-foreground">
                      {field.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {matchCount} skill{matchCount !== 1 ? "s" : ""} match
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {field.description}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Explore;
