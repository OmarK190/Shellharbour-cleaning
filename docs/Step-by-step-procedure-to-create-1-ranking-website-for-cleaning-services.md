# Step-by-Step Procedure to Create a #1 Ranking Website for Cleaning Services

> A reverse-engineered blueprint from the 10 highest-traffic cleaning websites in the United States and Australia, turned into a build plan that Claude Code can follow on its own.
>
> **Research date:** November 2026 · **Data:** Semrush (Google organic, US and AU databases), live page inspection of competitor sites, and 2025–2026 third-party studies (Whitespark, BrightLocal, Google, Unbounce/LocaliQ and others). Every source is listed at the end.
>
> **Labels used throughout:**
> **[DATA]** measured figure · **[OBSERVED]** pattern seen on competitor pages · **[REC]** recommendation.

---

## Contents

1. [Executive summary: the 9 things every winner does](#1-executive-summary)
2. [The 10 winners: benchmark data](#2-the-10-winners)
3. [Why they win: evidence by factor](#3-why-they-win)
4. [US vs Australia: what changes](#4-us-vs-australia)
5. [The winning blueprint: site structure and page templates](#5-the-winning-blueprint)
6. [The SEO plan](#6-the-seo-plan)
7. [The conversion plan](#7-the-conversion-plan)
8. [Measurement and KPIs](#8-measurement)
9. [90-day roadmap](#9-90-day-roadmap)
10. [Claude Code build instructions (copy-paste)](#10-claude-code-build-instructions)
11. [Top 10 actions ranked by effort vs payoff](#11-top-10-actions)
12. [Sources](#12-sources)

---

## 1. Executive summary

The winning cleaning sites are rarely the best-looking ones. They win because they combine **local relevance at scale**, **one page per service**, **trust proof everywhere**, and **low-friction quoting**. In detail:

1. **The Google Business Profile (GBP) links to a dedicated location page, and that page becomes the #1 traffic page.** [DATA] For Maid to Clean, the homepage URL that its GBP links to (tagged with `utm_campaign=gbp`) brings in 52.8% of all organic traffic. For Molly Maid, one franchise page linked from its GBP (South Salt Lake) brings in 20.1% of the whole brand's US organic traffic.
2. **Every service gets its own page.** [DATA] Stanley Steemer's carpet-cleaning page alone takes 13.4% of site traffic, and its air-duct page takes 10.7%. Whitespark's 2026 survey ranks "Dedicated page for each service" as the **#1 local organic ranking factor**.
3. **The site has a location hierarchy of state, city, suburb or ZIP, and service × location.** [OBSERVED] Jim's Cleaning uses `/local/{service}/{state}/{city}/{suburb+postcode}/`, and Molly Maid uses `/locations/{area}/move-out-cleaning/`. Those service × location pages rank #1–2 for "move out cleaning services", which gets 49,500 US searches a month.
4. **Content targets buying-intent keywords.** [DATA] Commercial plus transactional searches make up 52–87% of winners' traffic (Maid to Clean 87%, Stanley Steemer 82%, Jim's 71%).
5. **An informational blog supports authority.** [DATA] Merry Maids' two top blog posts ("cleaning mold with vinegar" and "vomit out of carpet") bring in 10.3% of all its organic traffic.
6. **Trust appears on every screen.** [OBSERVED] Every winner shows a branded guarantee (e.g., "Neighborly Done Right Promise", "Jim's Work Guarantee", "5-Star Promise") alongside insurance, bonding or police checks, real team or owner profiles, reviews and awards.
7. **There are at least three ways to convert on every page.** [OBSERVED] Visitors can tap to call (the number is repeated three or four times per page), text, fill a quote form, or book instantly. Fast challengers like Simply Maid AU let people book from a postcode field, with a live price calculator, pay-after-clean and free cancellation.
8. **The site is ready for AI search (GEO).** [DATA] AI Overviews appear on 68% of local searches, while local packs appear on only 39% (Whitespark, via Search Engine Journal). AI tools rose from 6% to 45% of local-business discovery in a single year (BrightLocal 2026). The inputs that win here are clear service pages, reviews and consistent citations.
9. **Pages are fast and simple.** [DATA] Google found that as mobile load time goes from 1s to 10s, the probability of a visitor bouncing rises 123%.

**The gap to exploit:** most franchise location pages are templated and thin. Jim's Melbourne page has no nearby-suburb links and no franchisee profile, and The Maids' Towson page has placeholder lorem-ipsum text in its owner bio plus three different phone numbers. A newcomer that ships **genuinely local, data-rich pages** (like Simply Maid's suburb pages, which show rental data, booking patterns and nearby suburbs with distances) and **instant pricing** can outrank them in specific cities, even with fewer backlinks.

---

## 2. The 10 winners

### 2.1 Headline metrics (Semrush, Google organic, latest snapshot Nov 2026)

| Market | Site | Monthly organic visits | Organic keywords | Keywords in top 3 | Traffic value / mo (USD) | Commercial + transactional share | Paid search visits |
|---|---|---|---|---|---|---|---|
| US | stanleysteemer.com | 589,285 | 70,078 | 10,388 | $2,562,306 | 82% | 15,943 |
| US | mollymaid.com | 227,270 | 81,908 | 3,903 | $1,226,038 | 61% | 49 |
| US | thecleaningauthority.com | 171,765 | 43,148 | 4,740 | $958,600 | 52% | 4,507 |
| US | merrymaids.com | 135,314 | 50,622 | 5,143 | $589,970 | 65% | 0 |
| US | homeaglow.com | 106,533 | 32,976 | 1,151 | $331,375 | 45% | 1,070 |
| AU | jimscleaning.com.au | 112,518 | 64,607 | 9,167 | $219,078 | 71% | 270 |
| AU | puredry.com.au | 60,934 | 1,981 | 3 | $177,356 | 84% | 0 |
| AU | electrodry.com.au | 44,834 | 19,244 | 2,036 | $93,544 | 55% | 54 |
| AU | maidtoclean.com.au | 28,941 | 3,316 | 640 | $102,484 | 87% | 0 |
| AU | absolutedomestics.com.au | 15,473 | 4,233 | 198 | $31,724 | 74% | 0 |

*Traffic value = what the same clicks would cost on Google Ads, which is the best public stand-in for lead value. The intent share is Semrush's estimate.* **Caution [DATA]:** 99.9% of Pure Dry's traffic lands on its homepage, and it ranks top 3 for only 3 keywords, so this traffic is highly concentrated and probably driven by brand or a single keyword. Treat it as an outlier, not a model.

### 2.2 Where their traffic actually lands (top pages, Semrush)

| Site | #1 traffic page | Share | What it tells you |
|---|---|---|---|
| Molly Maid | `/locations/south-salt-lake/?utm_source=gmb…` | 20.1% | A location page linked from the GBP |
| Stanley Steemer | `/services/carpet-cleaning` | 13.4% | A dedicated service page (air duct is next at 10.7%) |
| The Cleaning Authority | `iteam.` customer portal | 21.1% | Existing customers logging in (not acquisition). The `/phoenix` city page has 6.9% |
| Merry Maids | Homepage | 20.6% | Then blog posts (5.7% and 4.6%), then GMB-tagged city pages |
| Homeaglow | Homepage | 32.6% | Then state and city pages (`/us/sc/` 10.3%, `/locations/ca/san-francisco/` 7.4%) |
| Jim's Cleaning | Homepage | 5.5% | Traffic spread across thousands of service × suburb pages (long tail) |
| Electrodry | Homepage | 17.4% | Then city pages, including several tagged `gbp-listing` |
| Maid to Clean | Homepage via GBP UTM | 52.8% | GBP is the main traffic engine |
| Absolute Domestics | Homepage | 59.2% | Then `/locations/{city}/` pages |

### 2.3 Top non-branded keywords they own (examples)

| Keyword | Monthly searches | CPC | Ranking site and position | Ranking URL type |
|---|---|---|---|---|
| carpet cleaning (US) | 165,000 | $3.21 | Stanley Steemer #1 | Service page |
| air duct cleaning (US) | 165,000 | $12.29 | Stanley Steemer #1 | Service page |
| house cleaning services (US) | 74,000 | $5.73 | Merry Maids #3 | Homepage |
| move out cleaning services (US) | 49,500 | $9.48 | Molly Maid #1 **and** #2 | Two service × location pages |
| house cleaners near me (US) | 49,500 | $5.55 | Molly Maid #4 | City page (San Jose) |
| apartment cleaning services (US) | 40,500 | $7.33 | Merry Maids #1 | Service page |
| bathroom cleaning service near me (US) | 6,600 | $4.96 | Merry Maids #1 | "Our process" room page |
| end of lease cleaning (AU) | 9,900 | $5.93 | Jim's #1 | Service + city page |
| window cleaning (AU) | 3,600 | $3.66 | Jim's #1 | Suburb page (Perth 6000) |
| carpet cleaning perth (AU) | 2,400 | $5.87 | Electrodry #1 | City page |
| NDIS cleaning services (AU) | 1,600 | $4.09 | Maid to Clean #1 | Niche service page |
| bond back cleaning (AU) | 1,000 | $5.13 | Maid to Clean #1 | Service page |

**Takeaways:** move-out / end-of-lease is the highest-value cleaning cluster (CPC $9.48 in the US). "Near me" searches are won by **city pages**, not the homepage. Niche services such as NDIS cleaning, room-specific cleaning and Airbnb turnover are easy #1 rankings.

---

## 3. Why they win

### 3.1 Site architecture and URL patterns [OBSERVED]

| Site | Service URLs | Location URLs | Service × location |
|---|---|---|---|
| Molly Maid | `/our-services/move-out-cleaning/` | `/locations/{state}/{city}/` and `/locations/{franchise-area}/` | `/locations/{area}/move-out-cleaning/` |
| Merry Maids | `/cleaning-services/{service}` | `/home-cleaners-{city}-{st}` and `/{franchise}` | `/{franchise}/cleaning-services/{service}` |
| Stanley Steemer | `/services/{service}` | `/locations/{ST}/{City}/{id}` | Local specials on the location page |
| Homeaglow | n/a (single offer) | `/us/{st}/` and `/us/{st}/{city}/` | `/us/{st}/{city}/{service}/` (e.g., same-day-cleaning, moving-cleaning) |
| The Maids | `/{service}` | `/{st}/{town}/` and numeric franchise IDs `/147` | Service links on each location page |
| Jim's Cleaning | `/service/{category}/{service}/` | `/local/{service}/{state}/{city}/{suburb+postcode}/` | Built into the local URL |
| Electrodry | `/services/{service}/` | `/carpet-cleaning-{city}/` and `/locations/carpet-cleaning-{suburb}/` | `/{city}/{service}/` (e.g., `/melbourne/upholstery-cleaning/`) |
| Maid to Clean | `/services/{service}/` | `/locations/{suburb}/` | — |
| Simply Maid (AU challenger) | `/services/{service}` and `/services/{service}/{city}` | `/{city}/{suburb}` | Plus `/pricing/{service}/{city}` and `/compare/{service}/{city}` |

**Pattern:** three dimensions, **Service × Place × Intent**: what you do, where you do it, and what stage the buyer is at (price, compare, book).

### 3.2 The Google Business Profile → landing page link is the biggest lever

[DATA] The GBP-linked URL is the top or near-top traffic page for most winners:

- Molly Maid: 6 of its top 11 traffic pages carry `utm_source=gmb`.
- Merry Maids: city pages tagged `utm_campaign=gmb` (Salt Lake, Albuquerque, Las Vegas, Pueblo) each bring 2–3.5% of traffic.
- Electrodry: `?utm_campaign=gbp-listing` on its Brisbane, Perth and Newcastle pages.
- Maid to Clean: 52.8% of all traffic.

[DATA] Whitespark 2026's top local-pack factors include **primary GBP category** (#1), **keywords in the GBP business title** (#3), **business open at time of search** (#5), **high ratings** (#6) and **quantity of native Google reviews** (#9). Its top local organic factors include **keywords in the GBP landing page title tag** (#4) and **in its H1/H2s** (#8).

[REC] Every GBP must link to a dedicated city page (never only the homepage), tagged with UTM parameters so you can measure it. That page's title and H1 must contain the service and the city.

### 3.3 Service pages: format used by winners

The Molly Maid move-out page [OBSERVED] is about 1,500 words of body content, laid out in this order:

1. H1 "Move-Out Cleaning Services"
2. How it works (3 numbered steps)
3. Who it's for (H3s: For Tenants / For Landlords)
4. What's included: a checklist under H3s (all rooms, bathroom & kitchen, inside cabinets & drawers, baseboards)
5. Why us
6. Benefits
7. A Request a Free Quote block
8. A **Find a local provider** table linking to about 50 city pages
9. 8 FAQs (cost, is it mandatory, what's included, how long, move-in, eco, guarantee, what we clean)
10. Testimonials (4 × 5-star)
11. Blog and cleaning-tips links

The CTAs are "Request a Free Quote" (repeated several times), "Call Us", "Find a Molly Maid Near Me" and "Click to Call".

Merry Maids [OBSERVED] goes a level deeper with **room-level "our process" pages** (`/our-process/bathroom-cleaning`, `/our-process/kitchen-cleaning`). These rank #1 for "bathroom cleaning service near me" and "kitchen cleaning service".

### 3.4 Location pages: templated vs genuinely local

| Element | Jim's Melbourne [OBSERVED] | Merry Maids Baltimore [OBSERVED] | The Maids Towson [OBSERVED] | Simply Maid West Melbourne [OBSERVED] |
|---|---|---|---|---|
| City in H1 | ✓ | ✓ | ✓ | ✓ |
| Breadcrumb | – | ✓ Home > Maryland > Baltimore | – | ✓ Home / Melbourne / Inner City / suburb |
| Service-area towns listed | – | ✓ 6 towns | ✓ ~40 towns | ✓ 11 nearby suburbs with distances |
| Local team or owner | – | ✓ two team profiles | ✗ (lorem ipsum placeholder) | ✓ cleaner count and profiles |
| Local reviews | – | – | 1 testimonial | ✓ Google rating 4.6 (69) |
| Local data | – | – | – | ✓ rental data, booking patterns, climate data |
| Price on page | "Written quote" | – | Plans | ✓ live calculator ("from $317" for 3 bed / 2 bath) |
| FAQ | ✓ 8 | ✓ 5 | ✓ 6 | ✓ 4 |
| Nearby links | ✗ | ✓ service cards | ✓ service links | ✓ suburbs, region and city |

[REC] Build location pages like Simply Maid's: each one carries **unique local facts** (suburbs and postcodes, local reviews, local team, local pricing, local FAQs and local proof). Google's helpful-content and spam policies target near-duplicate "doorway" pages, and Whitespark 2026 ranks "Geographic (city/neighbourhood) keyword relevance of content" as the **#2 local organic factor**.

### 3.5 Keywords, clusters and intent

[DATA] Intent mix (Semrush) shows that the winners' traffic is mostly buying intent:

| Site | Commercial | Transactional | Combined |
|---|---|---|---|
| Maid to Clean | 73% | 14% | 87% |
| Stanley Steemer | 47% | 35% | 82% |
| Jim's Cleaning | 64% | 8% | 71% |
| Merry Maids | 45% | 20% | 65% |
| Molly Maid | 45% | 15% | 61% |

**Cluster model used by the winners [OBSERVED → REC]:**

```
PILLAR: House cleaning (home + /services/house-cleaning)
 ├─ Service clusters (one page each)
 │   ├─ Regular / recurring cleaning
 │   ├─ Deep / spring cleaning
 │   ├─ Move-out · move-in · end-of-lease · bond cleaning   ← highest CPC cluster
 │   ├─ Apartment / condo cleaning
 │   ├─ One-off cleaning
 │   ├─ Office / commercial cleaning
 │   ├─ Airbnb / vacation rental turnover
 │   ├─ Post-construction / renovation cleaning
 │   ├─ Carpet · upholstery · mattress · rug (if offered)
 │   └─ Niche: NDIS (AU), senior, pet-owner, allergy/"cleaning for health"
 ├─ Room / process pages: kitchen, bathroom, oven, windows, fridge
 ├─ Location clusters: state → city → suburb/ZIP → service×city
 ├─ Money pages: pricing, cost calculator, "how much does a cleaner cost in {city}"
 ├─ Comparison pages: "{brand} vs {type}", "best cleaners in {city}" (honest)
 └─ Informational blog: how-to stain, mould, checklists → links to the matching service page
```

**Intent-to-page mapping [REC]:**

| Intent | Example queries | Target page |
|---|---|---|
| Transactional / local | "house cleaners near me", "bond cleaning Parramatta", "book cleaner today" | City or suburb page; service × city page |
| Commercial | "move out cleaning services", "best end of lease cleaners Melbourne" | Service page; comparison page |
| Price | "how much does a cleaner cost", "end of lease cleaning price" | Pricing page and calculator; cost guide |
| Informational | "how to clean mold with vinegar", "bond cleaning checklist" | Blog post or checklist (with service CTA) |
| Navigational | brand + "login", "reviews" | Login, reviews page |

### 3.6 Blog and content strategy [DATA + OBSERVED]

- **Merry Maids:** "guide cleaning mold vinegar" (704 keywords, 5.7% of traffic), "best way to clean vomit out of carpet" (4.6%), "how to get rid of gnats" (1,245 keywords), and "right way to clean granite countertops" (#6 for a 49,500-search keyword).
- **Electrodry:** pet urine removal, urine odour, blood stains, "never use bleach on mould", natural cockroach deterrent. Each post links back to a service.
- **The Cleaning Authority:** "Ultimate kitchen cleaning guide & checklist" (2.7k visits).
- **Jim's:** how to clean a fabric couch, nail polish off carpet, a shower drain (#1 for "how to clean shower drain").
- **Maid to Clean:** "How much does it cost to hire a cleaner in Melbourne (2025 guide)", a **local cost guide** that captures price-research intent.

**Why this matters:** informational posts earn links and AI citations and build topical authority. Whitespark lists "Topical keyword relevance across entire website" (#7) and "Website's degree of focus on a specific niche" (#9) among its top local organic factors.

### 3.7 Internal linking [OBSERVED]

- **Molly Maid:** each service page has a table of about 50 city links. The footer carries the services, company and location hubs.
- **Merry Maids:** each city page has 11 service cards linking to `/{city}/cleaning-services/{service}`, plus a blog teaser, an FAQ hub link and the footer location index.
- **Simply Maid:** each suburb page links up (to its region and city), sideways (to 11 nearby suburbs with distances) and down (to the service × city, pricing × city and compare × city pages).
- **Jim's:** no nearby-suburb links on the Melbourne page. This is a weakness you can exploit.

Whitespark 2026 ranks "Internal linking across entire website" as the **#6 local organic factor**.

### 3.8 Trust and conversion elements [OBSERVED]

| Element | Who uses it |
|---|---|
| Branded guarantee | Molly Maid "Neighborly Done Right Promise®", Jim's "Work Guarantee", Merry Maids "5-Star Promise" / "worry-free guarantee", The Maids "100% satisfaction guarantee" |
| Safety | US: "bonded and insured". AU: "Fully insured, police checked" (Jim's) and "Care & Cover, up to $10M liability" (Simply Maid) |
| People | Team profiles (Merry Maids), "Meet the Owner" (The Maids), franchisee badge "Gold Contractor, will call within 2 hours" (Jim's suburb profile) |
| Awards and media | Newsweek Award 2026 (The Maids), Women's Choice and Consumer Affairs (Merry Maids), ProductReview 2025 award (Jim's), press logos (Simply Maid) |
| Phone everywhere | Merry Maids: local and toll-free numbers in the header, hero and footer, plus **"Text Us"**. Jim's: 131 546 in the hero, booking section, closing section and FAQ |
| Quote flow | The Maids: 8 steps (frequency → contact → home size → cleanliness → service → frequency → consent). Simply Maid: postcode → "Book in 60 seconds" → live price → date picker |
| Offers | The Maids "10% off first clean" popup. Stanley Steemer: ZIP-unlocked local coupons (`/find-local-coupons` gets 8k visits/mo). Homeaglow: $19 first 3-hour clean tied to a membership |
| Risk reversal | Simply Maid: pay after the clean, free cancellation up to 24h. Molly Maid: no contracts |

⚠️ **Cautionary example:** Truth in Advertising criticised Homeaglow for a 10-minute countdown timer on its "limited time" $19 offer. Several reviews also say the offer requires a membership with a 6-month commitment. **Avoid fake urgency and hidden commitments.** They create complaints, refunds and review damage.

### 3.9 Technical SEO and schema [REC, based on observed gaps]

- **NAP consistency** (name, address, phone). The Maids' Towson page shows three different phone numbers, which is exactly what local SEO punishes. Use one tracked number per location, the same one as on the GBP.
- **Schema.org JSON-LD:** `Organization` (site-wide), plus `LocalBusiness` (or the most specific subtype) on each location page with `areaServed`, `geo`, `openingHoursSpecification`, `aggregateRating` (only first-party, policy-compliant reviews), `Service` on service pages, `FAQPage`, `BreadcrumbList` and `Offer` / `PriceSpecification` on pricing pages.
- **Fast static pages.** Google/SOASTA found that as mobile load time goes from 1s to 10s, bounce probability rises 123%. Separately, 53% of mobile visitors leave if a page takes more than 3 seconds to load.
- **Crawl hygiene:** strip UTM parameters with canonical tags (Molly Maid's GBP UTM URLs are indexed as separate pages). Keep portal and login subdomains (`iteam.`, `my.`, `app.`) `noindex`, since they soak up traffic share without generating leads.

### 3.10 GEO: Generative / AI search optimisation [DATA]

- AI Overviews appear on **68%** of local searches, local packs on only **39%** (Whitespark, reported by SEJ).
- Consumers using AI tools for local recommendations rose from **6% → 45%** in one year. AI is now the #3 discovery source after Google and Facebook (BrightLocal LCRS 2026).
- In AI Overviews, **73.5%** of local-intent citations went to the business's own website. In AI Mode, **79.8%** went to Google Maps / Business Profile URLs (Steady Demand study, 2026, unreplicated).
- A "dedicated page per service" ranks **#2 for AI visibility** in Whitespark 2026 (reported by Loganix). Three of the top five AI visibility factors are citations or mentions.
- AI Overviews reduce organic clicks by about **58%** (Ahrefs Feb 2026, via PinMeTo). Being cited matters more than ranking alone.

[REC] To get cited:

- Write answer-first service and location pages (start each section with a 1–2 sentence direct answer).
- Publish real prices or price ranges, checklists and "what's included" lists.
- Get consistent listings on the directories AI tools read (GBP, Apple Business Connect, Bing Places, Yelp, Foursquare, ProductReview/hipages/Oneflare in AU, Angi/Thumbtack/BBB in the US).
- Earn unlinked brand mentions in local media.
- Keep the GBP active weekly (posts, photos, Q&A, review replies).
- Optionally publish an `llms.txt` file.

### 3.11 Reviews [DATA]

- 97% of consumers read reviews for local businesses. 41% "always" read them, up from 29% (BrightLocal 2026).
- 74% only care about reviews from the last 3 months, and 47% won't use a business with fewer than 20 reviews (BrightLocal 2026, via eChai summary).
- Whitespark local-pack factors include high numerical ratings (#6) and quantity of native Google reviews with text (#9).

[REC] Run an automated review request after every job (SMS 2 hours after the clean). Reply to every review within 48 hours. Show recent reviews on each city page.

---

## 4. US vs Australia

| Topic | United States | Australia |
|---|---|---|
| Move-out wording | "move out cleaning", "move in cleaning" | "end of lease cleaning", "bond cleaning", "vacate cleaning", "bond back cleaning" (Jim's ranks #1 for "vacate cleaners perth") |
| Location unit | City + state, ZIP code, county; franchise territories | **Suburb + postcode** (Jim's URLs include `melbourne+3000`); regions like "Inner City" or "Eastern Suburbs" |
| Trust language | "Bonded and insured", background-checked | "Police checked", "fully insured", ABN shown, public liability amount |
| Niche demand | Air duct and dryer vent (huge in the US: 165k and 90.5k searches), Airbnb, post-construction | **NDIS cleaning** (1,600 searches; Maid to Clean #1), bond-back guarantees, oven and BBQ cleaning |
| Directories that matter | Angi, Thumbtack (about 2M visits/mo), Yelp, BBB, Nextdoor | hipages (253k), Airtasker (356k), Oneflare, ProductReview.com.au, ServiceSeeking |
| Phone format | Local (xxx) xxx-xxxx plus toll-free | 13/1300 numbers (Jim's 131 546) plus mobile 04xx |
| Pricing norms | Hourly or plan-based; in-home estimates common | Flat-rate packages by bedrooms × bathrooms; instant online pricing common |
| Spelling | color, mold | colour, mould (match local spelling in keywords) |

---

## 5. The winning blueprint

### 5.1 Site map

```
/                                   Home (brand + primary city)
/services/                          Services hub
/services/{service}/                One page per service (10–15 pages)
/services/{service}/{city}/         Service × city (top cities only, unique content)
/locations/                         Location hub (map + list)
/locations/{state}/                 State/territory hub (optional for single-state brands)
/locations/{city}/                  City page  ← GBP landing page
/locations/{city}/{suburb-or-zip}/  Suburb/neighbourhood page (only where you have real coverage)
/pricing/                           Pricing + instant calculator
/pricing/{service}/                 Service price guides
/checklists/{service}/              Printable "what's included" checklists (AI & link magnets)
/compare/                           Honest comparisons (e.g., agency vs independent cleaner)
/reviews/                           All reviews, filterable by city/service
/guarantee/                         Guarantee details
/about/  /team/  /careers/          Trust & hiring (team pages show real people)
/blog/{category}/{post}/            How-to, stain, mould, moving, seasonal
/faq/                               Global FAQ
/book/                              Booking flow
/gift-cards/  /commercial/          Optional revenue pages
/llms.txt  /sitemap.xml  /robots.txt
```

### 5.2 Page templates (required blocks in order)

**A. Homepage**

1. Header: logo · services menu · locations · pricing · reviews · phone (tap-to-call) · "Get instant price" button
2. Hero: H1 "{Primary service} in {Primary city}" plus a benefit line, a postcode/ZIP field with an "See my price" CTA, and a trust row (★ rating + review count, insured/police checked, guarantee)
3. Services grid (6–9 cards, each linking to its service page)
4. "How it works" in 3 steps
5. Instant price calculator teaser
6. Reviews (most recent, with city and service named)
7. Guarantee and safety block
8. Service-area block (cities with links, plus a map)
9. Team / "real people" block
10. FAQ (6–8 questions)
11. Final CTA band
12. Footer: service links, location links, contact, NAP, licences/ABN, socials

**B. Service page** (target 1,200–1,800 words)

1. H1 "{Service} Services" with a short answer-first intro
2. Price-from line and a quote widget
3. Who it's for
4. What's included (room-by-room checklist, with a downloadable version)
5. Add-ons
6. How it works (3 steps)
7. Before/after photos (your own)
8. Why us (guarantee, vetting, insurance)
9. Locations served (link table to city and service × city pages)
10. Reviews mentioning this service
11. FAQ (8)
12. Related services and blog links
13. Final CTA

**C. City page** (the GBP landing page; target 900–1,500 words of *unique* content)

1. Breadcrumb
2. H1 "{Service} in {City}" with the local phone number
3. Local trust row (local rating, cleans completed in {city}, years serving)
4. Quote widget pre-filled with the city
5. Services offered in {city} (cards linking to service × city pages)
6. Suburbs/ZIPs served (linked to suburb pages)
7. Local pricing examples
8. Local team or owner profile
9. Local reviews
10. Local FAQs (parking, building access, local rental/bond rules, same-day availability)
11. Map embed
12. NAP and hours (identical to the GBP)
13. Nearby cities
14. Final CTA

**D. Suburb / ZIP page** (only where there is real demand and coverage)

1. Breadcrumb
2. H1 "House Cleaning in {Suburb} {Postcode}"
3. Booking widget pre-filled with the suburb
4. Nearby suburbs with distances
5. Local data (e.g., home types or median rent, which shows why end-of-lease demand is high)
6. Jobs completed nearby (anonymised)
7. 2–3 local reviews
8. 3–4 local FAQs
9. Link up to the city page and across to sibling suburbs

> **Anti-doorway rule:** do not publish a suburb page unless it has at least 3 unique data points (reviews, jobs completed, team coverage, local facts, prices). Otherwise, list that suburb on the city page instead.

**E. Pricing page**

1. H1 "{Brand} Cleaning Prices"
2. Interactive calculator (bedrooms, bathrooms, condition, frequency, extras)
3. Price tables by service
4. What affects price
5. Discounts for recurring cleans
6. FAQ
7. `Offer` schema

**F. Blog post**

1. Answer-first summary (40–60 words)
2. Step-by-step method
3. "When to call a pro" box linking to the matching service
4. FAQ
5. Author with real credentials (E-E-A-T: experience, expertise, authoritativeness, trust)

---

## 6. The SEO plan

### 6.1 Keyword research (repeatable process)

1. **Seed list:** every service × synonym (house / home / domestic / maid / housekeeping; move-out / end-of-lease / bond / vacate).
2. **Modifiers:** near me · {city} · {suburb} · cost / price · best · same day · cheap · professional · checklist · how to.
3. **Pull volumes** for each market (Semrush or Ahrefs, AU or US database). Keep keywords with commercial or transactional intent for money pages and informational ones for the blog.
4. **Competitor gap:** run Semrush Keyword Gap against the 3 local leaders in your city.
5. **Cluster:** group keywords by SERP overlap (if two keywords share 3 or more top-10 URLs, they belong on the same page).
6. **Map** each cluster to exactly one URL so pages don't compete with each other.

### 6.2 On-page rules

- **Title:** `{Service} in {City} | From ${price} | {Brand}` (≤ 60 characters)
- **Meta description:** benefit, proof and CTA (≤ 155 characters), e.g., "Police-checked cleaners, bond-back guarantee. 4.9★ from 1,200 reviews. Instant price in 30 sec."
- **One H1** containing the service and place. H2s answer real questions (pulled from the "People also ask" box and your support inbox).
- **First 100 words:** direct answer, service, place and price-from.
- **Images:** your own photos, WebP/AVIF, descriptive alt text, lazy-loaded below the fold.
- **URL:** lowercase, hyphenated, no dates on evergreen pages.

### 6.3 Internal linking rules

- Each service page links to every city page that offers it.
- Each city page links to every service × city page, its suburb pages, 3–6 nearby cities and the pricing page.
- Each suburb page links up (to its city), across (to 6–12 nearby suburbs) and to 3 services.
- Each blog post links to exactly one primary service page with descriptive anchor text, plus 1–2 related posts.
- Footer: services hub, top 10 cities, pricing, reviews, guarantee.
- Breadcrumbs on every page below the homepage.

### 6.4 Google Business Profile playbook

1. One verified GBP per real location or service base. Choose the primary category carefully (e.g., "House cleaning service"), then add secondary categories ("Carpet cleaning service", "Window cleaning service", "Commercial cleaning service").
2. Use your real business name. Keyword-stuffing business names now risks suspension (Google's 2026 spam crackdown).
3. Link the website field to the **city page** with UTM tags, e.g., `?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
4. List services with descriptions and prices. Set the service area to real suburbs. Keep hours accurate (being open at the time of search is a top-5 factor).
5. Post weekly, upload 10+ real photos a month, seed the Q&A, and reply to every review.

### 6.5 Citations and links

- **Core citations:** GBP, Apple Business Connect, Bing Places, Facebook, Yelp, Foursquare, plus the market directories in §4. Use identical NAP everywhere.
- **Links:** local sponsorships, real-estate agent and property-manager partnerships (they refer bond cleans), moving companies, local news (e.g., "the 5 dirtiest spots in a rental"), cleaning statistics studies, and supplier pages.
- **Linkable assets:** printable checklists, a "cost of cleaning in {city}" index updated yearly, and stain-removal guides.

### 6.6 Reviews engine

- Send an automated SMS and email request 2 hours after each clean, with a direct link to the GBP review form.
- Target 20+ reviews per location fast, then a steady flow every month (recency matters).
- Reply within 48 hours, mentioning the service and suburb naturally.
- Show reviews on-site (first-party reviews only in schema).

### 6.7 GEO checklist

- Answer-first paragraphs, Q&A headings, price ranges, checklists and comparison tables
- Consistent entity data (Organization `sameAs` links to all profiles)
- Mentions on third-party "best cleaners in {city}" lists (comparison listicles are the most-cited AI content format, according to The Digital Bloom 2025 report, a secondary source)
- `llms.txt` listing key pages
- Monthly spot-checks of AI answers in ChatGPT, Perplexity and Google AI Mode for "best house cleaners in {city}"

---

## 7. The conversion plan

| Lever | Spec | Evidence |
|---|---|---|
| Short first step | Postcode/ZIP, bedrooms and bathrooms. Ask for contact details only *after* showing the price | Form conversion drops from ~25% at 3 fields to ~12% at 7 fields (FoundryCRO 2026) |
| Instant price | A live calculator on the homepage, service, city and pricing pages | Simply Maid and Homeaglow both show prices up front |
| Three contact paths | Tap-to-call, SMS/text, form/booking, all on every page plus a sticky mobile bar | Merry Maids "Text Us"; phone repeated 3–4× on winners' pages |
| Risk reversal | Satisfaction or re-clean guarantee, bond-back guarantee (AU), free cancellation 24h, pay after the clean | Molly Maid, Jim's, Simply Maid |
| Trust density | Rating and review count near every CTA; insured/police-checked; real team photos | Every winner |
| Honest offer | e.g., "$30 off your first clean". No countdown timers or hidden memberships | Homeaglow criticism (Truth in Advertising) |
| Speed | LCP < 2.0s on 4G; total JS < 100 KB on landing pages | Google bounce research |

**Benchmarks to beat:** the median home-services landing page converts at about 6.7% and the top quartile at more than 17.6% (Barham Marketing, via WebTonic). The home-services average search-ad conversion rate is 7.33% (LocaliQ 2025).

---

## 8. Measurement

| KPI | Target (months 6–12) | Tool |
|---|---|---|
| Local pack top-3 coverage (grid) | ≥ 60% of grid points in core city | Local Falcon / Whitespark grids |
| Non-branded organic clicks | +15% month on month | Google Search Console |
| GBP calls, website clicks, direction requests | +10% month on month | GBP Performance |
| Visit → lead conversion | ≥ 8% (stretch 15%) | GA4 events |
| Lead → booked job | ≥ 40% | CRM |
| Reviews per location per month | ≥ 8, average ≥ 4.8★ | GBP |
| Core Web Vitals pass | 100% of templates | Search Console CWV report |
| AI citations | Brand named in ≥ 3 of 10 test prompts per city | Manual or AI-visibility tool |

Track phone calls with dynamic number insertion **outside** the GBP (keep the GBP number constant), plus GA4 events for `quote_start`, `quote_complete`, `call_click`, `sms_click` and `booking_complete`.

---

## 9. 90-day roadmap

| Week | Work |
|---|---|
| 1–2 | Keyword research and URL map; GBP audit/creation; NAP decision; brand guarantee defined; photo shoot |
| 3–4 | Build the site (Claude Code steps in §10): templates, home, 10 service pages, pricing calculator, booking |
| 5–6 | Launch city pages for the top 3–5 cities, linked from the GBP; schema; Search Console; GA4 events |
| 7–8 | Core citations (20–40); review automation live; first 6 blog posts (high-volume how-tos tied to services) |
| 9–10 | Service × city pages for the top 2 services in the top 3 cities; suburb pages only where coverage is real |
| 11–12 | Link outreach (agents, property managers, local press); cost-guide linkable asset; first CRO test (form steps) |
| Ongoing | 4 posts/month, weekly GBP posts, monthly review targets, quarterly content refresh of top 20 pages |

---

## 10. Claude Code build instructions

> Paste the block below into Claude Code in an empty project folder. Fill in the `{{ }}` values first, or let Claude Code create a `business.config.json` with placeholders.

```text
You are building a production-ready, SEO-first website for a cleaning-services business.
Follow every step in order. Do not skip tests. Ask me only if a required business fact is missing.

BUSINESS FACTS (edit before running)
- Brand: {{BRAND}}          - Market: {{US|AU}}       - Primary city: {{CITY}}
- Phone: {{PHONE}}          - SMS: {{SMS}}            - Email: {{EMAIL}}
- Address (or service-area only): {{ADDRESS}}         - ABN/Licence: {{ID}}
- Services offered: {{LIST}}
- Cities served: {{LIST}}   - Suburbs/ZIPs per city: {{LIST}}
- Guarantee name + terms: {{GUARANTEE}}
- Pricing rules (base by bed/bath, condition multipliers, frequency discounts, extras): {{RULES}}
- Review rating + count (real): {{RATING}} / {{COUNT}}
- Booking/CRM endpoint or email for leads: {{ENDPOINT}}

STEP 1 — Project setup
1. Create an Astro (latest) static site with TypeScript and Tailwind CSS. No client-side framework unless needed;
   use small vanilla JS islands for the price calculator, FAQ accordion, and mobile menu.
2. Create /src/data/business.json, services.json, locations.json, faqs.json, reviews.json, pricing.json
   from the BUSINESS FACTS. Every page is generated from these files — no hard-coded business data in templates.
3. Add ESLint, Prettier, and a `npm run check` script that runs type-check, lint, link-check, and Lighthouse CI.

STEP 2 — Design system
4. Implement the tokens and components from UI-UX-design-guide.md (colors, type scale, spacing, radius, shadows,
   buttons, trust badges, cards, quote widget, sticky mobile CTA bar, review card, FAQ accordion, breadcrumb).
5. Meet WCAG 2.2 AA: 4.5:1 contrast, visible focus, 44×44px tap targets, labels on all inputs, skip link,
   prefers-reduced-motion respected.

STEP 3 — URL architecture (generate with getStaticPaths)
6. Create routes:
   /  ·  /services/  ·  /services/[service]/  ·  /services/[service]/[city]/ (only if service.cities includes city
   AND locations.json has ≥3 unique facts for that combo)  ·  /locations/  ·  /locations/[city]/  ·
   /locations/[city]/[suburb]/ (only if suburb.uniqueFacts.length ≥ 3)  ·  /pricing/  ·  /pricing/[service]/  ·
   /checklists/[service]/  ·  /reviews/  ·  /guarantee/  ·  /about/  ·  /team/  ·  /careers/  ·  /faq/  ·
   /book/  ·  /blog/  ·  /blog/[slug]/  ·  /404
7. Lowercase, hyphenated slugs. Trailing slash consistent. No query-string pages indexed.

STEP 4 — Templates (use the block order exactly as in §5.2 of the procedure document)
8. Homepage, Service, City, Suburb, Service×City, Pricing, Blog post, Reviews, Book.
9. Each template pulls: H1 pattern, title pattern, meta description pattern from a single seo.ts helper:
   - Title: "{Service} in {Place} | From ${price} | {Brand}" (truncate to 60 chars)
   - H1: "{Service} in {Place}"
   - First paragraph: answer-first, includes service, place, price-from, guarantee.
10. City and suburb templates MUST render: local reviews (filtered by city), nearby places with distances
    (compute haversine from lat/lng in locations.json), local FAQs, local price examples, team members serving the area,
    NAP block identical to business.json. Build fails if any city page has <3 local reviews or <3 local FAQs
    (throw an error listing what is missing).

STEP 5 — Conversion features
11. Quote widget (step 1: postcode/ZIP, bedrooms, bathrooms → show price instantly; step 2: service, frequency, extras;
    step 3: name, mobile, email, preferred date → submit). Validate inline. Persist progress in memory only.
    POST to {{ENDPOINT}}; show a confirmation with next steps and a call/SMS fallback.
12. Price calculator logic in /src/lib/pricing.ts with unit tests for every rule in pricing.json.
13. Sticky mobile bar (Call · Text · Get price) on all pages under 768px. Header phone is a tel: link.
14. Show rating + review count and guarantee next to every primary CTA.
15. No countdown timers, no pre-ticked marketing consent, no hidden subscriptions.

STEP 6 — Structured data (JSON-LD in <head>)
16. Organization (site-wide, with sameAs to GBP, Facebook, Instagram, Yelp/ProductReview).
17. LocalBusiness (most specific schema.org subtype available) on city pages: name, url, telephone, address or
    areaServed (list suburbs/ZIPs), geo, openingHoursSpecification, priceRange, image, aggregateRating only from
    first-party reviews shown on the page.
18. Service on service pages (serviceType, provider, areaServed, offers with priceSpecification).
19. FAQPage on pages with FAQs; BreadcrumbList everywhere below home; Article + author on blog posts.
20. Validate all JSON-LD in a test using schema-dts types and a JSON-LD parser.

STEP 7 — Technical SEO
21. Generate sitemap.xml (split: pages, locations, blog), robots.txt (disallow /book/thanks, /api), canonical tags
    (strip UTM and query params), hreflang only if both en-US and en-AU versions exist.
22. Create /llms.txt listing brand facts, services, cities, pricing page, guarantee, and contact.
23. Open Graph + Twitter cards per page; favicon set; web manifest.
24. 301 redirect map file for future URL changes.

STEP 8 — Performance budget
25. LCP < 2.0s (4G, mid-tier mobile), CLS < 0.05, INP < 200ms, total JS < 100KB per page, hero image < 120KB AVIF/WebP,
    fonts: 1 family, 2 weights, font-display: swap, preloaded. Self-host everything; no third-party script on initial load
    except analytics (deferred).
26. Lighthouse CI thresholds: Performance ≥ 95, Accessibility ≥ 100, Best Practices ≥ 95, SEO ≥ 100 on Home, Service,
    City, Suburb templates. Fail the build if below.

STEP 9 — Content generation (draft, then flag for human review)
27. For each service: 1,200–1,800 words following the Service template; room-by-room checklist; 8 FAQs from real
    customer questions; link table to all cities offering it.
28. For each city: 900–1,500 words of unique content using locations.json facts; never reuse paragraphs across cities
    (add a test that fails if any two city pages share a >40-word identical sentence block).
29. Create 6 starter blog posts mapped to services (e.g., end-of-lease checklist, how to remove mould, oven cleaning
    guide, cost of a cleaner in {city}, how often to deep clean, pet hair removal). Each links to one service page.
30. Mark every generated factual claim that isn't in the data files with <!-- VERIFY --> for human review.

STEP 10 — Analytics & tracking
31. GA4 with events: quote_start, quote_step_2, quote_complete, call_click, sms_click, booking_complete.
32. UTM-aware landing detection so GBP traffic (utm_campaign=gbp) is reported separately.

STEP 11 — QA & launch
33. Run `npm run check`; fix all errors. Test on 360px, 768px, 1280px widths. Keyboard-only walkthrough of the
    quote flow. Validate schema in Google's Rich Results Test (manual step — list URLs to test).
34. Output a LAUNCH.md with: pages generated, any pages skipped by the anti-doorway rule and why, open VERIFY items,
    and the exact URLs to set as GBP website links per location.
```

---

## 11. Top 10 actions

| # | Action | Effort | Payoff | Why |
|---|---|---|---|---|
| 1 | Point each GBP to a dedicated, UTM-tagged city page | Low | Very high | GBP-linked pages are the #1 traffic page for most winners |
| 2 | One page per service (10–15 pages) | Medium | Very high | #1 local organic factor (Whitespark 2026); Stanley Steemer's top pages |
| 3 | Review engine (automated SMS, reply to every review) | Low | Very high | 74% only trust recent reviews; ratings and count are top local-pack factors |
| 4 | Instant price calculator + 3-field first step | Medium | High | Form conversion falls by about half from 3 to 7 fields |
| 5 | Unique city pages for the top 3–5 cities | Medium | High | Geographic relevance is the #2 organic factor; beats templated franchise pages |
| 6 | Move-out / end-of-lease cluster (service, checklist, price guide, city variants) | Medium | High | Highest CPC in the category ($9.48 US); Molly Maid holds #1 and #2 |
| 7 | Schema + NAP consistency + core citations | Low | Medium–High | AI visibility leans on citations; NAP errors hurt local rank |
| 8 | Sticky mobile call/text/quote bar | Low | Medium–High | Every winner repeats phone CTAs; most local traffic is mobile |
| 9 | Answer-first content and FAQs for GEO | Low–Medium | Medium–High | AI Overviews on 68% of local searches; site is the main AIO citation source |
| 10 | Informational blog tied to services (4/month) | High (ongoing) | Medium | Builds topical authority and links; Merry Maids gets 10%+ of traffic from two posts |

---

## 12. Sources

**Competitor data (Semrush, Nov 2026)**
- Semrush Domain Overview and Organic Pages / Positions reports for each domain listed in §2 ([US example](https://www.semrush.com/analytics/overview/?db=us&q=mollymaid.com), [AU example](https://www.semrush.com/analytics/overview/?db=au&q=jimscleaning.com.au))
- Semrush Organic Competitors ([AU](https://www.semrush.com/analytics/organic/competitors/?db=au&q=jimscleaning.com.au), [US](https://www.semrush.com/analytics/organic/competitors/?db=us&q=mollymaid.com))

**Competitor pages inspected**
- [Molly Maid: Move-Out Cleaning](https://mollymaid.com/our-services/move-out-cleaning)
- [Merry Maids: Baltimore](https://merrymaids.com/baltimore)
- [Jim's Cleaning: House Cleaning Melbourne](https://www.jimscleaning.com.au/local/home-cleaning-services/vic/melbourne/melbourne+3000)
- [The Maids: Towson/Baltimore](https://www.maids.com/147)
- [Simply Maid: West Melbourne](https://simplymaid.com.au/melbourne/west-melbourne)
- [Stanley Steemer: Find Local Coupons](https://www.stanleysteemer.com/find-local-coupons)
- [Homeaglow: Pricing](https://homeaglow.com/pricing)

**Research and benchmarks**
- [Whitespark: Local Search Ranking Factors 2026](https://whitespark.ca/local-search-ranking-factors/)
- [Loganix: Google local search ranking factors 2026](https://loganix.com/google-local-search-ranking-factors/) (on-page signals 33%; page per service #2 for AI)
- [Search Engine Journal: AI Overviews now answer most local searches](https://www.searchenginejournal.com/ai-overviews-now-answer-most-local-searches/556789/)
- [BrightLocal: Local Consumer Review Survey 2026](https://www.brightlocal.com/research/local-consumer-review-survey/)
- [SHNO: Local SEO statistics](https://www.shno.co/marketing-statistics/local-seo-statistics) (BrightLocal 2026 AI 6% → 45%)
- [eChai summary of BrightLocal LCRS 2026](https://echai.ventures/startingup/r/local-consumer-review-survey-2026--t5-su-growth-r013) (74% recent reviews, 47% < 20 reviews)
- [Steady Demand local citations study (summary)](https://hartzer.it.com/steady-demand-local-citations-2026/)
- [PinMeTo: AI Overviews and local search 2026](https://www.pinmeto.com/blog/ai-overviews-local-search-2026/) (Ahrefs −58% clicks)
- [Think with Google: Mobile page speed benchmarks](https://thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/)
- [Digital Main Street summary of the Google study](https://digitalmainstreet.ca/?p=6266) (53% leave > 3s)
- [FoundryCRO: Form conversion rate benchmarks 2026](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- [WebTonic: HVAC landing page statistics](https://www.webtonic.io/blog/hvac-landing-page-statistics) (home services median 6.7%, top 25% 17.6%)
- [WebTonic: Junk removal CRO benchmarks](https://www.webtonic.io/blog/junk-removal-and-dumpster-rental-landing-pages-and-cro-statistics) (LocaliQ 7.33%)
- [Truth in Advertising: Homeaglow $19 offer](https://truthinadvertising.org/articles/taking-the-shine-off-homeaglows-19-cleaning-service)
- [Insites: Google 2026 local spam enforcement](https://insites.com/resources/five-insites/what-it-takes-to-rank-in-ai/)
- [FindSkill: Digital Bloom AI citation report](https://findskill.ai/blog/get-found-in-chatgpt-small-business/) (listicles 32.5% of citations, secondary source)

**Not verifiable / flagged:**
- Pure Dry's traffic profile looks anomalous; treat it with caution.
- Steady Demand's citation split is a single, unreplicated study.
- Some stats come via secondary summaries, noted inline.
- Semrush traffic is modelled, not actual analytics.
