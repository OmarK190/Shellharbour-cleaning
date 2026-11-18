# Illawarra Keyword Map — Shellharbour Cleaning

Date: 2026-11-19.

**Data limits:** Ahrefs `keywords-explorer-overview` returned `{"error": "Insufficient plan"}`, so there are no volume or KD figures. Demand evidence comes from Google Australia autocomplete (`suggestqueries`, `gl=au`, 20 seed queries, raw output kept in the session scratchpad) and live SERPs (WebSearch). An autocomplete suggestion shows the query has real search demand, but not how much. Volume and KD columns stay "no data" until a keyword tool with API access is connected, then rows are re-ranked.

Intent: T transactional, C commercial investigation, I informational. Autocomplete evidence: **A** = suggested by Google AU autocomplete, **S** = seed only (not suggested).

## 1. Clusters → one URL each

| Cluster (primary + variants) | Evidence | Intent | Target URL |
|---|---|---|---|
| shellharbour cleaning, cleaners shellharbour, shellharbour cleaning services, house cleaners shellharbour | A | T | `/locations/shellharbour/` (homepage targets the brand) |
| cleaners kiama, cleaning kiama, kiama cleaning services, house cleaning kiama, house cleaners kiama | A | T | `/locations/kiama/` |
| cleaners dapto, cleaning dapto, house cleaners dapto, cleaning services dapto | A | T | `/locations/dapto/` |
| house cleaning wollongong, domestic cleaning wollongong, residential cleaning wollongong, house cleaning services wollongong | A | T | `/locations/wollongong/` |
| house cleaning illawarra, cleaners illawarra, house cleaners illawarra, cleaning illawarra | A | T | `/` (homepage: region-level head term) |
| end of lease cleaning shellharbour, bond clean shellharbour | A | T | `/shellharbour/end-of-lease-cleaning/` |
| end of lease cleaning wollongong, bond cleaning wollongong, end of lease cleaning illawarra, end of lease cleaning cost wollongong | A | T | `/wollongong/end-of-lease-cleaning/` |
| end of lease cleaning (generic), bond cleaning, vacate cleaning | S | T | `/services/end-of-lease-cleaning/` |
| carpet cleaning wollongong, carpet cleaning wollongong prices, carpet cleaner wollongong, carpet cleaning illawarra | A | T | `/wollongong/carpet-steam-cleaning/` |
| carpet cleaning shellharbour, carpet cleaners shellharbour | A | T | `/shellharbour/carpet-steam-cleaning/` |
| carpet cleaning kiama, carpet cleaning dapto, carpet cleaners albion park | A | T | Listed on `/services/carpet-steam-cleaning/` areas block until demand justifies city pages |
| window cleaning wollongong, window cleaning wollongong prices, window cleaners shellharbour, window cleaning kiama, window cleaning albion park | A | T | `/services/window-cleaning/` (areas block links hubs) |
| rug cleaning shellharbour, rug cleaning wollongong | A | T | `/services/rug-cleaning/` (only if offered) |
| ndis cleaning wollongong, ndis cleaners wollongong, ndis cleaners illawarra | A | T | `/services/ndis-cleaning-services/` |
| does ndis cover cleaning, ndis cleaning hourly rate, ndis hourly rate for cleaners | A | I | FAQ block on the NDIS page + blog post `/blog/does-ndis-cover-cleaning/` |
| office cleaning wollongong, commercial cleaning wollongong, cleaning company wollongong | A | T | `/commercial-cleaning/` hub (office page links) |
| airbnb management kiama (adjacent), airbnb cleaning | A/S | T | `/services/airbnb-cleaning/` with Kiama + Shellharbour Village angle |
| deep cleaning {city} | S | T | `/services/deep-cleaning/` |
| oven cleaners illawarra | A | T | `/services/oven-cleaning/` |
| lounge cleaners illawarra | A | T | `/services/upholstery-cleaning/` (only if offered) |
| cleaner shell cove, cleaners albion park, cleaning albion park, house cleaning albion park, cleaning services albion park | A | T | Suburb pages when gated in (`/locations/shell-cove/`, `/locations/albion-park/`); until then the Shellharbour hub |
| what does an end of lease clean include, end of lease cleaning includes, what is end of lease cleaning | A | I | `/end-of-lease-cleaning-checklist/` |
| how long does an end of lease clean take, end of lease cleaning how much | A | I | FAQ on `/services/end-of-lease-cleaning/` + price guide |
| how much does a cleaner cost, how much does a cleaner cost per hour, how much does a cleaner cost for a 2 bedroom apartment | A | I | `/house-cleaning-prices-wollongong/` (largest city) with Shellharbour/Kiama guides linked |
| bond cleaning wollongong reviews | A | C | `/reviews/` + `/best-cleaning-company-wollongong/` |
| cleaning jobs shellharbour, cleaning jobs in wollongong, cleaning jobs dapto | A | T (jobseeker) | `/careers/` (JobPosting per hub) |

