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
];
