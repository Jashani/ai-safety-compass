import { Link } from "react-router-dom";

const Compass = () => (
  <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden>
    <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    <circle cx="60" cy="60" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.22" />
    <line x1="60" y1="6" x2="60" y2="14" stroke="currentColor" strokeWidth="1.2" />
    <line x1="60" y1="106" x2="60" y2="114" stroke="currentColor" strokeWidth="1" />
    <line x1="6" y1="60" x2="14" y2="60" stroke="currentColor" strokeWidth="1" />
    <line x1="106" y1="60" x2="114" y2="60" stroke="currentColor" strokeWidth="1" />
    <polygon points="60,18 64,60 60,60 56,60" fill="hsl(var(--accent))" />
    <polygon points="60,102 64,60 60,60 56,60" fill="currentColor" opacity="0.6" />
    <circle cx="60" cy="60" r="3" fill="currentColor" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16 relative">
        <div className="absolute top-10 right-6 text-foreground">
          <Compass />
        </div>

        <div className="flex justify-between items-center font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground mb-9">
          <span>AI Safety · Compass</span>
          <span>v2 / 2026</span>
        </div>

        <h1 className="text-[38px] font-medium tracking-[-0.025em] leading-[1.08] mb-3.5 max-w-[380px]">
          Your move into AI safety.
        </h1>
        <p className="text-[15px] text-muted-foreground leading-[1.55] mb-8 max-w-[400px]">
          Three quick questions about your background and how you create. We'll
          point the way for you.
        </p>

        <Link
          to="/intake"
          className="grid grid-cols-[24px_1fr_auto] items-center gap-3.5 bg-foreground text-background px-5 py-5 hover:opacity-95 transition-opacity"
        >
          <span className="font-mono text-[11px] tracking-[0.1em] opacity-75">01</span>
          <div>
            <p className="text-[15.5px] font-medium m-0">Build my action plan</p>
            <p className="text-[12.5px] opacity-70 mt-0.5 leading-snug">
              Three quick questions · 90 seconds
            </p>
          </div>
          <span className="text-lg">→</span>
        </Link>

        <Link
          to="/browse"
          className="grid grid-cols-[24px_1fr_auto] items-center gap-3.5 border-y border-border px-5 py-5 hover:bg-muted/40 transition-colors mb-9"
        >
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">02</span>
          <div>
            <p className="text-[15.5px] font-medium m-0">Browse by interest</p>
            <p className="text-[12.5px] text-muted-foreground mt-0.5 leading-snug">
              If you'd rather explore.
            </p>
          </div>
          <span className="text-lg text-muted-foreground">↗</span>
        </Link>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Curious about shifting into AI safety as a career? Check out{" "}
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
