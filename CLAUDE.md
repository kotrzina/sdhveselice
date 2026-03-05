# CLAUDE.md

## Project

SDH Veselice — official website for a Czech volunteer fire brigade. Built with Next.js (SSG) + React + Bootstrap.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (static export to `out/`)
- `npm run start` — serve the production build locally
- `npm test` — run Cypress e2e tests
- `npm run lint` — run ESLint

## Structure

- `pages/` — Next.js pages (index, akce, kontakty, vybor, zavody, novinky, clanek)
- `components/` — React components (Header, Footer, ArticleBar, EventsPanel)
- `articles/` — article content and metadata
- `data/` — shared data (events)
- `styles/globals.css` — global styles with CSS variables
- `cypress/e2e/` — Cypress end-to-end tests

## Key Patterns

- CSS Modules for component styles, global CSS for shared styles
- Bootstrap grid (Row/Col) for layout, CSS variables for theming
- Static site generation via `getStaticProps` / `getStaticPaths`
- All text content is in Czech

## CI

GitHub Actions runs Cypress tests on push and PR (`.github/workflows/cypress.yml`).
Deployed automatically to Cloudflare Pages from `main` branch.
