import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "med-clinician-survey",
    title: "Mini-survey: how do clinicians actually use AI tools?",
    blurb:
      "Ask 5–10 clinicians (in person, on LinkedIn, on Slack) how they currently use AI tools and where they don't trust them. Synthesise into a short post.",
    steps: [
      "Draft 5 short questions you'd want answered",
      "DM 10 clinicians, aim for 5 responses",
      "Write a 600-word post on the patterns you saw",
      "Share on LinkedIn and tag 2 people whose answers shaped your thinking",
    ],
    timeEstimate: "a day",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "words" },
      { axis: "create_mode", value: "with_people" },
      { axis: "skill", value: "interviewing" },
    ],
  },
  {
    id: "med-chatbot-firstopinion",
    title: "Map the risks of patients using AI as a 'first opinion'",
    blurb:
      "Pose 5 realistic patient questions to a popular consumer chatbot. Document where it's helpful, where it's risky, and what a safe-deployment guideline would say.",
    steps: [
      "Pick 5 realistic patient questions across triage, medication, mental health",
      "Run them through one or two consumer chatbots",
      "Score each response on accuracy, safety, and likelihood of harm",
      "Write up findings as a thread or short article",
    ],
    timeEstimate: "half a day",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "words" },
      { axis: "skill", value: "clinical_practice" },
    ],
  },
  {
    id: "misinfo-debunkbot-reactions",
    title: "Try DebunkBot and write up what surprised you",
    blurb:
      "Spend 30 minutes with DebunkBot from a few angles, then write a short post on what worked, what didn't, and what it suggests for misinformation interventions.",
    steps: [
      "Try DebunkBot with 3 different prompts (sceptic, true believer, fence-sitter)",
      "Note what changed your mind and what felt manipulative",
      "Write 500 words connecting the experience to the underlying paper",
    ],
    timeEstimate: "2 hours",
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "words" },
      { axis: "action", value: "try_it" },
    ],
  },
  {
    id: "fow-shadowed-day",
    title: "Shadow yourself for a day with AI on, then off",
    blurb:
      "Track every AI-assisted task you did this week. Then do the same work without AI for a day. Write up the delta — quality, time, what changed.",
    steps: [
      "Log AI-assisted tasks for 2 days",
      "Repeat the same work without AI for 1 day",
      "Compare: quality, time, mood, outcomes",
      "Write 600 words on what 'AI-augmented work' actually feels like",
    ],
    timeEstimate: "a week of background, half a day to write",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "words" },
    ],
  },
];
