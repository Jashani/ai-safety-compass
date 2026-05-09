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
      "Write a 400-word post on the patterns you saw",
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
    title: "Try DebunkBot and write up what you found interesting",
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
      "Repeat the same work without AI for 2 days",
      "Compare: quality, time, mood, outcomes",
      "Write 400 words on what 'AI-augmented work' actually feels like",
    ],
    timeEstimate: "4 days of background, half a day to write",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "any-presentation-night",
    title: "Host a presentation night with friends, and present about AI safety",
    blurb:
      "Each friend picks one topic and gives a 5–10 minute talk. Snacks and bad slides welcome. The point is to share your thoughts in a fun evening.",
    steps: [
      "Send invites to your friends for a specific evening",
      "Share a list of topic suggestions, or people cn come up with their own",
      "Run the night, take photos, post a short writeup with reactions and questions you got",
    ],
    timeEstimate: "an evening (plus some time to organise)",
    labels: [
      { axis: "create_mode", value: "with_people" },
      { axis: "create_mode", value: "voice" },
      { axis: "skill", value: "facilitation" },
    ],
  },
  {
    id: "any-social-poll-synthesis",
    title: "Run a social-media poll on AI concerns and synthesise the results",
    blurb:
      "Post a poll asking your network what they're most concerned (or excited) about regarding AI. Pair it with a question for free-text replies. Synthesise the results with your own take.",
    steps: [
      "Draft a poll with 3–4 well-chosen options + a free-text follow-up question",
      "Post on LinkedIn / Twitter / Instagram and let it run",
      "Find patterns in the replies",
      "Write a 400-word post: what people said, what surprised you, what you think",
    ],
    timeEstimate: "2 days",
    labels: [
      { axis: "create_mode", value: "with_people" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "manip-poll-research-post",
    title: "Run a poll on AI persuasion + share results with research",
    blurb:
      "Ask your network whether they think AI could persuade or manipulate them. Pair the results with one published study, and write a 500-word post weaving them together.",
    steps: [
      "Post a 2-question poll: 'Do you think AI could change your mind on a topic you strongly believe in?' + 'Do you think it could change someone else's?'",
      "Pull in one paper on AI persuasion (DebunkBot, persuasion studies, sycophancy research)",
      "Write 500 words on the mismatch between the answers and what the research says",
      "Post and tag the researchers",
    ],
    timeEstimate: "2 days",
    labels: [
      { axis: "domain", value: "manipulation_and_sycophancy" },
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "with_people" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "tech-shortform-series",
    title: "Launch a 5-episode short-form video series on safety basics",
    blurb:
      "Pick 5 AI safety concepts. Make 5 sixty-second videos explaining each. Post them over some time and share.",
    steps: [
      "Pick 5 concepts you can explain in under 60 seconds each (or learn them well enough to do that!)",
      "Sketch each video on paper before filming",
      "Film all 5 in one or two sessions",
      "Post on a schedule (e.g. every other day)",
    ],
    timeEstimate: "two weekends",
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "voice" },
      { axis: "create_mode", value: "visuals" },
    ],
  },
  {
    id: "any-reading-group-session",
    title: "Run a 1-session reading group on one safety paper",
    blurb:
      "Pick one paper. Invite 4–8 people you'd like to read it with. Spend 60 minutes discussing the paper, your thoughts, and what you'd do next.",
    steps: [
      "Pick a paper that's accessible enough for non-experts",
      "Send the paper a week ahead with 3 questions to focus on",
      "Run a 60–90 minute discussion (in person or video)",
      "Post a 400-word writeup of what came out of it",
    ],
    timeEstimate: "an evening, a week of lead time",
    labels: [
      { axis: "create_mode", value: "with_people" },
      { axis: "skill", value: "facilitation" },
    ],
  },
  {
    id: "companion-week-journal",
    title: "Use an AI companion app for a week and journal the experience",
    blurb:
      "Pick one AI companion product (Replika, Character.AI, Pi, a roleplay setup). Use it daily for a week. Journal each session honestly. Synthesise into a 1000-word essay or 15-minute audio.",
    steps: [
      "Pick the product and set the loose rule: at least one session per day",
      "Journal each session — what you used it for, how you felt, what felt off",
      "On day 8, read the whole journal in one sitting",
      "Write 1000 words or record 15 minutes on what the week did to you",
    ],
    timeEstimate: "a week + an afternoon to write",
    labels: [
      { axis: "domain", value: "ai_companionship" },
      { axis: "create_mode", value: "words" },
      { axis: "create_mode", value: "voice" },
    ],
  },
  {
    id: "cogres-attention-experiment",
    title: "Run an AI-on / AI-off week and post the results",
    blurb:
      "Spend one week using AI freely for thinking work, one week deliberately without. Track time, output quality, what you noticed about your own thinking. Post results.",
    steps: [
      "Pick one type of task to focus on (writing, coding, research, planning)",
      "Run two weeks: one AI-on, one AI-off, in random order",
      "Log every session — quality, time, mood, retention",
      "Write 500 words or record 6 minutes on what changed",
    ],
    timeEstimate: "two weeks + an afternoon",
    labels: [
      { axis: "domain", value: "cognitive_resilience" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "misinfo-deepfake-workshop",
    title: "Run a 60-minute deepfake-spotting workshop",
    blurb:
      "Run a small workshop teaching 4–10 people to spot AI-generated images, audio, and video. Use real recent examples. Send everyone away with one thing they'll do differently.",
    steps: [
      "Collect 5–10 recent real / AI-generated pairs across formats",
      "Build a 30-min teach + 30-min hands-on agenda",
      "Run it for 4–10 people (work team, friends group, library)",
      "Send a one-page recap with the examples and links",
    ],
    timeEstimate: "an evening + a day of prep",
    labels: [
      { axis: "domain", value: "misinformation" },
      { axis: "create_mode", value: "with_people" },
      { axis: "skill", value: "facilitation" },
    ],
  },
  {
    id: "fow-team-interview-series",
    title: "Interview 5 colleagues across functions about AI in their work",
    blurb:
      "Run 5 short structured interviews across functions in your org. Compare answers. Write about it.",
    steps: [
      "Pick 5 colleagues in different functions (eng, design, ops, sales, support, etc.)",
      "Run 20-minute interviews with the same questions",
      "Look at where the answers cluster and where they diverge",
      "Publish a 400-word internal post or external version with names removed",
    ],
    timeEstimate: "a week",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "with_people" },
      { axis: "create_mode", value: "words" },
      { axis: "skill", value: "interviewing" },
    ],
  },
  {
    id: "cyber-prompt-injection-demo",
    title: "Build and demo a prompt-injection example to non-technical people",
    blurb:
      "Build a short, clear prompt-injection demo against a tool you have access to. Show it to 3 non-technical friends or colleagues. Ask for their thoughts. Share about it.",
    steps: [
      "Pick one realistic injection vector (indirect via a doc or link is great)",
      "Build a minimal reproducible demo",
      "Walk it through with 3 non-technical people; note what they think",
    ],
    timeEstimate: "a day",
    labels: [
      { axis: "domain", value: "cybersecurity" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "legal-case-tracker",
    title: "Compile a tracker of ongoing AI lawsuits in your jurisdiction",
    blurb:
      "Build a simple public tracker of AI-related litigation in your country — copyright, liability, criminal evidence, employment. Keep it lightweight, link out generously, update it once.",
    steps: [
      "Pick your jurisdiction; identify 8–15 ongoing or recently-decided cases. You can use an LLM for this",
      "Build a one-page table: case, parties, question, status, your one-line take",
      "Publish on a static page or as a public spreadsheet",
      "Write a 600-word companion post on the patterns",
    ],
    timeEstimate: "a weekend",
    labels: [
      { axis: "domain", value: "criminal_justice" },
      { axis: "domain", value: "governance" },
      { axis: "create_mode", value: "words" },
      { axis: "create_mode", value: "code" },
      { axis: "skill", value: "research" },
    ],
  },
  {
    id: "art-creative-piece",
    title: "Make one piece of art on a specific AI safety question",
    blurb:
      "Pick one question that pulls you in and make one piece of art that lands it for someone else. A poem, a painting, a short film, a comic, a short story, a piece of theatre. Share it publicly.",
    steps: [
      "Pick the question; pick the form you'd actually finish in",
      "Make the piece — set yourself a deadline",
      "Share it somewhere public with a sentence on the question behind it",
      "Tag two people whose work informed yours",
    ],
    timeEstimate: "a weekend (more if it gets you)",
    labels: [
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "create_mode", value: "visuals" },
      { axis: "create_mode", value: "voice" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "philosophy-essay",
    title: "Write an essay on one philosophical question AI raises",
    blurb:
      "Pick one philosophical question, take a position, and defend it carefully against the strongest counter-argument you can construct. Aim for an essay you'd be willing to send to someone whose mind you respect.",
    steps: [
      "Pick the question and write a one-sentence position",
      "Write the strongest version of the counter-argument first",
      "Draft 1500 words; cut to 1500 words again",
      "Share with one trusted reader before posting",
    ],
    timeEstimate: "a weekend",
    labels: [
      { axis: "domain", value: "philosophy_and_morality" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "med-rounds-brief",
    title: "Brief a 5-minute case at clinical rounds on an AI-related decision",
    blurb:
      "Pick one real (anonymised) case where AI was or could have been part of a clinical decision. Brief it at your next rounds or team meeting.",
    steps: [
      "Pick a real anonymised case from the last 3 months",
      "Build one slide: case, the AI angle, your question",
      "Brief at rounds; note the team's reactions",
      "Write 400 words afterwards on what the discussion surfaced",
    ],
    timeEstimate: "a few hours",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "with_people" },
      { axis: "skill", value: "clinical_practice" },
    ],
  },
  {
    id: "med-clinician-podcast",
    title: "Interview a clinician on AI in their practice — publish a podcast",
    blurb:
      "Interview one clinician about AI in their practice. Cut into a 20-minute podcast episode. Publish.",
    steps: [
      "Pick a clinician whose perspective deserves a wider audience",
      "Run a 45-minute recorded interview with consent",
      "Edit into a 20-minute episode with brief intro and outro",
      "Publish and share back with their team",
    ],
    timeEstimate: "a week",
    labels: [
      { axis: "domain", value: "medical" },
      { axis: "create_mode", value: "voice" },
      { axis: "skill", value: "interviewing" },
    ],
  },
  {
    id: "fow-newsletter-launch",
    title: "Launch a 4-issue newsletter on AI in your industry",
    blurb:
      "Commit to writing 4 short newsletter issues — one a week, 600 words each — on AI in your specific industry. Real takes, no thinkpieces. Publish on Substack.",
    steps: [
      "Outline 4 issues end-to-end before publishing the first",
      "Set a recurring weekly slot to write",
      "Publish on Substack; ask 5 colleagues to subscribe and reply",
      "After issue 4, write a short note on whether to keep going",
    ],
    timeEstimate: "a month",
    labels: [
      { axis: "domain", value: "future_of_work" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "children-parent-event",
    title: "Run a 1-hour info session for parents on kids and AI",
    blurb:
      "Run an evening session (in person or online) for 5–15 parents on how to think about kids and AI. Be honest about what you do and don't know. Send them away with one thing to try this week.",
    steps: [
      "Build a 45-minute teach + 15-minute Q&A agenda",
      "Recruit 5–15 parents through one school, friend group, or community",
      "Run the session; capture questions asked",
      "Send a follow-up note with the questions and what you'd answer with another week",
    ],
    timeEstimate: "an evening + a day prep",
    labels: [
      { axis: "domain", value: "ai_and_children" },
      { axis: "create_mode", value: "with_people" },
      { axis: "skill", value: "facilitation" },
    ],
  },
  {
    id: "policy-research-note",
    title: "Write a research note on one open governance question",
    blurb:
      "Pick one open governance question (a gap in a current bill, an enforcement question, a comparative question across jurisdictions). Write a 1500-word note that someone in policy could use.",
    steps: [
      "Pick the question — narrow enough to tackle",
      "Read 5 sources, including primary documents",
      "Draft 1500 words with a clear claim, the strongest counter, and a recommendation",
      "Send to one policy person for feedback before posting",
    ],
    timeEstimate: "a weekend",
    labels: [
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "policy" },
      { axis: "create_mode", value: "words" },
      { axis: "skill", value: "research" },
    ],
  },
  {
    id: "tech-redteam-jam",
    title: "Run a 2-hour red-team jam against an open LLM with friends",
    blurb:
      "Get 3–6 friends together for two hours and try to break a model's safety behaviour on one specific failure mode. Capture every prompt that worked. Write it up.",
    steps: [
      "Pick a specific behaviour to test (refusal-on-benign, eliciting harmful instructions, sycophancy)",
      "Get 3–6 people in a room or video call, set a 2-hour timer",
      "Capture every successful prompt + the model's output in a shared doc",
      "Publish a 600-word summary with patterns you saw",
    ],
    timeEstimate: "an evening",
    labels: [
      { axis: "domain", value: "technical_safety" },
      { axis: "create_mode", value: "with_people" },
      { axis: "create_mode", value: "code" },
    ],
  },
  {
    id: "interp-paper-replication",
    title: "Replicate one mech interp result and write it up",
    blurb:
      "Pick a small published mech interp finding. Reproduce it on a smaller open model, write up where it matched and where it didn't, push the notebook.",
    steps: [
      "Pick a result with clear methods and a small enough model",
      "Set up the experiment in a Colab notebook",
      "Run it; document everything that doesn't match",
      "Publish notebook + a 600-word writeup",
    ],
    timeEstimate: "a weekend",
    labels: [
      { axis: "domain", value: "interpretability" },
      { axis: "create_mode", value: "code" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "gov-policy-tracker",
    title: "Build a one-page tracker of current AI legislation in your country",
    blurb:
      "Build a one-page public tracker of live AI bills, frameworks, and executive actions in your country. Linkable, lightweight, useful. Update it once.",
    steps: [
      "Identify all live AI policy threads in your jurisdiction",
      "Build a single-page table: name, stage, scope, key dates, your one-line take",
      "Publish as a static page or public spreadsheet",
      "Write a 500-word companion post; share with policy folks",
    ],
    timeEstimate: "a weekend",
    labels: [
      { axis: "domain", value: "governance" },
      { axis: "domain", value: "policy" },
      { axis: "create_mode", value: "words" },
      { axis: "skill", value: "research" },
    ],
  },
  {
    id: "pluralism-cultural-stress-test",
    title: "Stress-test AI tools on a cultural context they handle poorly",
    blurb:
      "Pick a cultural, linguistic, or professional context you know well that current AI tools handle badly. Run 15–20 prompts. Document failures with examples. Write it up.",
    steps: [
      "Pick the context; write 15–20 prompts that probe it specifically",
      "Run them through 2 frontier models",
      "Document each failure mode with a screenshot or transcript",
      "Publish a 700-word post with concrete examples",
    ],
    timeEstimate: "a day",
    labels: [
      { axis: "domain", value: "pluralism" },
      { axis: "create_mode", value: "words" },
    ],
  },
  {
    id: "fin-ai-audit",
    title: "Map AI tools in your finance or audit workflow + assess risk",
    blurb:
      "Map every AI tool currently used in your finance/audit/accounting workflow. Assess each on data exposure, model risk, and reversibility. Share internally first, externally if appropriate.",
    steps: [
      "List every AI tool actually in use in your function",
      "Score each on data exposure, model risk, reversibility, audit-trail quality",
      "Identify the 2–3 places that need a human-in-the-loop change",
      "Write a 600-word internal memo; share an anonymised public version",
    ],
    timeEstimate: "a few days",
    labels: [
      { axis: "domain", value: "finance" },
      { axis: "create_mode", value: "words" },
      { axis: "skill", value: "process" },
    ],
  },
];
