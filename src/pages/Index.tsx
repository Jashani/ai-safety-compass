import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-24">
        <header className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            AI Safety Compass
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Find your first move into AI safety, today. Whatever your background.
          </p>
        </header>

        <div className="space-y-4 mb-16">
          <Link
            to="/intake"
            className="block rounded-lg border border-foreground bg-foreground text-background p-5 hover:opacity-90 transition-opacity"
          >
            <h2 className="text-base font-medium mb-1">Build my action plan</h2>
            <p className="text-sm opacity-80 leading-relaxed">
              Three quick questions. You'll get something concrete to read, do, and make today.
            </p>
          </Link>

          <Link
            to="/browse"
            className="block rounded-lg border border-border bg-card p-5 hover:border-muted-foreground/40 transition-colors"
          >
            <h2 className="text-base font-medium mb-1">Browse content</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Poke around by background and interests.
            </p>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Curious about shifting into AI safety as a career? Start with{" "}
          <a
            href="https://80000hours.substack.com/p/how-to-get-into-ai-safety-in-3-months"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            How to get into AI safety in 3 months
          </a>
          .
        </p>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Built for anyone taking first steps into the field, or for the curious.{" "}
          <a
            href="https://github.com/Jashani/ai-safety-compass"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Contribute on GitHub
          </a>
          {" "}(this could be your side project!)
        </p>
      </div>
    </div>
  );
};

export default Index;
