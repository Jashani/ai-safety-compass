

# Skills & Interests Finder

## Concept
Add a `/explore` page accessible from the home page via a secondary button ("Not sure where to start? Find by skills"). Users select skills/interests from a curated list, and the page shows matching fields ranked by relevance.

## Home Page Change
Below the search bar, add a subtle link/button: "Not sure which field? Explore by skills and interests" → navigates to `/explore`.

## `/explore` Page Design
- Same dark minimal aesthetic, same max-w-4xl container
- Back link to home
- Heading: "Find your path by skills and interests"
- Subheading: "Select what you're good at or drawn to"
- Two-step flow, all on one page:

**Step 1: Select your background** (optional, helps weight results)
Clickable chips for career/field categories from your mapping (Operations, Communications, Policy, Education, Finance, Design, Philosophy, Something else). Selecting one auto-checks its associated skills below.

**Step 2: Select skills and interests**
Grid of toggleable chips for all unique skills: critical thinking, research, writing, communication, organising, process management, spreadsheets, facilitation, visual communication, social media, reading, admin. Users can select multiple.

**Results: Matching fields**
Below the selections, instantly show matching fields (same card style as home page) sorted by number of matching skills. Each card shows a small "X skills match" indicator. Clicking navigates to `/field/:slug` as usual.

## Data Changes
- Add `skills` tag array to each `Field` in `fields.ts` (e.g., Economics gets `["critical_thinking", "research", "spreadsheets"]`)
- Add a `backgrounds` data array with label, category, and mapped skills
- Add a `skillLabels` map for display names (`"critical_thinking"` → `"Critical thinking"`)

## Files to create/modify
1. **`src/data/fields.ts`** — Add `skills: string[]` to Field interface and each field entry; add backgrounds and skill labels
2. **`src/pages/Explore.tsx`** — New page with background chips, skill chips, and filtered results
3. **`src/pages/Index.tsx`** — Add "Explore by skills" link below search
4. **`src/App.tsx`** — Add `/explore` route

## Interaction Details
- Selecting a background pre-selects its mapped skills (but user can toggle any on/off)
- Results update live as skills are toggled
- Empty state: "Select some skills to see matching fields"
- Fields with zero matches are hidden

