# Competitors, Local SEO & GEO/AEO Strategy — Shellharbour Cleaning

Date: 2026-11-19. Sources: WebSearch SERPs, SEOcrawl `fetch_url`, `docs/Step-by-step-procedure-…md` §3.2, §3.9–3.11, §6.7, user page-structure guideline.

## 1. Who ranks in the Illawarra today

| Competitor | Type | What ranks | Page pattern observed | Weakness to exploit |
|---|---|---|---|---|
| Airtasker | Marketplace | `/au/services/end-of-lease-cleaning/shellharbour-nsw/`, house-cleaning pages for Wollongong, Kiama, Shell Cove, Dapto, Illawarra | Title "Top 10 Cheap End of Lease Cleaners in Shellharbour \| Airtasker AU"; H1 "Find a professional end of lease cleaning service in Shellharbour"; 738 words; 181 internal links; schema Organization, Product, Service, LocalBusiness, BreadcrumbList; "Recent tasks" with real prices; 9 images missing alt | No guarantee, no fixed price, unvetted taskers; we answer with fixed published prices, police-checked staff, written guarantee |
| Oneflare / Bark / Houzz | Directories | `/cleaner/nsw/wollongong`, `/cleaner/nsw/kiama`, `/cleaner/nsw/shell-cove` | Aggregate ratings (Oneflare Wollongong 4.8 from ~600 reviews), list of businesses | They are citation sources: list Shellharbour Cleaning on each (also feeds AI answers) |
| Jim's Cleaning | National franchise | `/local/end-lease-cleaning/nsw/kiama/gerroa+2534`, `/local/cleaners/nsw/kiama/gerroa+2534`; Shellharbour franchise page lists Flinders, Barrack Heights, Barrack Point, Shell Cove, Croom, Warilla, Blackbutt | Postcode-level programmatic pages; blocks crawlers (403) | Template pages with no nearby-suburb distances, no local prices; 131 546 national number |
| Electrodry | National franchise | `/locations/carpet-cleaning-shellharbour` | City-level carpet pages | Carpet only; we compete on carpet-in-city pages for Shellharbour + Wollongong |
| Illawarra Cleaning Crew | Local | Google Business Profile (5.0 from 21 reviews), covers Wollongong, Shellharbour, Kiama, Shell Cove, Albion Park | GBP-led | The local-pack rival; beat it on review count and on GBP-to-city-page linking |
| Lizzy Anne's Cleaning Services | Local (Port Kembla) | Oneflare profile | Claims 400+ weekly clients | Weak site presence |
| Fixology Property Services | Local bond specialist | Trustpilot (company-written content) | Bond/EOL, Wollongong + Illawarra | One service only |
| Tullimbar Cleaning, Advanced Cleaning Service (Dapto, 11+ yrs), WCG Cleaning (Unanderra), Every Inch Cleaning, MJ's Treasured Services (mixed review), Taylan Cleaning (Barrack Heights) | Local small operators | Oneflare/Houzz profiles | Directory-only | No dedicated service or city pages |
| The Cleaning Co Shellharbour | Local (hiring on Indeed) | — | — | **Brand-name proximity risk** — see §4 |

**Summary:** no competitor combines dedicated service pages + city pages + published prices + real local proof. The marketplaces win on scale and internal links; we win on page-type match (a business page for a transactional "cleaner {town}" query) and on Google Business Profile strength.

## 2. Google Business Profile plan

