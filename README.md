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
