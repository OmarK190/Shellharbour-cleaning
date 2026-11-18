# Epic 1: Foundation, Design System & Homepage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A Next.js 16 site deployed to Cloudflare (staging, noindex) with central config, design tokens, layout shell, SEO plumbing, CI quality gates and a real homepage.

**Architecture:** One Next.js App Router app (`(marketing)` route group, statically generated) built with the OpenNext Cloudflare adapter. Business facts live in `config/site.ts`; pages register in `lib/seo/registry.ts`; Node check scripts validate the built HTML. See `docs/architecture.md`.

**Tech Stack:** next 16.4.6, react 19.3.1, TypeScript strict, tailwindcss 4.3.5 (`@theme`), @opennextjs/cloudflare 1.20.17, wrangler 4.164.0, vitest 5.1.1, @playwright/test 1.65.1, @axe-core/playwright 4.14.0, @lhci/cli 0.16.1, zod 4.6.7.

**Spec:** `docs/PRD.md` (Epic 1, Stories 1.1–1.6; FR1–FR9, FR39–FR40, FR49, FR51; NFR1–NFR4, NFR8–NFR9, NFR12, NFR14–NFR17) and `docs/architecture.md`. Design source: `docs/research/ui-components.md` §2 and §5.

## Global Constraints

- Brand name exactly `Shellharbour Cleaning`; ABN `81 480 225 391`; hours `9:00 AM–9:00 PM, 7 days`; hubs `Shellharbour`, `Kiama`, `Dapto`, `Wollongong`.
- Phone and address are owner-supplied later (LB3, LB4): `SITE.phone` and `SITE.address` are `LaunchBlocker` placeholders; never render CleanerAtDoor's `1300 381 988` as final, never render `Munno Para`.
- No string `Cleaner at Door` / `cleaneratdoor` anywhere in source or output.
- Tokens only from `app/globals.css` `@theme`: `--color-deep-water #0B3B4A`, `--color-ink #14232A`, `--color-sea-glass #DCEFEA`, `--color-sand #F5EDE1`, `--color-escarpment #2F6B4F`, `--color-coral #E8603C`, `--color-paper #FFFFFF`, `--color-alert #B3261E`; fonts Fraunces 600/700 (display), Figtree 400/600 (body); radii 10px / 20px / full.
- Titles ≤ 60 chars, meta descriptions ≤ 155 chars, exactly one `<h1>` per page, trailing-slash canonical URLs, lowercase hyphenated paths.
- No emoji; no banned phrases (`unlock`, `seamless`, `elevate`, `peace of mind`, `in today's busy world`, `we've got you covered`, `look no further`, `next level`); no stat-tile rows; no utility bar above nav; every listed hub/service name is a link.
- Images: every image registered in `content/images/manifest.ts`; people images are `stock-people` (free, no watermark) or `real-*`; team/before-after/gallery slots accept only `real-*` and are hidden when empty; no AI-generated people.
- Non-production responses send `X-Robots-Tag: noindex, nofollow`.
- Commit messages: description only — no `Co-Authored-By`, no Claude attribution (owner's CLAUDE.md overrides the harness default). Never `git push` without owner confirmation; work on a feature branch `epic-1-foundation`.
- Performance: homepage JS ≤ 100KB gzipped, LCP < 2.0s, CLS < 0.05 (Lighthouse mobile).

## Review Focus

1. **Phone/address unset at build time** — pages must render cleanly (no "undefined", no empty `tel:` link) while LB3/LB4 are open: header shows the "See my price" CTA only, footer omits the phone line. Test in Task 3.
2. **Query strings on canonical** — `/?utm_source=gbp` must canonicalise to `https://{domain}/`. Test in Task 4.
3. **Zero real reviews / team photos** — reviews and cleaners sections must not render at all (no heading, no empty grid). Test in Task 8.
4. **Reduced motion and keyboard** — sticky bar, nav and FAQ must be operable by keyboard and respect `prefers-reduced-motion`. Covered by axe + Playwright in Task 9.
5. **Staging leaking into Google** — any non-production build must emit noindex header and `Disallow: /`. Test in Task 4.

---

### Task 1: Scaffold, health route and CI skeleton

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`, `vitest.config.ts`, `.github/workflows/ci.yml`, `app/layout.tsx`, `app/(marketing)/page.tsx` (placeholder), `app/api/health/route.ts`, `README.md`, `.env.example`
- Test: `tests/unit/health.test.ts`

**Interfaces:**
- Produces: `GET /api/health` → `200 {"status":"ok","commit": string}`; npm scripts `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `check`, `preview`, `deploy:staging`.

- [ ] **Step 1: Scaffold** — `npx create-next-app@16.4.6 . --ts --app --tailwind --eslint --src-dir=false --import-alias "@/*" --use-npm`, then `npm i -D @opennextjs/cloudflare@1.20.17 wrangler@4.164.0 vitest@5.1.1 @vitejs/plugin-react` and `npm i zod@4.6.7`. Set `"strict": true` in `tsconfig.json`. Keep existing `docs/` and `.gitignore`.
- [ ] **Step 2: Write the failing test**

```ts
// tests/unit/health.test.ts
import { GET } from "@/app/api/health/route";
test("health returns ok with commit", async () => {
  process.env.GIT_COMMIT = "abc123";
  const res = await GET();
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ status: "ok", commit: "abc123" });
});
```

- [ ] **Step 3:** Run `npx vitest run tests/unit/health.test.ts` → FAIL (module not found).
- [ ] **Step 4:** Implement `GET(): Response` in `app/api/health/route.ts` returning `Response.json({ status: "ok", commit: process.env.GIT_COMMIT ?? "dev" })`.
- [ ] **Step 5:** Run test → PASS.
- [ ] **Step 6:** Configure OpenNext: `open-next.config.ts` via `defineCloudflareConfig()`; `wrangler.jsonc` with `name: "shellharbour-cleaning"`, `main: ".open-next/worker.js"`, `assets.directory: ".open-next/assets"`, `compatibility_flags: ["nodejs_compat"]`, `observability: { enabled: true }` (Workers Logs with request IDs, NFR12), env `staging`. Error-tracker (Sentry) wiring is deferred to Epic 2, when the first API that can fail for users ships. Scripts: `"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview"`, `"deploy:staging": "opennextjs-cloudflare build && wrangler deploy --env staging"`.
- [ ] **Step 7:** `.github/workflows/ci.yml` on `pull_request` and `push: main`: Node 24, `npm ci`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`. (Checks, E2E and Lighthouse jobs added in Tasks 5 and 9.)
- [ ] **Step 8:** Verify `npm run build` succeeds and `npm run preview` serves `/api/health` locally (curl returns the JSON).
- [ ] **Step 9:** Commit `feat: scaffold Next.js 16 app with Cloudflare adapter, health route and CI`.

### Task 2: Site config and launch-blocker guard

**Files:**
- Create: `config/site.ts`, `config/launch.ts`, `scripts/checks/check-launch.mjs`
- Test: `tests/unit/site-config.test.ts`

**Interfaces:**
- Produces:
  - `type LaunchBlocker = { kind: "launch-blocker"; id: "LB1"|"LB2"|"LB3"|"LB4"|"LB5"|"LB6"|"LB7"|"LB8"; note: string }`
  - `isResolved<T>(v: T | LaunchBlocker): v is T`
  - `SITE: { name: string; legalName: string | LaunchBlocker; abn: string; url: string | LaunchBlocker; email: string | LaunchBlocker; phone: { display: string; e164: string } | LaunchBlocker; address: PostalAddress | null | LaunchBlocker; hours: { days: string; open: "09:00"; close: "21:00"; display: string }; hubs: Hub[] }`
  - `type Hub = { slug: "shellharbour"|"kiama"|"dapto"|"wollongong"; name: string; path: string }`
  - `BUSINESS_RATING: { value: number; count: number } | null = null`; `BUSINESS_PROFILES: string[] = []`
  - `launchBlockers(): LaunchBlocker[]` (every unresolved value in `SITE`, plus LB1, LB5–LB8 flags from `config/launch.ts`)
  - `siteUrl(): string` — resolved URL, or `https://staging.shellharbourcleaning.invalid` when unresolved and not production.

- [ ] **Step 1: Write the failing tests**

```ts
// tests/unit/site-config.test.ts
import { SITE, BUSINESS_RATING, BUSINESS_PROFILES, launchBlockers, isResolved } from "@/config/site";
test("brand facts", () => {
  expect(SITE.name).toBe("Shellharbour Cleaning");
  expect(SITE.abn).toBe("81 480 225 391");
  expect(SITE.hubs.map(h => h.slug)).toEqual(["shellharbour", "kiama", "dapto", "wollongong"]);
  expect(SITE.hours.display).toBe("9:00 AM–9:00 PM, 7 days");
});
test("rating and profiles start empty", () => {
  expect(BUSINESS_RATING).toBeNull();
  expect(BUSINESS_PROFILES).toEqual([]);
});
test("phone and address are open launch blockers", () => {
  expect(isResolved(SITE.phone)).toBe(false);
  expect(launchBlockers().map(b => b.id)).toEqual(expect.arrayContaining(["LB3", "LB4"]));
});
test("no CleanerAtDoor identifiers", () => {
  const s = JSON.stringify(SITE);
  for (const bad of ["Munno Para", "Cleaner at Door", "cleaneratdoor", "1300 381 988"]) expect(s).not.toContain(bad);
});
```

- [ ] **Step 2:** Run `npx vitest run tests/unit/site-config.test.ts` → FAIL.
- [ ] **Step 3:** Implement `config/site.ts` and `config/launch.ts` with the interfaces above (hubs paths `/locations/{slug}/`).
- [ ] **Step 4:** Run tests → PASS.
- [ ] **Step 5:** `scripts/checks/check-launch.mjs`: imports the compiled config via `tsx` (`npm i -D tsx`), prints each open blocker as `LBn: note`; exits 1 when `DEPLOY_ENV=production` and any remain, else exits 0 with a warning. Add script `"check:launch": "tsx scripts/checks/check-launch.mjs"`.
- [ ] **Step 6:** Verify `DEPLOY_ENV=production npm run check:launch` exits 1 listing LB1–LB8; `npm run check:launch` exits 0.
- [ ] **Step 7:** Commit `feat: add central site config with launch-blocker guard`.

### Task 3: Design tokens, fonts and layout shell

**Files:**
- Create: `app/globals.css` (replace scaffold), `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `components/layout/StickyMobileBar.tsx`, `components/layout/SiteNav.ts`
- Modify: `app/layout.tsx`
- Test: `tests/unit/layout.test.tsx` (`npm i -D @testing-library/react jsdom`)

**Interfaces:**
- Consumes: `SITE`, `isResolved` (Task 2).
- Produces: `NAV_ITEMS: { href: string; label: string }[]` (exactly Services `/services/`, Locations `/locations/`, Pricing `/pricing/`, Reviews `/reviews/`, About `/about/`); `<Header/>`, `<Footer/>`, `<StickyMobileBar/>` server components (StickyMobileBar has a small client part to hide on input focus).

- [ ] **Step 1: Write the failing tests**

```tsx
// tests/unit/layout.test.tsx
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NAV_ITEMS } from "@/components/layout/SiteNav";
test("nav has at most 5 items", () => expect(NAV_ITEMS.length).toBeLessThanOrEqual(5));
test("header has See my price CTA linking to /book-now/", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: "See my price" })).toHaveAttribute("href", "/book-now/");
});
test("no tel link while phone is an open launch blocker", () => {
  const { container } = render(<><Header /><Footer /></>);
  expect(container.querySelector('a[href^="tel:"]')).toBeNull();
  expect(container.textContent).not.toMatch(/undefined|LB\d/);
});
test("footer links every hub and shows ABN", () => {
  render(<Footer />);
  for (const hub of ["Shellharbour", "Kiama", "Dapto", "Wollongong"]) expect(screen.getByRole("link", { name: new RegExp(hub) })).toBeInTheDocument();
  expect(screen.getByText(/ABN 81 480 225 391/)).toBeInTheDocument();
});
```

- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** `app/globals.css`: `@import "tailwindcss";` then `@theme { --color-*: …; --font-display: var(--font-fraunces); --font-body: var(--font-figtree); --radius-control: 10px; --radius-card: 20px; }` with exactly the Global Constraints values; base styles: body `font-body text-ink bg-paper`, 17px mobile body size, `:focus-visible` ring in `--color-escarpment`, `@media (prefers-reduced-motion: reduce)` disables transitions.
- [ ] **Step 4:** `app/layout.tsx`: load `Fraunces({ weight: ["600","700"] })` and `Figtree({ weight: ["400","600"] })` from `next/font/google` with `display: "swap"` and CSS variables; `<html lang="en-AU">`; render `Header`, `main#main`, `Footer`, `StickyMobileBar`; skip link to `#main`.
- [ ] **Step 5:** Implement Header (logo text link `/`, `NAV_ITEMS`, tel link only when `isResolved(SITE.phone)`, coral "See my price" → `/book-now/`), Footer (name, phone if resolved, hubs as links, service area text, ABN, links to `/services/`, `/pricing/`, `/reviews/`, `/guarantee/`, `/privacy/`, `/terms/`), StickyMobileBar (`md:hidden`, three ≥48px targets: Call [`tel:` if resolved, else hidden], Text [`sms:` if resolved], See my price; hides while an `input, textarea, select` has focus).
- [ ] **Step 6:** Run tests → PASS. Add a test-file-free check: `grep -rnE "#[0-9a-fA-F]{6}" components app --include=*.tsx` returns nothing (colours only via tokens).
- [ ] **Step 7:** Commit `feat: add design tokens, fonts and layout shell`.

