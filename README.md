# AI Safety Compass

A static site that helps people take their first steps into AI safety, regardless of background. Built for the **AI Safety Breaking Barriers Hackathon** and anyone who wants concrete next steps rather than another reading list.

Live: https://jashani.github.io/ai-safety-compass/

## What it does

The main flow asks three quick questions — your background, what pulls you in, and how you like to create — and assembles an action plan: one thing to read, one thing to do or someone to reach out to, and one thing to make today. Plus people in your space, deeper reading, project ideas, and a brainstorm prompt to paste into an LLM.

Routes:

- `/` — landing
- `/intake` — three-question intake; selections stored in URL params, no backend
- `/plan` — composed action plan
- `/explore` and `/field/:slug` — older "browse by field" pages, still available

## How it works

Everything is static. No backend, no LLM at runtime. The intake writes to URL params; the plan page calls a deterministic composer ([src/data/v2/composer.ts](src/data/v2/composer.ts)) that ranks and slots data by **labels**.

A label is `{ axis, value }` — e.g. `{ axis: "domain", value: "medical" }`. The same label fabric tags content, people, projects, produce templates, and backgrounds. Matching is overlap-count by axis.

Two share the same authoring shape:

- **Domains** = topics shown as chips on intake (`medical`, `misinformation`, `future_of_work`, …) — see [src/data/v2/labels.ts](src/data/v2/labels.ts)
- **Create modes** = how someone likes to create (`words`, `visuals`, `voice`, `with_people`, `code`)

## Tech stack

