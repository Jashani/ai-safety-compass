import type { ProduceTemplate } from "./types";

// Hand-written produce prompts. One per (domain × create_mode) where it makes sense.
// The plan composer matches on domain ∩ create_mode and falls back to domain-only.
export const produceTemplates: ProduceTemplate[] = [
  {
    id: "med-words-linkedin-post",
    title: "Write a 400-word LinkedIn post on AI in your clinical practice",
    prompt:
      "Pick one specific moment in your clinical work where an AI tool helped, hurt, or could have. Describe it in 400 words. End with one question you wish someone with AI safety expertise would answer.",
    exampleAngles: [
      "A time the AI was confidently wrong and a colleague caught it",
      "A workflow you'd never trust to AI, and why",
      "A workflow where AI freed you to do better human work",
    ],
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "med-with_people-interview",
    title: "Interview one colleague about AI in your team",
    prompt:
      "Find 30 minutes with a colleague. Ask: where does AI show up in your work? Where do you not trust it? What would make you trust it more? Take notes. Share three things you learned with your team channel.",
    exampleAngles: [
      "Pick someone with very different seniority from you",
      "Pick someone who sees patients you don't",
      "Pick someone who's openly sceptical of AI",
    ],
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "with_people" },
    ],
  },
  {
    id: "misinfo-words-response",
    title: "Write a 500-word response to one piece of AI-disinformation analysis",
    prompt:
      "Pick one article or paper on AI and disinformation. Write 500 words on what it gets right, what it misses, and what your own field suggests. Post it on Substack or LinkedIn.",
    exampleAngles: [
      "Frame it as 'what a [your field] notices that the article missed'",
      "Apply the article's claims to a real recent example you've seen",
      "Argue for one concrete intervention the article didn't propose",
    ],
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "fow-words-job-letter",
    title: "Write a letter to your future self about your job in 2030",
    prompt:
      "Write 500 words to yourself in 2030. What part of your job do you hope is gone? What do you fear losing? What would you do this year to make the optimistic version more likely? Post it.",
    exampleAngles: [
      "From the optimistic future",
      "From the pessimistic future",
      "From the boring-most-likely future",
    ],
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "any-with_people-conversation",
    title: "Have one AI safety conversation outside the bubble",
    prompt:
      "Pick a friend or family member who doesn't think about AI safety. Tell them what you find interesting in 5 minutes. Listen for 10. Note where they pushed back, where they got curious, and what you couldn't explain well.",
    exampleAngles: [
      "Pick someone who's sceptical of tech",
      "Pick someone who's a heavy AI user",
      "Pick someone in a totally different field",
    ],
    labels: [{ axis: "create_mode", value: "with_people" }],
  },
];