### Task 4: SEO plumbing — page registry, metadata, robots, sitemap, JSON-LD

**Files:**
- Create: `lib/seo/registry.ts`, `lib/seo/meta.ts`, `lib/seo/schema.ts`, `components/layout/JsonLd.tsx`, `components/layout/Breadcrumb.tsx`, `app/robots.ts`, `app/sitemap.ts`
- Modify: `next.config.ts` (headers), `app/layout.tsx` (Organization + WebSite JSON-LD)
- Test: `tests/unit/seo.test.ts`

**Interfaces:**
- Consumes: `SITE`, `siteUrl()`, `BUSINESS_RATING`, `BUSINESS_PROFILES`.
- Produces:
  - `type PageEntry = { path: string; title: string; description: string; primaryKeyword: string; pageType: "home"|"service"|"hub"|"service-in-city"|"suburb"|"pricing"|"guide"|"checklist"|"blog"|"company"|"legal"; indexable: boolean }`
  - `PAGES: PageEntry[]`; `getPage(path: string): PageEntry`
  - `pageMeta(path: string, opts?: { image?: string; imageAlt?: string }): Metadata`
  - `canonicalUrl(pathOrUrl: string): string`
  - `organizationJsonLd()`, `websiteJsonLd()`, `localBusinessJsonLd(areaServed: Hub[])`, `breadcrumbJsonLd(items: {name: string; path: string}[])`, `faqJsonLd(faqs: {q: string; a: string}[])` → `Record<string, unknown>`
  - `<JsonLd data={object} />`, `<Breadcrumb items={…} />` (renders nav + BreadcrumbList)

