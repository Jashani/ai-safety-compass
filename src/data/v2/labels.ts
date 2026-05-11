import type { LabelDef } from "./types";

// Domains shown in the intake as topic chips, grouped by `category` for the UI.
// `category` is purely a UI grouping device — matching uses `value` only.
export const domains: LabelDef[] = [
  // Societal resilience & impacts
  { value: "societal_resilience", display: "Societal resilience", category: "Societal resilience & impacts" },
  { value: "ai_and_children", display: "AI effects on children", category: "Societal resilience & impacts" },
  { value: "pluralism", display: "Pluralism", category: "Societal resilience & impacts" },
  { value: "misinformation", display: "Misinformation & disinformation", category: "Societal resilience & impacts" },
  { value: "future_of_work", display: "Future of work", category: "Societal resilience & impacts" },

  // Catastrophic risk
  { value: "catastrophic_risk", display: "Catastrophic risk", category: "Catastrophic risk" },
  { value: "disempowerment", display: "Disempowerment", category: "Catastrophic risk" },
  { value: "cybersecurity", display: "Cybersecurity", category: "Catastrophic risk" },
  { value: "biosecurity", display: "Biosecurity", category: "Catastrophic risk" },
  { value: "autonomous_weapons", display: "Autonomous weapons", category: "Catastrophic risk" },

  // Technical AI safety
  { value: "technical_safety", display: "Technical AI safety", category: "Technical AI safety" },
  { value: "interpretability", display: "Mechanistic interpretability", category: "Technical AI safety" },
  { value: "control_and_oversight", display: "AI control & scalable oversight", category: "Technical AI safety" },
  { value: "scheming_and_deception", display: "Scheming & deception", category: "Technical AI safety" },

  // Human–AI interaction
  { value: "ai_companionship", display: "AI companionship", category: "Human–AI interaction" },
  { value: "manipulation_and_sycophancy", display: "Manipulation & sycophancy", category: "Human–AI interaction" },
  { value: "cognitive_resilience", display: "Cognitive resilience", category: "Human–AI interaction" },

  // Governance & policy
  { value: "governance", display: "AI governance", category: "Governance & policy" },
  { value: "policy", display: "Policy", category: "Governance & policy" },
  { value: "geopolitics", display: "Geopolitics of AI", category: "Governance & policy" },

  // Domain-specific
  { value: "medical", display: "Medicine & mental health", category: "Domain-specific" },
  { value: "mental_health", display: "Mental health", category: "Domain-specific" },
  { value: "criminal_justice", display: "Criminal justice", category: "Domain-specific" },
  { value: "finance", display: "Finance", category: "Domain-specific" },
  { value: "philosophy_and_morality", display: "Philosophy & morality", category: "Domain-specific" },
  { value: "hr_and_people", display: "HR & people management", category: "Domain-specific" },
  { value: "operations", display: "Operations", category: "Domain-specific" },
  { value: "education", display: "Education", category: "Domain-specific" },
  { value: "journalism", display: "Journalism & communications", category: "Domain-specific" },
  { value: "social_research", display: "Social research", category: "Domain-specific" },
  { value: "consulting", display: "Consulting & strategy", category: "Domain-specific" },
];

// Stable category order for the intake UI.
export const domainCategories: string[] = [
  "Societal resilience & impacts",
  "Catastrophic risk",
  "Technical AI safety",
  "Human–AI interaction",
  "Governance & policy",
  "Domain-specific",
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
