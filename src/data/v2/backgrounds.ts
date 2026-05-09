import type { Background } from "./types";

export const backgrounds: Background[] = [
  {
    id: "software_engineering",
    label: "Software engineering",
    blurb:
      "You read code for a living and have intuition for what real systems do at edges and under load. That makes you well placed to look at how AI is actually built, deployed, and broken — interpretability, evaluations, red-teaming, and the boring infra questions that decide whether a safeguard holds.",
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "domain", value: "interpretability" },
      { axis: "domain", value: "control_and_oversight" },
      { axis: "domain", value: "scheming_and_deception" },
      { axis: "domain", value: "cybersecurity" },
      { axis: "skill", value: "programming" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "skill", value: "process" },
      { axis: "intent", value: "build_and_research" },
    ],
  },
  {
    id: "data_science",
    label: "Data science / ML",
    blurb:
      "You already speak the language of models, evals, and uncertainty. That's a short step from the empirical heart of AI safety — interpretability, scalable oversight, evaluating whether systems do what we think they do.",
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "domain", value: "interpretability" },
      { axis: "domain", value: "control_and_oversight" },
      { axis: "domain", value: "scheming_and_deception" },
      { axis: "skill", value: "data_analysis" },
      { axis: "skill", value: "programming" },
      { axis: "skill", value: "research" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "intent", value: "build_and_research" },
    ],
  },
  {
    id: "product_management",
    label: "Product management",
    blurb:
      "You're paid to ask whether a feature actually helps the person using it — and whether the org should ship it at all. That's a useful disposition for AI products, where small choices about defaults, friction, and feedback loops decide whether users end up better or worse off.",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "manipulation_and_sycophancy" },
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "process" },
      { axis: "skill", value: "critical_thinking" },
    ],
  },
  {
    id: "design",
    label: "Design (UX / product)",
    blurb:
      "You think about how interfaces shape behaviour — what they nudge people toward, what they hide, whose perspective they centre. That's the front line of manipulation, sycophancy, AI companions, and the more intimate questions about cognitive resilience.",
    labels: [
      { axis: "domain", value: "manipulation_and_sycophancy" },
      { axis: "domain", value: "ai_companionship" },
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "domain", value: "pluralism" },
      { axis: "skill", value: "design" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "research" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    blurb:
      "You know how attention moves, how messages land, and how persuasion is engineered. That's a sharp lens on misinformation and on the manipulation questions AI raises — and the practical skill of getting safety ideas in front of people who'd never click a paper.",
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "domain", value: "manipulation_and_sycophancy" },
      { axis: "domain", value: "future_of_work" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "design" },
      { axis: "intent", value: "raise_awareness" },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    blurb:
      "You see how organisations actually work — where the failure modes hide, what the SOP doesn't capture, what happens when a tool gets dropped into a real workflow. That's exactly the lens AI deployment needs, and it's underrepresented in the safety conversation.",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "governance" },
      { axis: "skill", value: "process" },
      { axis: "skill", value: "people_management" },
      { axis: "skill", value: "communication" },
    ],
  },
  {
    id: "finance",
    label: "Finance / accounting",
    blurb:
      "You work where small errors compound, where audit trails matter, and where automation is already changing roles fast. That gives you a grounded view on AI in finance, on what real oversight looks like in practice, and on the cybersecurity surface that comes with all of it.",
    labels: [
      { axis: "domain", value: "finance" },
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "cybersecurity" },
      { axis: "skill", value: "data_analysis" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "skill", value: "process" },
    ],
  },
  {
    id: "hr",
    label: "HR / people management",
    blurb:
      "You see, up close, how organisations actually adopt new tools — who benefits, who quietly loses ground, and what changes about the job afterwards. That's central to the future-of-work questions and to whether AI deployment leaves people better or worse off.",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "disempowerment" },
      { axis: "skill", value: "people_management" },
      { axis: "skill", value: "process" },
      { axis: "skill", value: "communication" },
      { axis: "intent", value: "support_practitioners" },
    ],
  },
  {
    id: "consulting",
    label: "Consulting / strategy",
    blurb:
      "You're paid to land in unfamiliar contexts, get to the crux fast, and write things decision-makers will actually read. Translate that to AI policy, governance, and how organisations should be thinking about adoption — there's a real shortage of people who can do both.",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "policy" },
      { axis: "domain", value: "geopolitics" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "research" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "critical_thinking" },
    ],
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship / startup",
    blurb:
      "You build things and ship them. The safety field needs more people who can prototype tools, evals, and small organisations — not just write about what should exist. Your bias to action is the asset.",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "technical_safety" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "process" },
      { axis: "skill", value: "design" },
      { axis: "intent", value: "build_and_research" },
    ],
  },
  {
    id: "journalism",
    label: "Journalism / communications",
    blurb:
      "Skills in research, interviewing, and writing for the public make journalists uniquely positioned to translate AI safety questions into stories that reach audiences who'd never read a paper — and to keep an eye on whose stories are missing.",
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "pluralism" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "interviewing" },
      { axis: "skill", value: "research" },
      { axis: "intent", value: "raise_awareness" },
    ],
  },
  {
    id: "education",
    label: "Education / teaching",
    blurb:
      "You watch, daily, how people actually learn — and right now you're watching that change because of AI. That makes you central to the questions about AI and children, cognitive resilience, and how a generation builds judgment alongside tools that do the thinking for them.",
    labels: [
      { axis: "domain", value: "ai_and_children" },
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "pluralism" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "facilitation" },
      { axis: "skill", value: "writing" },
      { axis: "intent", value: "support_practitioners" },
      { axis: "intent", value: "raise_awareness" },
    ],
  },
  {
    id: "medicine",
    label: "Medicine",
    blurb:
      "Clinicians see, before almost anyone else, what happens when an AI tool meets a real decision with real consequences. Your sense for evidence, error, and the limits of automation is exactly what the AI-in-medicine and biosecurity conversations need more of.",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "domain", value: "biosecurity" },
      { axis: "skill", value: "clinical_practice" },
      { axis: "skill", value: "research" },
      { axis: "skill", value: "ethics" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "intent", value: "support_practitioners" },
    ],
  },
  {
    id: "nursing",
    label: "Nursing / Social care",
    blurb:
      "Frontline experience with high-stakes decisions, cognitive load under pressure, and a strong reporting culture — directly relevant to how AI tools are deployed and trusted in clinical and care settings, and to the people, often vulnerable, they're used on.",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "domain", value: "societal_resilience" },
      { axis: "domain", value: "ai_and_children" },
      { axis: "skill", value: "clinical_practice" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "ethics" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "intent", value: "support_practitioners" },
    ],
  },
  {
    id: "mental_health",
    label: "Mental health / therapy",
    blurb:
      "You already think carefully about attachment, influence, and the difference between feeling helped and being helped. That's the heart of the questions about AI companions, sycophancy, and how these systems affect cognitive resilience — for adults and for kids.",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "domain", value: "ai_companionship" },
      { axis: "domain", value: "manipulation_and_sycophancy" },
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "domain", value: "ai_and_children" },
      { axis: "skill", value: "clinical_practice" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "ethics" },
      { axis: "skill", value: "interviewing" },
      { axis: "intent", value: "support_practitioners" },
    ],
  },
  {
    id: "social_research",
    label: "Social research",
    blurb:
      "You know how to ask a question carefully, design a study, and survive peer review. The empirical evidence base on how AI is actually changing societies, workplaces, and power is thin — there's a lot of room for someone who can do this rigorously.",
    labels: [
      { axis: "domain", value: "societal_resilience" },
      { axis: "domain", value: "pluralism" },
      { axis: "domain", value: "misinformation" },
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "disempowerment" },
      { axis: "skill", value: "research" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "interviewing" },
      { axis: "skill", value: "data_analysis" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "intent", value: "build_and_research" },
    ],
  },
  {
    id: "policy",
    label: "Policy / government",
    blurb:
      "You know how rules actually get made, watered down, and implemented. AI governance will live or die by people who understand institutions from the inside — there's a particular shortage of people who can hold both the policy detail and the technical reality at once.",
    labels: [
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "policy" },
      { axis: "domain", value: "geopolitics" },
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "catastrophic_risk" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "research" },
      { axis: "skill", value: "communication" },
      { axis: "skill", value: "critical_thinking" },
    ],
  },
  {
    id: "law",
    label: "Law / legal",
    blurb:
      "You're trained to take fuzzy facts and pin them to a framework — exactly the move AI governance keeps needing. Liability, evidence, due process, criminal justice tools, the ethics underneath it all: there's no shortage of unsettled ground where careful legal thinking is the bottleneck.",
    labels: [
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "policy" },
      { axis: "domain", value: "criminal_justice" },
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "research" },
      { axis: "skill", value: "ethics" },
      { axis: "skill", value: "critical_thinking" },
      { axis: "intent", value: "support_practitioners" },
    ],
  },
  {
    id: "art",
    label: "Art / creative",
    blurb:
      "You already work with the questions AI is forcing on everyone — about authorship, attention, what's real, whose voice carries, what art is for. That makes you well placed to shape the public conversation, not just react to it.",
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "domain", value: "future_of_work" },
      { axis: "domain", value: "ai_companionship" },
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "domain", value: "pluralism" },
      { axis: "skill", value: "design" },
      { axis: "skill", value: "writing" },
      { axis: "skill", value: "communication" },
      { axis: "intent", value: "raise_awareness" },
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