- [ ] **Step 1: Write the failing tests**

```ts
// tests/unit/seo.test.ts
import { PAGES, pageMeta, canonicalUrl } from "@/lib/seo/registry";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo/schema";
import { SITE } from "@/config/site";
test("every registered page meets title/description limits", () => {
  for (const p of PAGES) {
    expect(p.title.length, p.path).toBeLessThanOrEqual(60);
    expect(p.description.length, p.path).toBeLessThanOrEqual(155);
    expect(p.path).toMatch(/^\/([a-z0-9-]+\/)*$/);
  }
});
test("one URL per primary keyword", () => {
  const kws = PAGES.map(p => p.primaryKeyword);
  expect(new Set(kws).size).toBe(kws.length);
});
test("canonical strips query and keeps trailing slash", () => {
  expect(canonicalUrl("/?utm_source=gbp&utm_medium=organic")).toMatch(/\/$/);
  expect(canonicalUrl("/?utm_source=gbp")).not.toContain("?");
  expect(canonicalUrl("/locations/kiama")).toMatch(/\/locations\/kiama\/$/);
});
test("organization has stable @id and no sameAs while profiles empty", () => {
  const o = organizationJsonLd();
  expect(o["@id"]).toMatch(/#organization$/);
  expect(o).not.toHaveProperty("sameAs");
});
test("local business has no aggregateRating while rating null and serves four hubs", () => {
  const lb = localBusinessJsonLd(SITE.hubs);
  expect(lb).not.toHaveProperty("aggregateRating");
  expect((lb.areaServed as unknown[]).length).toBe(4);
  expect(lb["@type"]).toEqual(["LocalBusiness", "HouseCleaning"]);
});
```

- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement registry with the homepage entry: `{ path: "/", title: "House Cleaning Illawarra | From $121 | Shellharbour Cleaning", description: "Police-checked house, end of lease and deep cleaning across Shellharbour, Kiama, Dapto and Wollongong. See your price in three taps, from $121.", primaryKeyword: "house cleaning illawarra", pageType: "home", indexable: true }` (adjust wording only to stay ≤ 60/155; "police-checked" claim gated on LB8 — if LB8 open, use "Insured, vetted house…" only if verified, else "Local house, end of lease and deep cleaning…"). Implement meta/schema per interfaces; `areaServed` items `{ "@type": "City", name }`.
- [ ] **Step 4:** `app/robots.ts`: production → allow `/` for `*` plus explicit groups for `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`; disallow `/book-now/thank-you/`; `sitemap: ${siteUrl()}/sitemap.xml`. Non-production → `disallow: "/"`. `app/sitemap.ts` from `PAGES.filter(p => p.indexable)` with `lastModified`.
- [ ] **Step 5:** `next.config.ts` `headers()`: all paths get `Referrer-Policy`, `X-Content-Type-Options`, `Strict-Transport-Security`; when `DEPLOY_ENV !== "production"` add `X-Robots-Tag: noindex, nofollow`. `trailingSlash: true`.
- [ ] **Step 6:** Run tests → PASS. Add test `robots disallows all outside production` (call `robots()` with `DEPLOY_ENV="staging"` and assert `rules.disallow === "/"`).
- [ ] **Step 7:** Commit `feat: add page registry, metadata, robots, sitemap and JSON-LD builders`.

