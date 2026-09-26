# AGENTS.md

Overview of this project for AI agents and developers working on this codebase.

## Project overview

A single-page "link in bio" style site for El Benna, an Algerian charcoal-grill restaurant
with two Montréal locations. Built with TanStack Start and deployed on Netlify. There is no
backend, database, or auth — all content is static/local data.

### Tech stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes, no component library) |
| Icons | lucide-react |
| Deployment | Netlify |

## Directory structure

```
├── public
│   ├── favicon.ico
│   └── images/charcoal-bg.jpg   # AI-generated ember/wood background, served via Image CDN
├── src
│   ├── components
│   │   ├── ActionButton.tsx     # The five hub buttons on the home page (icon + label + link)
│   │   └── PageShell.tsx        # Shared background + back link + title wrapper for sub-pages
│   ├── data
│   │   └── restaurant.ts        # Locations, menu, and social links (real content, not stubs)
│   ├── lib
│   │   └── sudoku.ts            # Puzzle generator/solver + conflict detection for /sudoku
│   ├── routes
│   │   ├── __root.tsx           # Root layout: HTML shell, meta tags
│   │   ├── index.tsx            # Home: logo, background, the five action buttons
│   │   ├── menu.tsx             # Menu page
│   │   ├── contact.tsx          # Contact page (both locations)
│   │   └── sudoku.tsx           # Playable Sudoku game
│   ├── router.tsx               # TanStack Router setup
│   └── styles.css               # Tailwind import, fonts, gold-gradient text, glow animations
├── netlify.toml
├── package.json
└── tsconfig.json                # `@/*` path alias → `src/*`
```

## Conventions

- Routes are plain `<a href>` tags rather than typed `<Link>` — this is a small link-hub site
  with no need for client-side route prefetching, and it avoids TanStack Router's strict
  literal-route typing on a generic reusable button component.
- Background image is referenced through `/.netlify/images?url=/images/charcoal-bg.jpg&...`
  (Netlify Image CDN) rather than the raw file, so pages don't ship the full-resolution
  original.
- All business content (addresses, phone numbers, hours, menu items, social links) lives in
  `src/data/restaurant.ts` — update it there rather than inline in routes.
- `src/lib/sudoku.ts` generates a fresh random solved grid via randomized backtracking, then
  removes cells for the puzzle. Not guaranteed to have a unique solution, but always solvable
  and good enough for a casual mini-game.

## Non-obvious decisions

- The Google Reviews button links to a Google search query for the restaurant (no direct
  Google Business review link was published on the source site).
- `lucide-react`'s `Grid3x3` icon stands in for the "sudoku puzzle grid" icon, and `Flame`
  for the "grill/skewer" icon — lucide has no literal skewer icon.

This project is a complete, single-purpose deliverable — there is no PLAN.md and no further
milestones are planned unless requested.
