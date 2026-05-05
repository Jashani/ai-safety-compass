import type { Background } from "./types";

export const backgrounds: Background[] = [
  {
    id: "nursing",
    label: "Nursing",
    blurb:
      "Frontline experience with high-stakes decision-making, cognitive load under pressure, and patient-safety reporting culture — directly relevant to how AI tools are deployed and trusted in clinical settings.",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "skill", value: "clinical_practice" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "ethics" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "intent", value: "support_practitioners" },
    ],
  },
  {
    id: "journalism",
    label: "Journalism / communications",
    blurb:
      "Skills in research, interviewing, and writing for the public make journalists uniquely positioned to translate AI safety questions into stories that reach audiences who'd never read a paper.",
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "domain", value: "future_of_work" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "interviewing" },
      { axis: "skill", value: "research" },
      { axis: "intent", value: "raise_awareness" },
    ],
  },
  {
    id: "hr",
    label: "HR / people management",
    blurb:
      "Deep familiarity with how organisations actually adopt new tools and how work changes — relevant to the future-of-work questions and to building healthy AI deployment cultures.",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "skill", value: "people_management" },
      { axis: "skill", value: "process" },
      { axis: "skill", value: "communication" },
      { axis: "intent", value: "fieldbuilding" },
    ],
  },
  {
    id: "other",
    label: "Something else",
    blurb:
      "Pick the topics that pull you in and the ways you like to create — we'll work from there.",
    labels: [],
  },
];

export const backgroundsById: Record<string, Background> = Object.fromEntries(
  backgrounds.map((b) => [b.id, b])
);
