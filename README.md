# Shellharbour Cleaning

Website and booking app for Shellharbour Cleaning (Shellharbour, Kiama, Dapto and Wollongong, NSW).

- Product requirements: `docs/PRD.md`
- Architecture: `docs/architecture.md`
- Implementation plans: `docs/superpowers/plans/`

## Stack

Next.js 16 (App Router, TypeScript, static generation) deployed to Cloudflare Workers with the OpenNext adapter. Tailwind CSS v4. Vitest, Playwright and Lighthouse CI.

## Local setup

```bash
npm ci
cp .env.example .env.local   # fill values as needed
npm run dev                   # Next dev server on http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production Next.js build |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm test` | Unit tests (Vitest) |
| `npm run preview` | Build for Cloudflare and run the Worker locally on http://localhost:8787 |
| `npm run deploy:staging` | Build and deploy to the Cloudflare staging Worker |

## Environment variables

| Name | Purpose |
|---|---|
| `DEPLOY_ENV` | `local`, `preview`, `staging` or `production`. Anything except `production` is served with `noindex`. |
| `GIT_COMMIT` | Commit SHA reported by `/api/health` |
| `NEXT_PUBLIC_GA_ID` | GA4 ID, loaded only after cookie consent |

## Deploy flow

Pull requests run lint, typecheck, unit tests, build and content checks. Merging to `main` deploys staging. Production deploys need owner approval and all launch blockers resolved (`npm run check:launch`).

Note: Next.js Cache Components is disabled because it hangs page renders on the Workers runtime; pages use classic static generation.