- One GBP for the service-area business (address hidden), categories: primary **House cleaning service**; secondary: Carpet cleaning service, Window cleaning service, Commercial cleaning service.
- Service areas: Shellharbour, Kiama, Dapto, Wollongong (GBP allows up to 20 areas — add the major suburbs).
- GBP website link → `/locations/shellharbour/?utm_source=gbp&utm_medium=organic&utm_campaign=shellharbour` (canonical strips UTM).
- A second profile (e.g. Wollongong) only if a real, staffed second base exists — never a virtual office (policy violation).
- Weekly: 1 post, 3+ real job photos, review replies within 48 hrs, Q&A seeded from site FAQs.
- Review engine: SMS 2 hours after each clean with the GBP review link; target 20 reviews in the first 90 days (47% of consumers won't use a business with fewer than 20).

## 3. Citations (NAP identical everywhere)

Apple Business Connect, Bing Places, Oneflare, hipages, Airtasker business profile, Yelp AU, Foursquare, True Local, Localsearch, Yellow Pages AU, ProductReview, Illawarra Mercury local business directory, Shellharbour and Kiama business chambers. Record each in a citations tracker with URL and the date checked.

## 4. Brand-name risk

- No business registered exactly as "Shellharbour Cleaning" was found, but "The Cleaning Co Shellharbour" trades locally and "shellharbour cleaning co" appears in Google autocomplete.
- A GBP name must be the real registered business name; adding keywords that are not part of the legal or trading name breaks Google's guidelines and risks suspension.
- **Launch blocker:** register "Shellharbour Cleaning" as a business name (ASIC) under the reused ABN before creating the GBP; check IP Australia for trade mark conflicts. The name also matches the head query "shellharbour cleaning", which is why it was chosen. Expect GBP reviewers to scrutinise it, so keep the registration certificate on hand.

## 5. GEO / AEO rules for every page (AI Overviews, ChatGPT, Perplexity, Gemini, Copilot)

1. **Answer first:** each H2 section opens with a 1–2 sentence direct answer containing the figure (e.g. "End of lease cleaning in Shellharbour costs $190 to $410 depending on bedrooms and bathrooms, GST included.").
2. **Question-phrased H2/H3s** that match autocomplete questions ("What does an end of lease clean include?", "How long does an end of lease clean take?").
3. **Citable passages:** 40–60-word self-contained paragraphs with a named entity (Shellharbour Cleaning), place, number and condition.
4. **Tables and lists** for prices, inclusions, checklists and comparisons (most-cited formats).
5. **Entity consistency:** `Organization` + `LocalBusiness`/`HouseCleaning` with `@id`, `sameAs` (GBP, Apple, Bing, Oneflare, hipages, socials — real URLs only), `areaServed` (four hubs as `City`/`AdministrativeArea`), `knowsAbout` services.
6. **Freshness:** visible "Prices checked {month year}" on pricing and price-guide pages, driven from one config date.
7. **AI crawler access:** robots.txt allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended; blocks only portal paths.
8. **llms.txt** (optional; Google ignores it) listing hubs, services, pricing, guarantee, checklists, with one-line answers.
9. **Comparison pages** `/best-cleaning-company-{city}/`: honest criteria table naming categories (marketplace vs franchise vs local business) rather than attacking named competitors.
10. **Monthly AI spot-check:** run 8 prompts ("best house cleaners in Shellharbour", "end of lease cleaning Wollongong price", …) in ChatGPT, Perplexity, Gemini and Google AI Mode; log who gets cited (`ai-visibility-check` skill).
11. **IndexNow** pings on publish so Bing/Copilot pick up changes fast.

## Sources

- https://www.airtasker.com/au/services/end-of-lease-cleaning/shellharbour-nsw/
- https://oneflare.com.au/cleaner/nsw/wollongong
- https://www.oneflare.com.au/cleaner/nsw/kiama
- https://jimscleaning.com.au/local/end-lease-cleaning/nsw/kiama/gerroa+2534
- https://jimscleaning.com.au/?p=2908
- https://electrodry.com.au/locations/carpet-cleaning-shellharbour
- https://business.google.com/v/illawarra-cleaning-crew/03884636417994113675/73c4/_
- https://assets.oneflare.com.au/b/lizzy-anne-s-cleaning-services
- https://nl.trustpilot.com/review/fixology.com.au
- https://au.indeed.com/Cleaning-jobs-in-Dapto-NSW
- https://www.viphomeservices.com.au/services/commercial-cleaning/nsw/bombo
