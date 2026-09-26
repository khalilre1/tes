# El Benna — Grillades Algériennes

A mobile-first landing page for El Benna, an Algerian charcoal-grill restaurant in Montréal
(Petit Maghreb and Côte-des-Neiges). The page acts as a "link in bio" hub: a dark, rustic
charcoal-ember hero with a warm gold logo, followed by five quick-access actions, plus a
bonus playable Sudoku mini-game.

## Tech stack

- **TanStack Start** (React 19 + TanStack Router) on Vite 7
- **Tailwind CSS 4** for styling
- **lucide-react** for icons
- A custom-generated charcoal-ember background image (via Netlify AI Gateway / Gemini image
  model), served through the Netlify Image CDN for optimized delivery
- Deployed on Netlify

## Pages

- `/` — the landing page: logo, ember background, and the five action buttons (Menu,
  Contact us, Google reviews, Instagram, Play sudoku)
- `/menu` — the restaurant's menu, grouped by category
- `/contact` — both locations with address, phone, hours, a maps link, and an Uber Eats link
- `/sudoku` — a fully playable Sudoku puzzle (random puzzle generator, conflict highlighting,
  win detection, "new grid" button)

## Running locally

```bash
pnpm install
pnpm dev
```

## Project structure

- `src/routes/` — file-based routes (TanStack Router)
- `src/components/` — `ActionButton` (the five hub buttons) and `PageShell` (shared
  background/header wrapper for the sub-pages)
- `src/data/restaurant.ts` — the restaurant's real content (locations, menu, social links)
- `src/lib/sudoku.ts` — Sudoku puzzle generator, solution, and conflict-checking logic
- `public/images/charcoal-bg.jpg` — the generated ember/wood background image
