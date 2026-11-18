# AI Visibility Playbook — Shellharbour Cleaning

Maps every item of the owner's *AI Visibility Checklist 2026* (focal) to its status, owner and cadence (PRD Story 7.5). Status as of 2026-11-19.

| # | Checklist item | Status | Where / who | Cadence |
|---|---|---|---|---|
| 1 | robots.txt not blocking AI crawlers | Done in code (production allows OAI-SearchBot, Claude-SearchBot, PerplexityBot, Applebot, GPTBot, ClaudeBot, Google-Extended) | `app/robots.ts` | Verify at launch with technicalseo.com/tools/ai-bot-access/ |
| 2 | Pages load without JavaScript | Done (static HTML; e2e tests run with JS disabled) | All marketing pages | Verify at launch with jetoctopus.com/js-tool/ |
| 3 | Sitemap in GSC + Bing | Pending launch | Owner, Story 7.2 | Once, then monthly check |
| 4 | Confirm key pages indexed (`site:`) | Pending launch | Owner | Monthly |
| 5 | /facts page | Done | `/facts/` | Update when facts change |
| 6 | Organisation schema (name, description, logo, founding date, socials) | Done; founding date and socials appear once supplied in `config/site.ts` | `lib/seo/schema.ts` | When profiles go live |
| 7 | FAQ schema on key pages | Done (home, services, hubs, service-in-city, guides, blog, pricing, guarantee, FAQ) | — | — |
| 8 | Article schema with author and dates | Done (blog + guides); author is the team until a named person is supplied | — | — |
| 9 | LocalBusiness schema with address/phone/hours | Done; phone/address appear once LB3/LB4 resolved | — | — |
| 10 | Service schema with pricing | Done (service and service-in-city pages; OfferCatalog on pricing) | — | — |
| 11 | Person schema for founder (LinkedIn) | Builder ready; needs founder name, role, LinkedIn | Owner → `SITE.founder` | Once |
| 12 | Direct 2–4 sentence answer + TL;DR | Done (blog and guides; tests enforce) | — | Every new post |
| 13 | Natural language, FAQ at bottom, comparison tables | Done | — | Every new page |
| 14 | Hard numbers instead of vague claims | Done; build check bans "many customers", "studies show" | `scripts/checks/lib.mjs` | — |
| 15 | Named expert quotes | Pending: needs a real team member willing to be quoted | Owner | Add to posts as available |
| 16 | Original data | Statistics page ready; own booking averages once 30+ bookings | `/illawarra-cleaning-prices-statistics/` | Quarterly |
| 17 | "Best X for Y" and "X vs Y" pages | Done (2 comparison + 3 X-vs-Y pages) | — | Add 1 per quarter |
| 18 | Glossary | Done (`/cleaning-glossary/`, 20 terms) | — | — |
| 19 | Statistics round-up | Done | — | Every January |
| 20 | Rank for ICP keywords / topical authority | Done for launch set (Semrush + Ahrefs research in `docs/research/illawarra-keywords.md`) | — | 4 posts a month |
| 21 | Update top pages, show Last Updated | Done (content-sourced dates) | — | Monthly refresh of top 5 pages |
| 22 | Google Business Profile + directories | Pending LB1 (business name) | Owner, `docs/local-presence.md` | Weekly GBP activity |
| 23 | Identical NAP everywhere | Enforced in site code; external listings per `docs/citations.csv` | Owner | Quarterly audit |
| 24 | Industry directories and "best of" lists | Pending | Owner, `docs/citations.csv` | Monthly outreach |
| 25 | Ask AI what it looks for in a cleaner; use it in descriptions | Pending | Owner (prompt: "What do you look for when recommending a cleaner in Wollongong?") | Once, refresh yearly |
| 26 | 3 industry/local publication mentions | Pending | Owner: Illawarra Mercury, local newsletters, business chambers | Quarterly |
| 27 | Podcast appearances | Pending | Owner | As available |
| 28 | YouTube (keywords in title/description/file name/first & last 10 s, chapters, companion post, channel in schema) | Pending | Owner; add channel URL to `BUSINESS_PROFILES` | 1 video a month |
| 29 | Detailed Google reviews describing outcomes | Pending (review-request SMS is Epic 9) | Owner | After every job |
| 30 | "What do you know about Shellharbour Cleaning" check across AI engines | Pending launch | Owner, `docs/ai-visibility/` | Monthly |
| 31 | Reddit (r/wollongong, r/illawarra): genuine help first, no promotion until established, follow subreddit rules | Pending | Owner | Weekly |
| 32 | LinkedIn long-form articles (answer-first) | Pending | Owner | Monthly |
| 33 | Grey-hat: "best of" posts on Medium/LinkedIn/Substack/Quora | **Allowed only with clear authorship disclosure** | Owner | — |
| 34 | Grey-hat: source poisoning / self-ranked "industry report" press releases | **Not done** — misleading conduct risk under the ACCC and platform penalties | — | — |

## Monthly AI check prompts

1. Best house cleaners in Shellharbour
2. End of lease cleaning Wollongong price
3. Who does bond cleaning in Kiama?
4. NDIS cleaning services Wollongong
5. How much does a cleaner cost in Wollongong?
6. Carpet steam cleaning Shellharbour
7. What do you know about Shellharbour Cleaning?
8. Airbnb cleaning Kiama

Record answers and cited sources in `docs/ai-visibility/{yyyy-mm}.md`.
