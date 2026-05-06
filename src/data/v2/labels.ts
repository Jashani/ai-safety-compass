import type { LabelDef } from "./types";

// Domains shown in the intake as topic chips, grouped by `category` for the UI.
// `category` is purely a UI grouping device — matching uses `value` only.
export const domains: LabelDef[] = [
  // Philosophy
  { value: "philosophy_of_ai", display: "Philosophy of AI", category: "Philosophy" },
  { value: "moral_status_of_ai", display: "Moral status of AI", category: "Philosophy" },

  // AI effects on children
  { value: "ai_and_children", display: "AI effects on children", category: "AI effects on children" },

  // Catastrophic risk
  { value: "catastrophic_risk", display: "Catastrophic risk", category: "Catastrophic risk" },
  { value: "biorisk", display: "Biorisk", category: "Catastrophic risk" },
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

  // Misinformation
  { value: "misinformation", display: "Misinformation & disinformation", category: "Misinformation" },

  // Governance
  { value: "governance", display: "AI governance & policy", category: "Governance" },
  { value: "geopolitics", display: "Geopolitics of AI", category: "Governance" },
  { value: "future_of_work", display: "Future of work", category: "Governance" },

  // Domain-specific
  { value: "medical", display: "Medicine & mental health", category: "Domain-specific" },
  { value: "criminal_justice", display: "Criminal justice", category: "Domain-specific" },
];

// Stable category order for the intake UI.
export const domainCategories: string[] = [
  "Philosophy",
  "AI effects on children",
  "Catastrophic risk",
  "Technical AI safety",
  "Human–AI interaction",
  "Misinformation",
  "Governance",
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