### Task 5: Content checks on built HTML

**Files:**
- Create: `scripts/checks/lib.mjs`, `check-links.mjs`, `check-content.mjs`, `check-schema.mjs`, `check-images.mjs`, `check-duplicates.mjs`, `scripts/checks/run-all.mjs`
- Reference (port logic, not design): `J:\cleanerAtDoor\scripts\check-internal-links.mjs`, `check-acceptance.mjs`, `check-visible-image-uniqueness.mjs`
- Test: `tests/unit/checks.test.ts` with fixtures in `tests/fixtures/html/`

**Interfaces:**
- Consumes: built HTML at `.next/server/app/**/*.html`, `PAGES` (via `tsx`), image manifest (Task 8).
- Produces: each check exports `run(htmlFiles: {path: string; html: string}[]): string[]` (list of failure messages); `run-all.mjs` exits 1 if any check returns failures. Script `"check": "npm run check:launch && tsx scripts/checks/run-all.mjs"`.

Checks and their failure rules:
- `check-links`: every internal `href` resolves to a built page or a registered `PAGES` path (pages from later epics allowed only when `DEPLOY_ENV !== "production"`, reported as warnings); every indexable page has ≥ 1 inbound link (orphans fail).
- `check-content`: pictographic emoji (`/[\u{1F300}-\u{1FAFF}]|[\u{2600}-\u{27BF}]\u{FE0F}/u`); banned phrases list (Global Constraints); strings `Munno Para`, `Cleaner at Door`, `cleaneratdoor`; any `tel:` number differing from `SITE.phone.e164`; exactly one `<h1>`; `<title>` ≤ 60; meta description ≤ 155.
- `check-schema`: every `application/ld+json` block parses; LocalBusiness has `name`, `@id`, `areaServed`; FAQPage has ≥ 4 `mainEntity`; no `aggregateRating` while `BUSINESS_RATING` is null.
- `check-images`: every `<img>` has non-empty `alt`; every `src` is in the manifest; a manifest image appears visibly on at most one page; slot rules (FR51) — elements with `data-slot="team|before-after|gallery"` contain only `real-*` images.
- `check-duplicates`: any ≥ 25-word paragraph appearing on two pages of the same `pageType` fails (homepage exempt).

- [ ] **Step 1: Write the failing tests** — one fixture per rule, e.g.:

