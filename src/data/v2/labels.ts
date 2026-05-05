import type { LabelDef } from "./types";

// Domains shown in the intake as topic chips.
export const domains: LabelDef[] = [
  { value: "medical", display: "AI in healthcare & medicine" },
  { value: "misinformation", display: "Misinformation & disinformation" },
  { value: "future_of_work", display: "Future of work" },
  { value: "ai_and_children", display: "AI effects on children" },
  { value: "human_ai_relationships", display: "Human–AI relationships" },
  { value: "governance", display: "AI governance & policy" },
  { value: "biorisk", display: "Biorisk" },
  { value: "infrastructure", display: "Infrastructure & deployment" },
  { value: "art_and_culture", display: "Art & culture" },
  { value: "evals_and_redteaming", display: "Evaluations & red-teaming" },
];

// Create-mode chips. Phrased as preferences, not identities.
export const createModes: LabelDef[] = [
  { value: "words", display: "Words", description: "Posts, articles, comments, scripts, fiction" },
  { value: "visuals", display: "Visuals", description: "Images, video, infographics, design" },
  { value: "voice", display: "Voice", description: "Podcasts, audio essays, talks" },
  { value: "with_people", display: "With people", description: "Organising, facilitating, interviewing" },
  { value: "code", display: "Code & systems", description: "Tools, scripts, data analysis" },
];

// Skill vocabulary kept for matching; not shown directly in v2 intake.
export const skills: LabelDef[] = [
  { value: "writing", display: "Writing" },
  { value: "communication", display: "Communication" },
  { value: "research", display: "Research" },
  { value: "clinical_practice", display: "Clinical practice" },
  { value: "ethics", display: "Ethics" },
  { value: "critical_thinking", display: "Critical thinking" },
  { value: "facilitation", display: "Facilitation" },
  { value: "programming", display: "Programming" },
  { value: "interviewing", display: "Interviewing" },
  { value: "people_management", display: "People management" },
  { value: "process", display: "Process" },
  { value: "data_analysis", display: "Data analysis" },
  { value: "design", display: "Design" },
];

export const domainDisplay: Record<string, string> = Object.fromEntries(
  domains.map((d) => [d.value, d.display])
);
export const createModeDisplay: Record<string, string> = Object.fromEntries(
  createModes.map((d) => [d.value, d.display])
);
