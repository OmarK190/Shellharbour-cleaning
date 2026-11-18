# Shellharbour Cleaning — Architecture

Date: 2026-11-19. Implements `docs/PRD.md` v1.1 (Technical Assumptions, NFR1–NFR20). Scope: decisions every epic depends on. Epic-specific detail lives in each implementation plan under `docs/superpowers/plans/`.

## 1. Stack (versions checked on npm 2026-11-19)

| Layer | Choice | Version | Why |
|---|---|---|---|
| Runtime | Node.js LTS | 24.x (local 24.12.0) | Current LTS |
| Framework | Next.js App Router, TypeScript strict | `next@16.4.6`, `react@19.3.1` | SSG for marketing, route handlers for APIs |
| Edge deploy | OpenNext Cloudflare adapter + Wrangler | `@opennextjs/cloudflare@1.20.17` (peer: next ≥16.4.5), `wrangler@4.164.0` | Static assets on Cloudflare, Worker for dynamic routes |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) + shadcn/ui conventions | `tailwindcss@4.3.5`, `shadcn@4.23.0` | Tokens defined once in CSS; 21st.dev components use shadcn format |
| Validation | Zod | `zod@4.6.7` | Shared client/server schemas |
| Data/Auth/Storage (Epic 2+) | Supabase (Sydney) | `@supabase/supabase-js@2.119.1`, `@supabase/ssr@0.12.7` | Postgres + RLS + Auth (httpOnly cookies) + Storage |
| Price animation | NumberFlow | `@number-flow/react@0.6.2` | Price only |
| Unit tests | Vitest | `vitest@5.1.1` | Fast TS tests |
| E2E | Playwright + axe | `@playwright/test@1.65.1`, `@axe-core/playwright@4.14.0` | Flows + accessibility |
| Perf CI | Lighthouse CI | `@lhci/cli@0.16.1` | NFR1/NFR4 budgets |
| Payments (Epic 8) | Stripe | pinned at Epic 8 | Pay upfront or after |
| Messaging (Epic 2) | Resend (email) + AU SMS provider | pinned at Epic 2 | Confirmations, review requests |

Tailwind v4 note: the PRD mentions `tailwind.config.ts`; with v4 tokens live in `app/globals.css` under `@theme`. That file is the single token source (NFR14).

## 2. Repository layout

```
app/
  (marketing)/            # apex domain, statically generated
    page.tsx              # homepage
    ...                   # later epics: services/, locations/, pricing/ ...
  (app)/                  # my.{domain} — Epic 8+
  api/
    health/route.ts
    bookings/route.ts     # Epic 2
  layout.tsx
  globals.css             # @theme tokens (only colour/type/radius/shadow source)
  robots.ts
  sitemap.ts
components/
  layout/                 # Header, Footer, StickyMobileBar, Breadcrumb, JsonLd
  home/                   # homepage sections
  ui/                     # shadcn + re-skinned 21st.dev components (+ LICENSES.md)
config/
  site.ts                 # NAP, ABN, hours, hubs, rating (null), profiles ([])
  launch.ts               # LaunchBlocker registry
content/                  # typed page content (home, services, locations, faqs)
  images/manifest.ts      # FR51 image manifest
lib/
  pricing/                # single price source (Epic 1: rates; Epic 2: quote())
  seo/                    # pageMeta, JSON-LD builders, page registry
  analytics/              # event helpers + consent
scripts/checks/           # build-output content checks (Node ESM)
tests/unit/  tests/e2e/
supabase/                 # migrations, seed (Epic 2+)
docs/
```

## 3. Rendering and hosting

- Marketing routes: `export const dynamic = "force-static"`; output prerendered HTML served by Cloudflare static assets. Indexable copy is server HTML (NFR2).
- Dynamic routes (`/api/*`, `my.` app): Cloudflare Worker via OpenNext.
- Environments: `DEPLOY_ENV` = `local | preview | staging | production`. Anything not `production` sends `X-Robots-Tag: noindex, nofollow` (via `next.config.ts` `headers()`), and `robots.ts` disallows `/`.
- Host routing (Epic 8): `middleware.ts` rewrites `my.{domain}` to the `(app)` group and adds noindex.
- Security headers (all envs): HSTS, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`, CSP (tightened in Epic 7).

## 4. Config and content model

- `config/site.ts` is the only source of name, phone, email, domain, ABN, hours, hubs, `address` (null until LB3), `BUSINESS_RATING` (null), `BUSINESS_PROFILES` ([]).
- `config/launch.ts` exports `launchBlockers: LaunchBlocker[]`; a blocker is `{ id: "LB1".."LB8", resolved: boolean, note: string }`. `scripts/checks/check-launch.mjs` fails a production build if any is unresolved.
- Content is typed TS in `content/`. Each indexable page registers in `lib/seo/registry.ts`: `{ path, title, description, primaryKeyword, pageType }`. Checks read this registry (titles ≤ 60, descriptions ≤ 155, one URL per primary keyword).
- Image manifest (`content/images/manifest.ts`): `{ id, src, alt, sourceType: "stock-people"|"stock-scene"|"ai-scene"|"real-team"|"real-job", credit, usedOn: string }`. Slots typed to accept only allowed `sourceType`s.

## 5. SEO and structured data

- `pageMeta()` builds Metadata with canonical (trailing slash, query stripped), OG/Twitter, per-page OG image.
- JSON-LD builders return plain objects; `<JsonLd data>` renders `<script type="application/ld+json">`. Organization `@id` = `${SITE.url}/#organization`; LocalBusiness `@type: ["LocalBusiness","HouseCleaning"]`, `@id` = `${SITE.url}/#business`.
- `aggregateRating` emitted only when `BUSINESS_RATING` is non-null with count ≥ 5. `sameAs` only from `BUSINESS_PROFILES`.

## 6. Quality gates (CI order)

1. `npm run lint` · `npm run typecheck` · `npm run test` (Vitest)
2. `npm run build` (Next build) then `npm run check` (all `scripts/checks/*` against `.next/server/app/**/*.html` + registry)
3. Preview deploy (`opennextjs-cloudflare build && wrangler versions upload`) → Playwright E2E + axe + Lighthouse CI against the preview URL
4. Merge to `main` → deploy staging; production deploy is manual approval (Epic 7).

## 7. Data model (Epic 2+, summary)

`profiles(id, role)`, `customers`, `addresses`, `services(slug, offered)`, `bookings(status, price snapshot cents, slot, hub)`, `booking_add_ons`, `cleaners`, `rosters`, `reviews(source, source_url, consent)`, `job_photos(consent, approved)`, `cleaner_applications`, `audit_log`. RLS on every table; service-role key only in Worker secrets.

## 8. Decisions log

| # | Decision | Alternatives | Reason |
|---|---|---|---|
| A1 | Supabase for DB/Auth/Storage | Cloudflare D1 + custom auth | Auth, RLS and storage built in; CleanerAtDoor already planned Supabase Auth |
| A2 | Tailwind v4 `@theme` tokens in `globals.css` | v3 config file | Current major version; one CSS token source |
| A3 | Content as typed TS/MDX in repo | Headless CMS | Versioned, reviewable, static, no extra cost |
| A4 | Checks run on built HTML | Lint-only | Catches what users and crawlers actually receive |
| A5 | Ported CleanerAtDoor patterns (pageMeta, check scripts, rating-null), not its design | Fresh | Proven, already debugged |