```ts
// tests/unit/checks.test.ts
import { run as content } from "../../scripts/checks/check-content.mjs";
test("flags emoji and banned phrase", () => {
  const fails = content([{ path: "/x/", html: "<title>T</title><h1>A</h1><p>Unlock a seamless clean ✨</p>" }]);
  expect(fails.join(" ")).toMatch(/emoji/);
  expect(fails.join(" ")).toMatch(/unlock|seamless/);
});
test("flags two h1s", () => {
  expect(content([{ path: "/y/", html: "<title>T</title><h1>A</h1><h1>B</h1>" }]).join(" ")).toMatch(/h1/);
});
// …analogous tests: orphan page, invalid JSON-LD, aggregateRating while null, img without alt, stock image in team slot, duplicate 25-word paragraph.
```

- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement checks (HTML parsing with `node-html-parser`, `npm i -D node-html-parser`).
- [ ] **Step 4:** Run tests → PASS; run `npm run build && npm run check` → PASS on the current site.
- [ ] **Step 5:** Add CI job steps after build: `npm run check`.
- [ ] **Step 6:** Commit `feat: add build-output content, schema, link and image checks`.

### Task 6: Analytics events and consent

**Files:**
- Create: `lib/analytics/events.ts`, `components/analytics/ConsentBanner.tsx`, `components/analytics/Analytics.tsx`
- Modify: `app/layout.tsx`, Header/StickyMobileBar CTAs (add `data-event`)
- Test: `tests/unit/analytics.test.ts`

**Interfaces:**
- Produces: `type EventName = "call_click"|"text_click"|"quote_started"|"price_shown"|"booking_step_1"|"booking_step_2"|"booking_step_3"|"booking_submitted"|"contact_submitted"|"careers_applied"`; `track(name: EventName, params: { pageType: string; hub?: string }): void` (no-op until consent = granted); `getConsent(): "granted"|"denied"|"unset"`; `setConsent(v: "granted"|"denied"): void` (stored in a first-party cookie `sc_consent`, 180 days, not localStorage).

- [ ] **Step 1: Write the failing tests**

```ts
// tests/unit/analytics.test.ts
import { track, setConsent, getConsent } from "@/lib/analytics/events";
test("track is a no-op before consent", () => {
  (globalThis as any).gtag = vi.fn();
  track("call_click", { pageType: "home" });
  expect((globalThis as any).gtag).not.toHaveBeenCalled();
});
test("track sends after consent granted", () => {
  setConsent("granted");
  (globalThis as any).gtag = vi.fn();
  track("call_click", { pageType: "home", hub: "kiama" });
  expect((globalThis as any).gtag).toHaveBeenCalledWith("event", "call_click", { page_type: "home", hub: "kiama" });
  expect(getConsent()).toBe("granted");
});
```

- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement; GA4 script (`NEXT_PUBLIC_GA_ID`) and Cloudflare Web Analytics beacon load only after `granted`; banner offers "Accept" and "Reject" with equal prominence. **Step 4:** Run → PASS.
- [ ] **Step 5:** Wire `call_click`/`text_click` on tel/sms links and `quote_started` on "See my price" via a delegated click listener on `[data-event]`.
- [ ] **Step 6:** Commit `feat: add consent-gated analytics events`.

### Task 7: Image manifest and pricing rates seed

**Files:**
- Create: `content/images/manifest.ts`, `public/images/CREDITS.md`, `lib/pricing/rates.ts`
- Test: `tests/unit/manifest.test.ts`, `tests/unit/rates.test.ts`

**Interfaces:**
- Produces:
  - `type ImageSource = "stock-people"|"stock-scene"|"ai-scene"|"real-team"|"real-job"`; `type ManifestImage = { id: string; src: string; alt: string; width: number; height: number; sourceType: ImageSource; credit: string; showsPeople: boolean }`; `IMAGES: ManifestImage[]`; `image(id: string): ManifestImage`.
  - `RATES = { regularHourlyCents: 6050, regularMinimumCents: 12100, minimumHours: 2 } as const`; `formatAud(cents: number): string` (e.g. `12100 → "$121"`, `21175 → "$211.75"`). Epic 2 extends this module into `quote()`.

- [ ] **Step 1: Write the failing tests**

```ts
// tests/unit/manifest.test.ts
import { IMAGES } from "@/content/images/manifest";
test("people images are never AI", () => {
  for (const i of IMAGES) if (i.showsPeople) expect(["stock-people", "real-team", "real-job"]).toContain(i.sourceType);
});
test("every image has alt and credit", () => {
  for (const i of IMAGES) { expect(i.alt.length).toBeGreaterThan(10); expect(i.credit.length).toBeGreaterThan(3); }
});
// tests/unit/rates.test.ts
import { RATES, formatAud } from "@/lib/pricing/rates";
test("live published rates", () => {
  expect(RATES.regularHourlyCents).toBe(6050);
  expect(RATES.regularMinimumCents).toBe(12100);
  expect(formatAud(12100)).toBe("$121");
  expect(formatAud(21175)).toBe("$211.75");
});
```

- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. Source launch images: hero (`stock-people`, cleaner at kitchen bench, Unsplash/Pexels/Pixabay, commercial licence, no watermark, ≥ 2000px), 4 service tiles (`ai-scene` or `stock-scene`, no people), one coastal Illawarra context image (`stock-scene`, must show the real named place). Export AVIF + WebP, hero ≤ 120KB at 1280w. Record each in `CREDITS.md` (photographer + URL, or "AI-generated, {tool}, {date}").
- [ ] **Step 4:** Run → PASS. **Step 5:** Commit `feat: add image manifest with source rules and published rate constants`.

### Task 8: Homepage

**Files:**
- Create: `content/home.ts`, `components/home/Hero.tsx`, `TrustStrip.tsx`, `ServiceGrid.tsx`, `HowItWorks.tsx`, `WhatsIncluded.tsx`, `Reviews.tsx`, `GuaranteeSummary.tsx`, `AreasWeClean.tsx`, `Cleaners.tsx`, `Faq.tsx`, `FinalCta.tsx`
- Modify: `app/(marketing)/page.tsx`, `lib/seo/registry.ts` (if wording changes)
- Test: `tests/unit/home-content.test.ts`, `tests/e2e/home.spec.ts` (E2E runs in Task 9)

**Interfaces:**
- Consumes: `SITE`, `RATES`, `formatAud`, `IMAGES`, `pageMeta`, schema builders, `<JsonLd>`.
- Produces: `HOME: { h1: string; intro: string; services: { slug: string; name: string; fromCents: number; href: string; imageId: string; line: string }[]; steps: [string,string,string]; rooms: { name: string; tasks: string[]; imageId: string }[]; faqs: { q: string; a: string }[]; reviews: Review[]; cleaners: Cleaner[] }` (reviews and cleaners empty arrays at launch).

Copy rules (from PRD Story 1.6): H1 names house cleaning + the Illawarra; first 100 words state service, the four towns, "from $121" and the guarantee; 900–1,300 words total; 6–8 FAQs answered in the first sentence; service tiles link to `/services/{slug}/` for end-of-lease-cleaning, regular-cleaning, deep-cleaning, carpet-steam-cleaning, ndis-cleaning-services, office-cleaning, airbnb-cleaning; areas section links all four hubs; guarantee summary states the published terms (report within 24 hours with photos, reply within 48 hours, free re-clean, full refund within 15 days if still unhappy) and links `/guarantee/`. No sentence that would read unchanged on a competitor's site; no unverified claims (police-checked/insured wording only once LB8 is resolved — until then omit it).

- [ ] **Step 1: Write the failing tests**

```ts
// tests/unit/home-content.test.ts
import { HOME } from "@/content/home";
const words = (s: string) => s.trim().split(/\s+/).length;
const allText = () => [HOME.h1, HOME.intro, ...HOME.steps, ...HOME.rooms.flatMap(r => r.tasks), ...HOME.faqs.flatMap(f => [f.q, f.a]), ...HOME.services.map(s => s.line)].join(" ");
test("intro answers first", () => {
  const first100 = HOME.intro.split(/\s+/).slice(0, 100).join(" ");
  for (const t of ["Shellharbour", "Kiama", "Dapto", "Wollongong", "$121"]) expect(first100).toContain(t);
  expect(first100).toMatch(/re-clean|guarantee/i);
});
test("length and faq count", () => {
  expect(words(allText())).toBeGreaterThanOrEqual(900);
  expect(words(allText())).toBeLessThanOrEqual(1300);
  expect(HOME.faqs.length).toBeGreaterThanOrEqual(6);
  expect(HOME.faqs.length).toBeLessThanOrEqual(8);
});
test("no reviews or cleaners at launch", () => {
  expect(HOME.reviews).toEqual([]);
  expect(HOME.cleaners).toEqual([]);
});
```

