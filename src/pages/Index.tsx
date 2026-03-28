import { useState } from "react";
import { Link } from "react-router-dom";
import { fields } from "@/data/fields";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [search, setSearch] = useState("");

  const filtered = fields.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            AI Safety Pathways
          </h1>
          <p className="text-muted-foreground text-base">
            Find your path to AI Safety from any field.
          </p>
        </header>

        <Input
          type="text"
          placeholder="Search fields..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 max-w-md bg-card border-border"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((field) => (
            <Link
              key={field.slug}
              to={`/field/${field.slug}`}
              className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/40"
            >
              <h2 className="text-base font-medium mb-1.5 group-hover:text-foreground">
                {field.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {field.description}
              </p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted-foreground text-sm mt-8">
            No fields match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