Vite + React + TypeScript · Tailwind + shadcn/ui · React Router (HashRouter for GitHub Pages) · Vitest.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm test         # run vitest
npm run lint     # eslint
```

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

---

# Contributing content

**This is the most useful place to help.** The site only works if it has good things to read, watch, listen to, try, and people to follow. If you have a great resource for a domain we cover, please open a PR — instructions below.

The data model is intentionally easy to edit: small JSON files, friendly field names, no need to understand TypeScript or the matching logic.

## Adding a piece of content (article, paper, video, podcast, interactive tool)

Open the relevant file in [src/data/v2/content/](src/data/v2/content/) — one JSON per category (`philosophy.json`, `catastrophic-risk.json`, `technical-safety.json`, `human-ai-interaction.json`, `governance.json`, `domain-specific.json`, `misinformation.json`, `ai-and-children.json`) — and append an item:

```jsonc
{
  "id": "med-nature-2026-llm-triage",       // unique, lowercase, kebab-style
  "title": "What a triage AI gets wrong",
  "url": "https://example.com/post",
  "byline": "Jane Doe",                     // optional
  "summary": "Why someone should read this in 1–2 sentences.",
  "format": "article",                      // paper | article | blog | video | podcast | interactive | tool | book | org
  "consume": "read",                        // read | listen | watch | try
  "level": "intro",                         // intro | intermediate | deep
  "minutes": 8,                             // optional time-to-consume
  "domains": ["medical"],                   // one or more — see labels.ts for the list
  "actions": ["try_it"],                    // optional, e.g. for interactive tools
  "intents": []                             // optional, rarely needed
}
```

**Cross-domain content** (e.g. a paper about both misinformation and governance) just lists multiple domains: `"domains": ["misinformation", "governance"]`. Put the item in the file for whichever category is the better-fit home — the matcher uses the `domains` tags inside, not the filename.

Available domain values are defined in [src/data/v2/labels.ts](src/data/v2/labels.ts) under `domains`. Each carries a `category` for UI grouping (e.g. `biorisk` lives under "Catastrophic risk").

We especially need:

- **Short-form** (blog posts, threads, Substack pieces, ~5–15 minute reads)
- **Listening and watching** (podcasts, talks, YouTube explainers)
- **Interactive things** (tools, demos, things to play with for 15 minutes)
- Anything by people who post regularly on LinkedIn, Substack, or Twitter — the site is currently academic-paper-heavy

If you want to add a brand-new domain, add an entry to `domains` in [src/data/v2/labels.ts](src/data/v2/labels.ts) (with the right `category`). If you're starting a new category, add it to `domainCategories` in the same file and create a new JSON in `src/data/v2/content/`, then import it in [src/data/v2/content/index.ts](src/data/v2/content/index.ts).

## Adding a person to follow

Open [src/data/v2/people.ts](src/data/v2/people.ts) and append:

```ts
{
  id: "jane-doe",
  name: "Jane Doe",
  role: "Researcher at X",
  why: "One sentence on why a hackathon participant should follow them — what they post about, what's worth reading first.",
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
    { label: "Substack", url: "https://janedoe.substack.com" }
  ],
  labels: [
    { axis: "domain", value: "medical" },
    { axis: "intent", value: "raise_awareness" }
  ]
}
```

Pick people who actually post in public regularly. The site's job is to give someone a follow they'll genuinely benefit from, not a list of names.

## Adding a project idea

Open [src/data/v2/projects.ts](src/data/v2/projects.ts). Project ideas should be **hackathon-shaped** — bounded, day-sized, producing something shareable:

```ts
{
  id: "med-clinician-survey",
  title: "Mini-survey: how do clinicians actually use AI tools?",
  blurb: "One sentence framing.",
  steps: [
    "Concrete first step",
    "Concrete second step",
    "..."
  ],
  timeEstimate: "a day",
  labels: [
    { axis: "domain", value: "medical" },
    { axis: "create_mode", value: "words" }
  ]
}
```

Avoid essay-prompt projects ("explore the relationship between…"). Aim for "by end of day you'll have a 600-word post / a list / a recorded interview".

## Adding a produce template

These are the prompts shown in the **One thing to make** slot. They live in [src/data/v2/produce.ts](src/data/v2/produce.ts):

```ts
{
  id: "med-words-linkedin-post",
  title: "Write a 400-word LinkedIn post on AI in your clinical practice",
  prompt: "Pick one specific moment in your work where… Write 400 words. End with one question.",
  exampleAngles: [
    "A time the AI was confidently wrong",
    "A workflow you'd never trust to AI",
    "..."
  ],
  labels: [
    { axis: "domain", value: "medical" },
    { axis: "create_mode", value: "words" }
  ]
}
```

The matcher prefers templates that share both a domain and a create-mode with the user. Domain-less templates (no `domain` labels) act as fallbacks.

## Adding or improving a background

Backgrounds live in [src/data/v2/backgrounds.ts](src/data/v2/backgrounds.ts). Add one with dense labels — backgrounds carry more labels than content does, because they're the user's identity in the matcher:

```ts
{
  id: "social_work",
  label: "Social work",
  blurb: "One paragraph on why this background matters for AI safety, written in a way the person would recognise themselves in.",
  labels: [
    { axis: "domain", value: "human_ai_relationships" },
    { axis: "skill", value: "communication" },
    { axis: "skill", value: "ethics" },
    { axis: "intent", value: "support_practitioners" }
  ]
}
```

## Workflow

1. Fork the repo at https://github.com/Jashani/ai-safety-compass
2. Edit the relevant JSON / TS file
3. Run `npm run dev` and check the change shows up in your action plan with a sensible profile
4. Run `npm run build` to confirm no type errors
5. Open a PR

Every contribution makes a real difference — a single good blog post added to a domain can unblock the gap notice for hundreds of users in that space.

---

## Project layout

```
src/
├── pages/
│   ├── Index.tsx          landing
│   ├── Intake.tsx         3-question intake
│   ├── Plan.tsx           composed action plan
│   ├── Explore.tsx        legacy: browse-by-skill
│   └── FieldDetail.tsx    legacy: per-field page
├── data/
│   ├── fields/            legacy: per-field JSON (45 files)
│   ├── fields.ts, metadata.ts, types.ts   legacy types
│   └── v2/                ← current data model
│       ├── types.ts                       schema
│       ├── labels.ts                      domain & create-mode vocabularies
│       ├── content/                       per-category content JSON files
│       │   ├── index.ts                   loader
│       │   ├── philosophy.json
│       │   ├── ai-and-children.json
│       │   ├── catastrophic-risk.json
│       │   ├── technical-safety.json
│       │   ├── human-ai-interaction.json
│       │   ├── misinformation.json
│       │   ├── governance.json
│       │   └── domain-specific.json
│       ├── people.ts
│       ├── projects.ts
│       ├── produce.ts                     "one thing to make" prompts
│       ├── backgrounds.ts
│       └── composer.ts                    deterministic plan composer
└── components/                            shared + shadcn ui/
```
