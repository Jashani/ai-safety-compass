

# AI Safety Pathways — Revised Plan

## Overview
Single-purpose platform: land on a clean dark home page, search/click a field, navigate to a dedicated field page showing people → trajectory → projects.

## Design
- **Dark theme, Notion-inspired visually**: Dark background (~#191919), light text, clean sans-serif typography, subtle borders, no heavy colors
- **No emoji** — field cards use text only
- **Minimal, focused** — no decorative elements, attention stays on content

## Pages

### Home (`/`)
- Title: "AI Safety Pathways" + one-line subtitle
- Search bar: filters fields in real-time
- Field grid: clean cards (3-col desktop, 2 tablet, 1 mobile), each showing field name + one-line relevance to AI Safety
- Clicking a card navigates to `/field/:slug`

### Field Detail (`/field/:slug`)
- Back link to home
- Field name as heading, brief description
- Three sections in order, each collapsible (expanded by default):
  1. **Notable People** — 2-3 individuals with name, role/affiliation, one-line description
  2. **Trajectory** — How skills transfer, career path bullets
  3. **Project Ideas** — 2-3 actionable project suggestions with title + description

## Technical Details

### Files to create/modify:
1. **`src/data/fields.ts`** — Hardcoded data for ~12 fields (no emoji). Each field: name, slug, description, people array, trajectory array, projects array
2. **`src/pages/Index.tsx`** — Home page with search + field grid
3. **`src/pages/FieldDetail.tsx`** — Field detail page with people/trajectory/projects sections
4. **`src/App.tsx`** — Add `/field/:slug` route
5. **`src/index.css`** — Update CSS variables for dark theme (bg ~#191919, foreground light, subtle borders)

### Dark theme approach
Set the `:root` variables directly to dark values (not using `.dark` class toggle — this is a dark-only site).

### Sample fields (12, no emoji):
Economics, Sociology, Cognitive Science, Neuroscience, Chemistry, History, Art, Philosophy, Mathematics, Law, Psychology, Linguistics

### Components used:
- Card (for field grid items)
- Accordion (for collapsible sections on detail page)
- Input (for search)
- Existing routing via react-router-dom

