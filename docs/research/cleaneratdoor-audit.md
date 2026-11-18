# CleanerAtDoor Audit — Baseline for Shellharbour Cleaning

Date: 2026-11-19. Sources: live fetch of cleaneratdoor.com via SEOcrawl `fetch_url` (homepage, `/pricing/`, `/end-of-lease-cleaning-adelaide/`, `/adelaide-cleaning/service-areas/`, `/llms.txt`), and the local repo `J:\cleanerAtDoor` (Next.js 14 static export).

## 1. Two versions exist — the live one is authoritative

| | Local repo `J:\cleanerAtDoor` | Live cleaneratdoor.com |
|---|---|---|
| Framework | Next.js 14, `output: "export"` | Astro (`/_astro/` asset paths) |
| Regular clean | $69.50/hr, 2-hr minimum (`lib/data/flatRates.ts`) | **$60.50/hr incl GST, $121 minimum (2 hrs)** |
| URL scheme | `/services/residential-cleaning/end-of-lease-cleaning/` | `/end-of-lease-cleaning-adelaide/` (old path 301s) |

**Decision for PRD:** prices come from the live site (newer, published, ACCC-compliant). The local repo is a code-reuse source only (data shapes, QA scripts, pricing functions), not a price source.

### Live published prices (reused for Shellharbour Cleaning, all GST inclusive unless noted)

| Service | Price |
|---|---|
| Regular house cleaning | $60.50/hr, $121 minimum (covers 2 hrs); 3 bed 2 bath = $211.75 |
| Deep cleaning | from $181.50 (fixed by bedrooms × bathrooms) |
| End of lease cleaning | $190–$410 by home size |
| NDIS cleaning | $55/hr, GST-free, self-managed plans |
| Aged care / seniors cleaning | from $121 |
| Window cleaning | $25 per standard window, $100 minimum; $35 upper-storey outside glass |
| Airbnb cleaning | from $121; linen $30 per bedroom; urgent outside 9am–9pm +$50 |
| Carpet steam cleaning | from $50 per room |
| Oven (add-on) | $63.25 (included in deep clean) |
| Fridge (add-on) | $55 |

Policies (live): quote within 2 hours; open 9:00 AM–9:00 PM, 7 days; pay upfront or after the clean (Stripe); 50% fee for cancellations inside 24 hours; no call-out fee, no travel loading; fix-it guarantee = report within 24 hrs with photos, reply within 48 hrs, free re-clean, full refund within 15 days if still unhappy; GST invoice with ABN from dashboard.

Business facts reused: ABN 81 480 225 391, phone 1300 381 988, email pattern (new domain needed). **Not reused:** address (40 Days Drive, Munno Para SA 5115), reviews, Adelaide suburb data.

## 2. What CleanerAtDoor does well (keep the pattern, not the design)

1. Single source of truth for prices (`flatRates.ts`) and checks that every published price matches it (`scripts/check-price-consistency.mjs`, `check-flat-rates.mjs`).
2. `BUSINESS_RATING = null` until real GBP figures exist — no fake `aggregateRating`.
3. `BUSINESS_PROFILES` (`sameAs`) only holds real URLs.
4. `pageMeta()` helper (`lib/seo.ts`) gives every page its own canonical, OG and Twitter tags.
5. Suburb copy pipeline: OpenStreetMap features with source IDs, distance-aware wording, no invented geography (`scripts/generate-suburb-paragraphs.mjs`).
6. Mechanised acceptance checks: no emoji, internal links resolve, redirects valid, unique images per page.
7. Fine print stated plainly on the pricing page (cancellations, payment, exclusions).
8. Answer-first FAQ copy with exact figures (citable by AI answers).

## 3. Gaps against the page-structure guideline (fix in Shellharbour Cleaning)

| # | Gap observed | Guideline section | Fix for Shellharbour Cleaning |
|---|---|---|---|
| 1 | Inconsistent URL schemes: `/end-of-lease-cleaning-adelaide/`, `/services/residential-cleaning/house-cleaning/`, `/adelaide/`, `/adelaide-cleaning/service-areas/` | §1 URL rules | One scheme: `/services/{service}/`, `/{city}/{service}/`, `/locations/{city}/`, `/locations/{suburb}/` |
| 2 | Suburb pages retired — `/adelaide/service-areas/glenelg/` 301s to the hub | §3 Suburb pages | Gated suburb pages that meet the ≥3 unique facts rule; others listed on city page |
| 3 | No LocalBusiness schema on service pages; homepage uses `HouseCleaning` only, no `areaServed`, `geo`, `openingHoursSpecification`, `sameAs` | §3 City pages schema | LocalBusiness/HouseCleaning with `areaServed` per city; Service + Offer on service pages |
| 4 | 0 external links site-wide — no link to Google Business Profile or review sources | §3 Reviews | Link GBP from reviews, contact, footer; `sameAs` populated |
| 5 | Same OG image on every page | §2 real photos | Per-page OG image from that page's hero photo |
| 6 | Every audited page has 1 image missing alt | §2 / WCAG | Build check fails on missing alt |
| 7 | No service-in-city pages beyond Adelaide-suffixed service URLs | §3 Service-in-a-city | `/{city}/{service}/` for top 3 services × 4 cities, unique local data |
| 8 | No city price guide (`/house-cleaning-prices-{city}/`); prices only in blog posts | §3 City price guides | One guide per city, year in title updated each January |
| 9 | No comparison page (`/best-cleaning-company-{city}/`) | §3 Comparison | Honest guide per city |
| 10 | No careers page / JobPosting schema; no team profile pages | §3 Careers, Team | `/careers/` with JobPosting; `/team/{name}/` |
| 11 | No `/book-now/` with price-first flow — "Get a quote" promises a reply within 2 hours, so the price is not shown instantly | §3 Book now | Postcode + beds + baths → price shown, then date, then contact |
| 12 | No reviews page or guarantee page (guarantee buried in pricing fine print) | §3 Reviews, Guarantee | `/reviews/` (real only, filterable), `/guarantee/` |
| 13 | No `/specials/` beyond Adelaide; no `/locations/` hub with postcode checker | §3 Specials, Locations hub | Both built |
| 14 | Portals (customer dashboard, cleaner, admin) in the local repo run on mock `localStorage` data and a fixed mock session; real auth is a TODO | §1 Customer login | Real auth + database on `my.` subdomain, noindex |
| 15 | Seeded interstate testimonials were shown as real on an Adelaide site (flagged in `docs/seo-recommendations.md`) | §3 Reviews | Reviews render only from verified records with a source |
| 16 | Keyword map has no volume/KD data (Ahrefs API plan insufficient) | §1 one URL per keyword group | Keyword map built from autocomplete + SERP evidence, volumes marked "no data" until a tool is available |

## 4. Design anti-patterns to avoid (and do not copy CleanerAtDoor's look)

- CleanerAtDoor palette (ink #101418, orange #F26522, teal #3A8DA9) and Plus Jakarta Sans + Inter — Shellharbour Cleaning gets its own direction.
- Single stock OG image and generic "cleaner wiping a bench" imagery.
- Long nav drawer listing three unrelated regions (Adelaide, Melbourne, Roma).
- Accordion FAQ with "+" toggles holding prices — key prices must be visible in body copy.
- "Fair dinkum pricing"-style eyebrows: brand voice can be Australian without slang filler.
