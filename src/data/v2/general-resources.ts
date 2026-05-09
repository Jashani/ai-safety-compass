import type { BackgroundResource } from "./types";

// Always-visible resources on the plan page — foundational reads that don't
// belong to any one topic or background.
export const generalResources: BackgroundResource[] = [
  {
    title: "11 essential readings on AI safety, risk, and alignment",
    url: "https://80000hours.org/articles/11-essential-resources-ai-risk/",
    byline: "80,000 Hours",
    summary:
      "A short, hand-picked starter list. If you only read 11 things, read these.",
  },
  {
    title: "Technical AI safety upskilling resources",
    url: "https://80000hours.org/2025/06/technical-ai-safety-upskilling-resources/",
    byline: "80,000 Hours",
    summary:
      "Curated guide and resource list for upskilling in technical AI safety.",
  },
  {
    title: "AI policy upskilling resources",
    url: "https://80000hours.org/2026/04/want-to-upskill-in-ai-policy-here-are-57-useful-resources/",
    byline: "80,000 Hours",
    summary:
      "Curated guide and resource list for upskilling in AI policy.",
  },
];