## 2. Exclusions (autocomplete noise — not our service)

dry cleaning / dry cleaners (all towns), ear cleaning, gutter cleaning, car cleaning, vacuum cleaners, solar panel cleaning, house washing / exterior house cleaning (pressure washing, only if the business adds it), "how to clean a shell".

## 3. Service-in-city build (top 3 services × 4 hubs, gated)

Top 3 services by evidence: **end of lease**, **house (regular) cleaning**, **carpet steam cleaning**.

| | Shellharbour | Kiama | Dapto | Wollongong |
|---|---|---|---|---|
| End of lease | build | build | build | build |
| House cleaning | hub page owns it | hub page owns it | hub page owns it | hub page owns it |
| Carpet steam | build | gate | gate | build |
| Airbnb (Kiama-specific 4th) | — | build | — | — |

House cleaning has no separate `/{city}/house-cleaning/` page: the hub H1 is "House Cleaning {City}", so a second page would compete with it. "gate" = build only when that city has local price examples, at least 2 local reviews for the service, and a local cleaner.

## 4. SERP landscape (WebSearch, 2026-11-19)

- Page-one results for "end of lease cleaning shellharbour", "house cleaning wollongong", "cleaners kiama" and "cleaning services dapto/albion park/shell cove" are mostly **marketplaces** (Airtasker, Oneflare, Bark, Houzz) and **Jim's Cleaning franchise pages** (`/local/end-lease-cleaning/nsw/kiama/gerroa+2534`).
- Few independent local sites rank. Named locals: Illawarra Cleaning Crew (GBP 5.0 from 21 reviews), Lizzy Anne's Cleaning Services (Port Kembla), Fixology Property Services (bond, Wollongong), Tullimbar Cleaning Services, Advanced Cleaning Service (Dapto), WCG Cleaning (Unanderra), Every Inch Cleaning, MJ's Treasured Services (Lake Heights), The Cleaning Co Shellharbour (hiring on Indeed).
- National: Electrodry has `/locations/carpet-cleaning-shellharbour`; Maid2Match has an Illawarra page; VIP Home Services franchise covers Dapto.

**Implication:** the competitors that rank do it with marketplace scale, not page quality. A local site with dedicated, genuinely local service/hub pages, published prices and a populated GBP can reach the local pack and organic page one. That is weaker competition than the Adelaide market CleanerAtDoor faces.

## 5. Price anchors seen in market (for the price guides, cite as marketplace data)

- Airtasker Shellharbour general cleaner: $210–$300; end of lease jobs $150–$500 (2 bed 2 bath listed at $200, Apr 2025).
- Airtasker Wollongong cleaner: $120–$290, median $180.
- Airtasker Kiama: $150–$376; end of lease job $350.
- Airtasker Shell Cove: $200–$366, median $275.
- Airtasker Illawarra end of lease: $120–$750, avg rating 4.73 (196 reviews).
- The Quote Yard South Coast bond clean: 2-bed unit $310–$530; 3–4 bed house $480–$950.

Our published end of lease range ($190–$410) sits at or below these, which is a real, citable price position for the price guide pages.

## Sources

- Google AU autocomplete (`suggestqueries.google.com`, `client=firefox`, `gl=au`)
- https://www.airtasker.com/cleaning/end-of-lease-cleaning/shellharbour-nsw
- https://www.airtasker.com/cleaning/wollongong-nsw
- https://www.airtasker.com/au/services/end-of-lease-cleaning/kiama-nsw
- https://www.airtasker.com/au/services/cleaning/shell-cove-nsw/
- https://www.airtasker.com/cleaning/end-of-lease-cleaning/illawarra
- https://www.thequoteyard.com.au/services/hire-cleaner-south-coast-nsw
- https://oneflare.com.au/cleaner/nsw/wollongong
- https://jimscleaning.com.au/local/end-lease-cleaning/nsw/kiama/gerroa+2534
- https://electrodry.com.au/locations/carpet-cleaning-shellharbour
- https://business.google.com/v/illawarra-cleaning-crew/03884636417994113675/73c4/_
