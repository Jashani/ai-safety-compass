import type { Person } from "./types";

export const people: Person[] = [
  {
    id: "david-timis",
    name: "David Timis",
    role: "Future of work commentator",
    why: "Posts regularly on LinkedIn about how AI is reshaping work and what that means for individuals and organisations. A good first follow if future-of-work is your angle.",
    links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/davidtimis/" }],
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "intent", value: "raise_awareness" },
    ],
  },
  {
    id: "joe-carlsmith",
    name: "Joe Carlsmith",
    role: "Philosopher writing on AI risk",
    why: "Among the most thoughtful and accessible writers on existential risk from AI. His audio essays are a good way in if you want depth without a textbook.",
    links: [
      { label: "Website", url: "https://joecarlsmith.com/" },
      { label: "Substack", url: "https://joecarlsmith.substack.com/" },
    ],
    labels: [
      { axis: "domain", value: "catastrophic_risk" },
      { axis: "domain", value: "philosophy_of_ai" },
    ],
  },
  {
    id: "kevin-esvelt",
    name: "Kevin Esvelt",
    role: "Biosecurity researcher, MIT Media Lab",
    why: "Leading thinker on biosecurity in the age of AI. Posts about dual-use research, biorisk policy, and concrete defences.",
    links: [{ label: "X", url: "https://x.com/kesvelt" }],
    labels: [{ axis: "domain", value: "biorisk" }],
  },
  {
    id: "sherry-turkle",
    name: "Sherry Turkle",
    role: "Sociologist of human–technology relationships, MIT",
    why: "Decades of work on what intimate technology does to us. Essential follow if you care about AI companionship and what it means for human connection.",
    links: [{ label: "X", url: "https://x.com/STurkle" }],
    labels: [{ axis: "domain", value: "ai_companionship" }],
  },
  {
    id: "nataliya-kosmyna",
    name: "Nataliya Kos'myna",
    role: "Researcher, MIT Media Lab",
    why: "Lead author of the 'Your Brain on ChatGPT' study. Posts on cognitive impacts of AI use and the science behind them.",
    links: [{ label: "MIT profile", url: "https://www.media.mit.edu/people/nkosmyna/overview/" }],
    labels: [{ axis: "domain", value: "cognitive_resilience" }],
  },
  {
    id: "daron-acemoglu",
    name: "Daron Acemoglu",
    role: "Economist, MIT",
    why: "Nobel-laureate economist whose work on automation and labour markets is foundational for thinking clearly about AI's impact on work.",
    links: [{ label: "X", url: "https://x.com/DAcemogluMIT" }],
    labels: [{ axis: "domain", value: "future_of_work" }],
  },
];