```ts
// tests/e2e/home.spec.ts
test("homepage structure", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
  for (const hub of ["Shellharbour", "Kiama", "Dapto", "Wollongong"])
    await expect(page.locator(`a[href="/locations/${hub.toLowerCase()}/"]`).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /reviews/i })).toHaveCount(0);   // hidden while empty
  await expect(page.locator('[data-slot="team"]')).toHaveCount(0);
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(ld.join(" ")).toContain('"FAQPage"');
  expect(ld.join(" ")).toContain('"HouseCleaning"');
});
```

- [ ] **Step 2:** Run unit test → FAIL.
- [ ] **Step 3:** Write `content/home.ts` copy, then section components in the PRD order (hero, trust strip with ≤ 4 real facts, services, how it works, what's included with full room lists visible and photo swap on hover/focus, reviews [renders `null` when empty], guarantee, areas with static map image and hub links, cleaners [renders `null` when empty], FAQ using native `<details>`, final CTA). Page emits `pageMeta("/")`, `localBusinessJsonLd(SITE.hubs)` and `faqJsonLd(HOME.faqs)`. Hero image `priority`, others lazy; all via `next/image` with explicit `width`/`height`.
- [ ] **Step 4:** Run unit tests → PASS; `npm run build && npm run check` → PASS.
- [ ] **Step 5:** Commit `feat: add homepage with answer-first copy, services, areas and FAQ`.

### Task 9: E2E, accessibility, Lighthouse CI and staging deploy

**Files:**
- Create: `playwright.config.ts`, `tests/e2e/a11y.spec.ts`, `tests/e2e/staging.spec.ts`, `lighthouserc.json`
- Modify: `.github/workflows/ci.yml`

**Interfaces:**
- Consumes: everything above; `BASE_URL` env (preview URL in CI, `http://localhost:8787` locally via `npm run preview`).

- [ ] **Step 1: Write the tests**

```ts
// tests/e2e/a11y.spec.ts
import AxeBuilder from "@axe-core/playwright";
for (const path of ["/"]) test(`axe ${path}`, async ({ page }) => {
  await page.goto(path);
  const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag22aa"]).analyze();
  expect(r.violations.filter(v => ["serious", "critical"].includes(v.impact ?? ""))).toEqual([]);
});
test("sticky bar on mobile, keyboard reachable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("link", { name: "See my price" }).last()).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: /skip to content/i })).toBeFocused();
});
// tests/e2e/staging.spec.ts
test("non-production is noindex", async ({ request }) => {
  const res = await request.get("/");
  expect(res.headers()["x-robots-tag"]).toContain("noindex");
  expect(await (await request.get("/robots.txt")).text()).toMatch(/Disallow: \/\s*$/m);
});
```

- [ ] **Step 2:** `lighthouserc.json`: collect `/` on mobile preset, assertions `categories:performance ≥ 0.9`, `accessibility ≥ 0.95`, `best-practices ≥ 0.95`, `seo` ≥ 0.9 on staging (noindex lowers the SEO score; the 1.0 assertion is enabled for production in Epic 7), `largest-contentful-paint ≤ 2000`, `cumulative-layout-shift ≤ 0.05`, `total-byte-weight` budget for scripts ≤ 100KB.
- [ ] **Step 3:** CI: job `e2e` (after build) runs `npm run preview &`, waits for `:8787`, runs `npx playwright test` and `npx lhci autorun`. Job `deploy-staging` on `push: main` runs `npm run deploy:staging` with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets and `DEPLOY_ENV=staging`.
- [ ] **Step 4:** Run locally: `npm run preview` then `BASE_URL=http://localhost:8787 npx playwright test` → PASS; `npx lhci autorun` → PASS.
- [ ] **Step 5:** Commit `ci: add Playwright, axe, Lighthouse CI and staging deploy`.
- [ ] **Step 6:** Open a PR from `epic-1-foundation` to `main`; ask the owner before merging (merge triggers the staging deploy). Owner must add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub secrets first.

---

## Owner inputs needed during Epic 1

| When | Input | Blocks |
|---|---|---|
| Task 9 Step 3 | Cloudflare account ID + API token (GitHub secrets) | Staging deploy only — everything else runs locally |
| Task 7 Step 3 | Approval of the chosen hero/stock images | Nothing (placeholders allowed on staging) |
| Any time | New phone number (LB4), address (LB3), domain (LB2) | Production only; staging renders without them |
