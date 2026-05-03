# AI Safety Compass

A static site that helps people explore AI safety career pathways, fields, and the skills they map to.

## Overview

- Browse AI safety fields and read field-level detail pages
- Explore by skills and interests (`/explore`) to surface fields matching your background
- All content is static JSON — no backend

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- React Router (HashRouter, for GitHub Pages)
- Vitest for tests

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm test         # run vitest
npm run lint     # eslint
```

## Project layout

- `src/pages/` — top-level routes (Index, FieldDetail, Explore, NotFound)
- `src/data/` — field definitions, metadata, types
- `src/data/fields/` — per-field JSON content
- `src/components/` — shared components (incl. shadcn `ui/`)

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## Editing field content

Each field is a single JSON file under [src/data/fields/](src/data/fields/) — one per field, named by slug (e.g. `economics.json`). To add a new field, create the JSON file and import it in [src/data/fields/index.ts](src/data/fields/index.ts).

The schema (TypeScript source: [src/data/types.ts](src/data/types.ts)):

```jsonc
{
  "name": "Economics",                  // display name
  "slug": "economics",                  // URL slug, must match filename
  "description": "One-paragraph pitch for why this field is relevant to AI safety.",
  "skills": ["critical_thinking", "research", "writing"],
  // Skill keys must exist in src/data/metadata.ts → skillLabels.
  // They drive the /explore matcher.

  "people": [
    {
      "name": "Jane Doe",
      "role": "Professor, Some University",
      "description": "One sentence on what they work on and why it matters."
    }
  ],

  "trajectory": [
    "Bullet describing how this field's tools/concepts feed into AI safety work."
  ],

  "projects": [
    {
      "title": "Short project title",
      "description": "What the project would investigate or produce."
    }
  ],

  "content": [
    {
      "title": "Title of paper / podcast / video",
      "type": "read",                   // "read" | "listen" | "watch"
      "url": "https://example.com",     // optional
      "description": "Optional one-line context."
    }
  ],

  "questions": [
    "An open question someone in this field could read about, write about, or branch out from."
  ]
}
```

Notes:
- `content` and `questions` may be empty arrays — the page renders a "Coming soon" placeholder.
- Keep `description` blurbs tight (one or two sentences) to match the existing visual rhythm.
- Skill keys are snake_case and must already exist in `skillLabels`; add new ones there if needed.
