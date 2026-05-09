import type { ProduceTemplate } from "./types";

// Hand-written produce prompts. The plan composer matches on
// domain ∩ create_mode and falls back to mode-only or domain-agnostic.
export const produceTemplates: ProduceTemplate[] = [
  // ─── WORDS ──────────────────────────────────────────────────────────────
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
    id: "tech-words-paper-explainer",
    title: "Explain a recent AI safety paper in 600 words for non-experts",
    prompt:
      "Pick a paper you found interesting in the last few weeks. Write 600 words explaining what it claims, why it matters, and what you're not sure about — written so a smart friend without an ML background can follow. Post it.",
    exampleAngles: [
      "Lead with the one finding that surprised you most",
      "Frame it as 'what this changes about how I'd build/deploy AI'",
      "End with one open question you wish someone would tackle next",
    ],
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "interp-words-walkthrough",
    title: "Walk through one mech interp result that surprised you",
    prompt:
      "Pick one finding from a recent interpretability paper or blog post. Write 700 words walking a careful reader through what was measured, what the result was, and why you found it surprising. Include the key figure if you can.",
    exampleAngles: [
      "A feature/circuit that turned out to mean something unexpected",
      "A negative result that should change someone's priors",
      "A finding that's been over- or under-hyped in public discussion",
    ],
    labels: [
      { axis: "domain", value: "interpretability" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "gov-words-policy-take",
    title: "Write a 600-word LinkedIn post on a current AI policy debate",
    prompt:
      "Pick one AI policy proposal or debate that's live right now. Write 600 words on what it gets right, where it's weak, and what someone from your background would change. End with one specific ask of policymakers or readers.",
    exampleAngles: [
      "A proposal you think is well-meaning but won't work in practice",
      "A debate where your industry's experience is being ignored",
      "A regulation other jurisdictions could borrow from",
    ],
    labels: [
      { axis: "domain", value: "governance" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "policy-words-rep-letter",
    title: "Draft a letter to your MP / representative on one AI policy ask",
    prompt:
      "Pick one specific AI policy ask. Write a 400-word letter to your representative making the case — concrete, grounded in your field, ending with a clear request. Send it (and post a redacted version online).",
    exampleAngles: [
      "A safety provision missing from a current bill",
      "An AI use in your sector your rep should know is happening",
      "A constituent perspective they probably haven't heard yet",
    ],
    labels: [
      { axis: "domain", value: "policy" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "companion-words-week-reflection",
    title: "Write a reflection on a week using an AI companion app",
    prompt:
      "Spend a week using an AI companion (Replika, Character.AI, a roleplay setup with a frontier model — your choice). Write 700 words on what surprised you, what felt off, and one thing you'd want a thoughtful designer to change.",
    exampleAngles: [
      "Moments where the AI's compliance felt unhelpful",
      "Moments it gave you something a human couldn't or wouldn't",
      "What it would mean for a 14-year-old to use this instead of you",
    ],
    labels: [
      { axis: "domain", value: "ai_companionship" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "children-words-parent-letter",
    title: "Write an open letter to parents about kids and AI",
    prompt:
      "Write 600 words to parents about how to think about their kids using AI — what to watch for, what to be relaxed about, what to set limits on. Ground it in something specific you've seen or read.",
    exampleAngles: [
      "From a teacher's vantage point",
      "From a clinician's vantage point",
      "From a parent who's already navigating this",
    ],
    labels: [
      { axis: "domain", value: "ai_and_children" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "fin-words-industry-take",
    title: "Write 600 words on AI risk in financial services from your seat",
    prompt:
      "Pick one place in your finance/accounting workflow where AI is starting to do real work. Write 600 words on where it's helpful, where it's risky, and what you'd want auditors or regulators to ask.",
    exampleAngles: [
      "A control you wouldn't trust an AI to do unsupervised",
      "A model risk question that doesn't fit existing audit frameworks",
      "A failure mode that audit trails would miss",
    ],
    labels: [
      { axis: "domain", value: "finance" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "cyber-words-threat-summary",
    title: "Summarise one current AI cybersecurity threat for a non-expert audience",
    prompt:
      "Pick a real, recent AI-cyber incident or threat (prompt injection in the wild, model-weight exfiltration, deepfake-enabled fraud, etc.). Write 500 words explaining what happened, why it's instructive, and what defenders should learn from it.",
    exampleAngles: [
      "A specific incident with a clear sequence of events",
      "A class of attack that's about to become commonplace",
      "A defensive practice that already works but isn't widely adopted",
    ],
    labels: [
      { axis: "domain", value: "cybersecurity" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "cogres-words-week-experiment",
    title: "Write up a week with vs without AI on a specific kind of task",
    prompt:
      "Pick one type of task you do regularly (writing, coding, planning, learning). Spend three days using AI for it, then three days without. Write 600 words on the differences — quality, speed, what you noticed about your own thinking.",
    exampleAngles: [
      "A task where AI clearly helped",
      "A task where AI subtly degraded your thinking",
      "A task where the difference was smaller than you expected",
    ],
    labels: [
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "legal-words-case-comment",
    title: "Pick one AI lawsuit and write a 700-word commentary",
    prompt:
      "Find one ongoing or recent AI-related case (copyright, liability, criminal evidence, deepfake harassment, employment). Write 700 words on the legal question at stake, why it matters, and what your reading suggests about how it should resolve.",
    exampleAngles: [
      "A copyright case with implications beyond the parties",
      "A criminal-justice case involving AI-generated evidence",
      "A liability case where the legal framework hasn't caught up",
    ],
    labels: [
      { axis: "domain", value: "criminal_justice" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "philosophy-words-essay",
    title: "Write a 1000-word essay on one moral question AI raises",
    prompt:
      "Pick one moral question AI is forcing on us — moral status of systems, authenticity of AI-mediated relationships, responsibility under automation. Write 1000 words taking a clear position and engaging the strongest counter-argument honestly.",
    exampleAngles: [
      "A question where the easy answer is wrong",
      "A question where careful thinking changes your view",
      "A question philosophers are getting wrong by missing the technical reality",
    ],
    labels: [
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "manip-words-mind-changed",
    title: "Write about a time AI changed your mind — well or badly",
    prompt:
      "Pick a specific moment where an AI's response shifted your view on something. Write 500 words describing what it said, why it worked, and whether — looking back — you think you were persuaded or manipulated.",
    exampleAngles: [
      "A time it helped you see something you were missing",
      "A time it told you what you wanted to hear",
      "A time it gave you confidence in a view that turned out to be wrong",
    ],
    labels: [
      { axis: "domain", value: "manipulation_and_sycophancy" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "pluralism-words-missing-voice",
    title: "Write about a perspective AI tools consistently miss",
    prompt:
      "Pick a cultural context, professional perspective, or worldview that current AI tools handle poorly. Write 600 words on what they get wrong, with real examples from your own use, and what better looks like.",
    exampleAngles: [
      "A non-English-speaking community whose context flattens out",
      "A professional perspective the model defaults around",
      "A minority political/religious view the model can't reason from",
    ],
    labels: [
      { axis: "domain", value: "pluralism" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "bio-words-public-take",
    title: "Write 600 words on AI and biorisk from a non-expert-friendly angle",
    prompt:
      "Pick one specific concern at the intersection of AI and biology (uplift for novices, automated wet-lab work, dual-use research). Write 600 words explaining the concern in plain terms and what reasonable response looks like.",
    exampleAngles: [
      "What's actually new versus what's continuous with prior biorisk",
      "A capability that's gone from theoretical to practical recently",
      "A policy lever someone in your country could push on",
    ],
    labels: [
      { axis: "domain", value: "biosecurity" },
      { axis: "create_mode", value: "words" },
    ],
  },

  // ─── VISUALS ────────────────────────────────────────────────────────────
  {
    id: "tech-visuals-concept-explainer",
    title: "Make a one-page infographic explaining one AI safety concept",
    prompt:
      "Pick one concept (alignment, scalable oversight, eval, scheming, sandbagging, chain-of-thought monitoring). Make a one-page visual explaining it to someone smart but new. Post it on LinkedIn or Twitter.",
    exampleAngles: [
      "A concept you wish someone had drawn for you a year ago",
      "A concept usually explained in jargon that a picture would clarify",
      "A common misconception, with a 'what people think vs what's actually meant' layout",
    ],
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "misinfo-visuals-deepfake-spotter",
    title: "Design a visual guide to spotting AI-generated content",
    prompt:
      "Make a one-page visual that helps a non-technical reader spot AI-generated images, video, or audio. Use real examples, label what to look at, keep it shareable.",
    exampleAngles: [
      "A 'before AI / after AI' comparison of common giveaways",
      "A flowchart for 'should I trust this image?'",
      "A poster aimed at older relatives on social media",
    ],
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "fow-visuals-job-map",
    title: "Sketch a visual map of which parts of your job AI is touching",
    prompt:
      "Draw your job as a map: tasks, decisions, hand-offs. Mark in colour which parts AI already does, which it could, and which it shouldn't. Share with a one-paragraph caption.",
    exampleAngles: [
      "A workflow you suspect will look very different in two years",
      "A workflow you think is more resistant than people assume",
      "A team's workflow, not just yours",
    ],
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "gov-visuals-tracker",
    title: "Design a one-page visual of current AI legislation in your country",
    prompt:
      "Make a one-page graphic showing the AI bills, frameworks, or executive actions live in your jurisdiction right now. What stage they're at, who they cover, what they actually require. Share it.",
    exampleAngles: [
      "A timeline view from first proposal to expected enforcement",
      "A 'who's covered, who isn't' venn diagram",
      "A side-by-side with one peer jurisdiction",
    ],
    labels: [
      { axis: "domain", value: "governance" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "children-visuals-parent-poster",
    title: "Design a poster for parents on healthy AI use for kids",
    prompt:
      "Make a one-page printable for parents — concrete dos and don'ts, age-banded if helpful, grounded in actual research not vibes. Make it good enough that a school would put it up.",
    exampleAngles: [
      "Banded by age (5–8, 9–12, 13–17)",
      "Framed around situations ('homework', 'social', 'when upset')",
      "A 'questions to ask your kid' version instead of rules",
    ],
    labels: [
      { axis: "domain", value: "ai_and_children" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "philosophy-visuals-comic",
    title: "Make a 4-panel comic on an AI moral dilemma",
    prompt:
      "Pick one moral dilemma AI raises. Draw a 4-panel comic that lands the question without resolving it cheaply. Stick figures are fine.",
    exampleAngles: [
      "A trolley-problem variant that's actually about AI behaviour",
      "A scene from work where someone has to choose what to delegate",
      "A future-set scene that makes today's choice feel concrete",
    ],
    labels: [
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "companion-visuals-portrait-series",
    title: "Make a small portrait series on people who use AI companions",
    prompt:
      "Talk to (or imagine, if you must) 3–5 people who use AI companions for different reasons. Make a portrait series — photo, drawing, or composite — with a caption from each. Aim for empathy, not judgement.",
    exampleAngles: [
      "A grief-context user, a roleplay user, a productivity user",
      "Different ages or life stages",
      "Yourself as one of the portraits",
    ],
    labels: [
      { axis: "domain", value: "ai_companionship" },
      { axis: "create_mode", value: "visuals" },
    ],
  },

  // ─── VOICE ──────────────────────────────────────────────────────────────
  {
    id: "tech-voice-paper-summary",
    title: "Record a 5-minute audio summary of one AI safety paper",
    prompt:
      "Pick a paper you've read recently. Record yourself, in 5 minutes, explaining the claim, the method, and your honest take — to one specific friend who asked. Post the audio.",
    exampleAngles: [
      "A paper that changed your view",
      "A paper you think is over-cited",
      "A paper that's hard to read but important",
    ],
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "tech-voice-shortform-clip",
    title: "Make a 60-second short-form video on one safety concept",
    prompt:
      "Pick one concept you can explain end-to-end in 60 seconds (alignment tax, sycophancy, eval gaming, sandbagging). Film it as a single take — phone camera, good lighting. Post on TikTok / Reels / YouTube Shorts.",
    exampleAngles: [
      "Lead with the surprising/counterintuitive bit",
      "Use one prop or sketch on paper",
      "End with 'one thing to watch for in your own use'",
    ],
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "misinfo-voice-tiktok",
    title: "Make a 60-second video on one AI misinformation tactic",
    prompt:
      "Pick one specific tactic (lipsync deepfake, fabricated quote, AI-generated 'eyewitness' image, sock-puppet network). Make a 60-second video showing how it works and how to spot it. Post it.",
    exampleAngles: [
      "A real recent example, walked through frame by frame",
      "A demo using a free tool — show the seams",
      "A 'three things that should make you suspicious' format",
    ],
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "fow-voice-monologue",
    title: "Record a 5-minute voice memo on how AI is changing your job",
    prompt:
      "Sit down with a recorder. In 5 minutes, talk through one thing about your job that's already different because of AI, one thing you're watching for, and one thing you're choosing to keep doing yourself. Post or share with friends.",
    exampleAngles: [
      "A specific task that's collapsed in time",
      "A skill you're worried about losing",
      "Something you do now that didn't exist a year ago",
    ],
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "med-voice-clinical-take",
    title: "Record a 5-minute audio on AI in your clinical practice",
    prompt:
      "Record a 5-minute clinical take: a real moment with an AI tool, what you noticed, what your safety brain flagged. Share with your team channel or a clinician audience.",
    exampleAngles: [
      "A near-miss that the AI nearly contributed to",
      "A workflow it actually made safer",
      "A handoff with the AI that nobody's protocolised yet",
    ],
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "companion-voice-walkthrough",
    title: "Record yourself walking through your AI chatbot use",
    prompt:
      "Open a recent chat with an AI assistant or companion. Screen-record yourself walking through it for 5–10 minutes — what you asked, what it gave you, what felt off. Post or share.",
    exampleAngles: [
      "A vulnerable moment where the AI did or didn't help",
      "A long thread where you can see the model drift",
      "A side-by-side of two assistants on the same prompt",
    ],
    labels: [
      { axis: "domain", value: "ai_companionship" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "cogres-voice-rant",
    title: "Record a candid 10-minute audio on cognitive offloading",
    prompt:
      "Record yourself, candidly, for 10 minutes on what you've noticed about your own thinking now that AI is in it. What you've stopped doing. What you've quietly lost. What you're choosing to protect.",
    exampleAngles: [
      "Reading: are you skimming more, retaining less?",
      "Writing: what does your first draft look like now?",
      "Disagreement: are you more or less able to sit with it?",
    ],
    labels: [
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "policy-voice-podcast-episode",
    title: "Record a 15-minute podcast episode on one AI policy debate",
    prompt:
      "Pick one live AI policy debate. Record a 15-minute solo episode: what's being proposed, what the strongest critique is, what your view is and why. Publish to Spotify / YouTube / a personal feed.",
    exampleAngles: [
      "A debate where the discourse is missing your industry's perspective",
      "A debate where you've changed your mind",
      "A debate that's about to break out and isn't yet",
    ],
    labels: [
      { axis: "domain", value: "policy" },
      { axis: "create_mode", value: "voice" },
    ],
  },

  // ─── WITH PEOPLE (single conversation / session) ────────────────────────
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
  {
    id: "children-with_people-parent-chat",
    title: "Have a 30-minute conversation with a parent about their kid and AI",
    prompt:
      "Find one parent (yours, a friend's, a colleague) and ask, for 30 minutes, how their kid actually uses AI — for school, socially, when upset. Listen more than you talk. Share three things you learned with someone who works on AI products.",
    exampleAngles: [
      "A parent of a primary-age child",
      "A parent of a teenager",
      "A parent who's openly worried about it",
    ],
    labels: [
      { axis: "domain", value: "ai_and_children" },
      { axis: "create_mode", value: "with_people" },
    ],
  },
  {
    id: "children-with_people-teacher-talk",
    title: "Talk to a teacher friend about AI in their classroom",
    prompt:
      "Find a teacher you know. Ask, for 30 minutes, what AI looks like in their classroom this year — what kids are doing, what the school says, what they wish someone was building or asking. Share two of their answers publicly with permission.",
    exampleAngles: [
      "A primary-school teacher",
      "A secondary-school teacher of a 'writing-heavy' subject",
      "A SEN / additional-needs teacher",
    ],
    labels: [
      { axis: "domain", value: "ai_and_children" },
      { axis: "create_mode", value: "with_people" },
    ],
  },
  {
    id: "policy-with_people-rep-meeting",
    title: "Schedule a meeting with your MP / representative on AI policy",
    prompt:
      "Find your representative's office. Ask for a 15–30 minute meeting on one specific AI policy ask you care about. Show up prepared, bring one page of background, ask for a concrete next step.",
    exampleAngles: [
      "A bill currently in committee",
      "An AI-related concern in your sector that hasn't reached them",
      "A constituent letter campaign you're already doing",
    ],
    labels: [
      { axis: "domain", value: "policy" },
      { axis: "create_mode", value: "with_people" },
    ],
  },
  {
    id: "fow-with_people-colleague-chat",
    title: "Talk to one colleague about how AI is changing their job",
    prompt:
      "Find 30 minutes with a colleague you don't work with closely. Ask: what's changed in your work since AI got useful? What are you doing differently? What are you worried about? Share two things you learned.",
    exampleAngles: [
      "Someone in a function very different from yours",
      "Someone with much more or much less seniority",
      "Someone openly sceptical of AI",
    ],
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "with_people" },
    ],
  },

  // ─── CODE ───────────────────────────────────────────────────────────────
  {
    id: "tech-code-eval-mini",
    title: "Build a tiny evaluation for one specific failure mode",
    prompt:
      "Pick one specific failure mode (sycophancy, refusal-on-benign, hallucinated citations, instruction-following on adversarial input). Write 20–30 prompts, run them through 2 models, score them, push the script and a writeup to GitHub.",
    exampleAngles: [
      "Use the eval-ideas doc to pick something fresh",
      "Reproduce a failure mode from a paper on your own data",
      "Build the smallest version of an eval you wish existed",
    ],
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "interp-code-replicate",
    title: "Replicate one finding from a mech interp paper",
    prompt:
      "Pick a small, well-described mech interp result. Reproduce it on a smaller open model. Write up what matched, what didn't, and where the gap probably is. Push the notebook to GitHub.",
    exampleAngles: [
      "A circuit identified in a small toy model",
      "A feature-direction probe on an open instruct model",
      "A negative result you suspect doesn't replicate",
    ],
    labels: [
      { axis: "domain", value: "interpretability" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "misinfo-code-detector",
    title: "Build a tiny tool that flags suspicious AI-generated text",
    prompt:
      "Build the smallest useful prototype: a script or browser extension that surfaces signals on a piece of text. Be honest about its limits in the README. Share on GitHub.",
    exampleAngles: [
      "Stylometry baseline on a small corpus",
      "Watermark-detection wrapper on a public detector API",
      "Heuristics tuned for one specific misinformation pattern",
    ],
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "cyber-code-injection-probe",
    title: "Build a small script probing one prompt-injection vector",
    prompt:
      "Pick one prompt-injection or jailbreak vector. Build a small script that demonstrates it on an LLM you have API access to, with a README explaining the attack and reasonable defences. Share responsibly.",
    exampleAngles: [
      "Indirect injection via documents the model retrieves",
      "System-prompt extraction via known patterns",
      "Tool-use confusion on a benchmark agent setup",
    ],
    labels: [
      { axis: "domain", value: "cybersecurity" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "fow-code-usage-tracker",
    title: "Build a personal tool tracking your AI usage and what it saves",
    prompt:
      "Hack together a small tool (a script, a Notion template, a shortcut) that logs your AI usage and an honest estimate of time saved or spent. Run it for a week. Share the result and the tool.",
    exampleAngles: [
      "A browser extension logging chat sessions",
      "A daily log with a 1-line 'was this worth it?' field",
      "A team version your colleagues could try",
    ],
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "med-code-triage-test",
    title: "Build a tiny LLM triage assistant and stress-test it",
    prompt:
      "Build the simplest possible LLM-backed triage tool for a clinical scenario you know well. Then write 15 adversarial prompts your safety brain flags. Run them through, document failures, push to GitHub with a strong README.",
    exampleAngles: [
      "A general-presentation triage assistant",
      "A medication-interaction lookup with deliberate edge cases",
      "A mental-health 'when to escalate' helper",
    ],
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "code" },
    ],
  },
];
