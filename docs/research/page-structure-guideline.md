# Page Structure Guideline (source: user brief, 2026-11-19)

> Verbatim copy of the page-structure guideline supplied by the project owner. Data references are to the top 5 Australian cleaning sites (Semrush top-pages data). This file is an input to `docs/PRD.md`.

Your site needs one page for every service, city and suburb you serve, not one landing page. The top 5 Australian sites get their traffic this way. Jim's Cleaning's homepage brings in only **5.5%** of its traffic; the rest comes from hundreds of service, city and suburb pages and how-to articles.

Below are the page names and URLs those 5 sites actually use (from Semrush top-pages data), then a standard spec for every page.

---

## 1. Site map (Australian naming)

| Page type | Our URL | What the top AU sites use |
|---|---|---|
| Homepage | `/` | All 5 |
| Services hub | `/services/` | Maid to Clean `/services/` |
| Service page | `/services/end-of-lease-cleaning/` | Maid to Clean `/services/end-of-lease-cleaning/`, Electrodry `/services/tile-and-grout-cleaning/` |
| Service in a city | `/melbourne/end-of-lease-cleaning/` | Electrodry `/brisbane/upholstery-cleaning/`, Jim's `/service/end-of-lease-cleaning-sydney/` |
| Locations hub | `/locations/` | Absolute Domestics, Maid to Clean |
| City page (Google listing links here) | `/locations/melbourne/` | Absolute Domestics `/locations/sydney/`, Electrodry `/carpet-cleaning-brisbane/` |
| Suburb page | `/locations/brunswick/` | Maid to Clean `/locations/brunswick/`, Absolute Domestics `/locations/parramatta/`, Jim's `/local/…/melbourne+3000/` |
| Pricing | `/pricing/` | Maid to Clean `/pricing/` (306 keywords) |
| City price guide | `/house-cleaning-prices-melbourne/` | Absolute Domestics `/blog/house-cleaning-prices-brisbane/`, Maid to Clean `/how-much-does-a-cleaner-cost-in-melbourne/` |
| Specials | `/specials/` | Jim's `/service/specials/carpet-cleaning-offer/` (1,100 visits/mo) |
| Extras / add-ons | `/services/additional-services/` | Maid to Clean `/services/additional-services/` |
| Checklist | `/end-of-lease-cleaning-checklist/` | Absolute Domestics `/blog/what-does-a-bond-clean-include/` |
| Book now | `/book-now/` | Maid to Clean `/book-now/` |
| Blog | `/blog/{post}/` | Electrodry `/news-blog/…`, Jim's `/2024/07/22/how-to-…` (use no dates) |
| Comparison | `/best-cleaning-company-melbourne/` | Maid to Clean |
| Team / cleaner profiles | `/team/{name}/` | Jim's `/franchise/australia/vic/{suburb}-…/` |
| Careers | `/careers/` | Maid to Clean `/careers/` (294 visits), Absolute Domestics `/resources/apply-for-a-house-cleaning-job/` |
| Reviews, guarantee, about, FAQ, contact | `/reviews/` etc. | All 5 |
| Customer login | `my.` subdomain, **noindex** | Absolute Domestics `my.`, The Cleaning Authority `iteam.` |

**URL rules:** lowercase, hyphens, no dates, trailing slash, one URL per keyword group, and UTM-tagged URLs canonicalised to the clean URL.

---

## 2. Rules for every page

These apply to every page, then each page type adds its own spec below.

- **Title:** `{Service} {Place} | From $X | Brand` (≤ 60 characters)
- **Meta description:** proof + offer + action (≤ 155 characters)
- **H1:** exactly one, containing the service and place
- **Opening:** the first 100 words give a direct answer: service, area, price-from, guarantee
- **Above the fold:** phone number (tap to call), "Get a quote" button, rating and review count, "police checked & insured"
- **Mobile:** sticky bar with Call, Text and Get price
- **Breadcrumb** and BreadcrumbList schema on every page below the homepage
- **FAQ:** 4–8 questions with FAQPage schema
- **Footer:** name, address and phone identical to your Google listing, plus ABN
- **Speed:** loads in under 2 seconds on mobile, real photos only
- **Last section:** a final call to action

---

## 3. Page-by-page specs

### Homepage
- **Targets:** brand + "cleaning services {main city}", "house cleaners near me"
- **Title:** `House Cleaning {City} | Police-Checked Cleaners | Brand`
- **Sections in order:**
  1. Hero: H1, price tool, trust row
  2. Trust strip
  3. Service list with "from $" prices
  4. How it works (3 steps)
  5. What's included
  6. Recent reviews (name, suburb, service)
  7. Guarantee
  8. Areas we clean (city and suburb links)
  9. Cleaners
  10. FAQ
  11. Final call to action
- **Length:** 900–1,300 words
- **Links:** every service page, top cities, pricing
- **Schema:** Organization + LocalBusiness + FAQPage

### Services hub `/services/`
- One block per service (name, one-line description, price-from, link)
- Groups: home, end of lease, carpet & upholstery, commercial, specialist (NDIS, mould, Airbnb)
- **Length:** 400–700 words

### Service pages `/services/{service}/` (most important pages after city pages)

Build one for each service:

| Service | Page name |
|---|---|
| Regular cleaning | `regular-cleaning` |
| One-off cleaning | `one-off-cleaning` |
| End of lease cleaning | `end-of-lease-cleaning` (also captures "bond cleaning" and "vacate cleaning") |
| Deep / spring cleaning | `deep-cleaning` |
| Carpet steam cleaning | `carpet-steam-cleaning` |
| Upholstery cleaning | `upholstery-cleaning` |
| Mattress cleaning | `mattress-cleaning` |
| Rug cleaning | `rug-cleaning` |
| Tile & grout cleaning | `tile-and-grout-cleaning` |
| Mould cleaning | `mould-cleaning` |
| Oven cleaning | `oven-cleaning` |
| Window cleaning | `window-cleaning` |
| Office cleaning | `office-cleaning` |
| NDIS cleaning | `ndis-cleaning-services` |
| Airbnb cleaning | `airbnb-cleaning` |
| Move-in cleaning | `move-in-cleaning` |
| Post-construction cleaning | `post-construction-cleaning` |
| Extras and add-ons | `additional-services` |

Only publish a page if you actually offer that service.

- **Title:** `End of Lease Cleaning Melbourne | Bond Back Guarantee | Brand`
- **H1:** "End of Lease Cleaning" (add the city if you serve one city)
- **Sections in order:**
  1. Answer-first intro + price-from
  2. Quote widget
  3. Who it's for (tenants, landlords, agents)
  4. Room-by-room checklist (downloadable)
  5. Add-ons with prices
  6. How it works (3 steps)
  7. Before/after photos
  8. Guarantee terms
  9. Price table by bedrooms × bathrooms
  10. Areas served (links to service-in-city and suburb pages)
  11. Reviews mentioning this service
  12. FAQ (8)
  13. Related services and blog posts
  14. Call to action
- **Length:** 1,200–1,800 words
- **Schema:** Service + Offer + FAQPage
- **Evidence:** Whitespark's 2026 survey of local SEO experts ranks Dedicated Page for Each Service as the #1 factor for ranking in regular local results.

### Service-in-a-city pages `/{city}/{service}/`

Electrodry does this for every main city: `/brisbane/upholstery-cleaning/`, `/melbourne/mattress-cleaning/`, `/brisbane/mould-cleaning/`.

- **Build:** your top 3–4 services × each main city (Melbourne, Sydney, Brisbane, Perth, Adelaide, Canberra, Gold Coast, Hobart, as you expand)
- **H1:** "Upholstery Cleaning Brisbane"
- **Must be unique to that city:**
  1. Local price examples
  2. Suburbs covered for this service
  3. Local reviews for this service
  4. Local team
  5. Local FAQs (e.g., Brisbane humidity and mould)
- **Length:** 800–1,200 words, with no copy-pasted paragraphs from other cities

### Locations hub `/locations/`
- A map, cities grouped by state, and suburbs listed under each city with links
- A postcode checker ("Do you clean in my suburb?")

### City pages `/locations/{city}/` (your Google Business Profile links here)

Absolute Domestics' city pages (Sydney, Brisbane, Hobart, Perth, Canberra, Adelaide, Darwin) are its top pages after the homepage. Electrodry, Maid to Clean and Molly Maid link their Google listings to these pages with UTM tags.

- **Title:** `Cleaners {City} | House & End of Lease Cleaning | Brand`
- **H1:** "House Cleaning {City}"
- **Sections in order:**
  1. Breadcrumb
  2. H1 + local phone number
  3. Local trust row (rating, cleans done in {city}, years serving)
  4. Quote tool pre-filled with the city
  5. Services in {city} (links to service-in-city pages)
  6. Suburbs we cover (links)
  7. Local prices
  8. Local team or manager
  9. Local reviews
  10. Local FAQs (parking, keys, building access, same-day availability)
  11. Map
  12. Name, address, phone and hours exactly as on the Google listing
  13. Nearby cities
  14. Call to action
- **Length:** 900–1,500 words of unique content
- **Schema:** LocalBusiness with `areaServed`

### Suburb pages `/locations/{suburb}/`

Maid to Clean has pages for Brunswick, Brighton, Essendon, Coburg, St Kilda, Moonee Ponds, Bentleigh, Newport and Northcote. Absolute Domestics has Parramatta, Castle Hill and Ipswich.

- **H1:** "Cleaners in Brunswick 3056"
- **Sections in order:**
  1. Booking widget pre-filled with the suburb
  2. Services available
  3. Nearby suburbs with distances (Jim's doesn't do this, so it's an easy win)
  4. Local facts (housing type, rental demand)
  5. 2–3 local reviews
  6. Jobs done nearby
  7. 3–4 local FAQs
  8. Link back to the city page
- **Length:** 500–900 words
- **Rule:** only publish a suburb page if it has 3+ unique facts (reviews, jobs, team, local data). Otherwise list the suburb on the city page instead. This keeps Google from treating the pages as spam.

### Pricing `/pricing/`
- Price calculator (bedrooms, bathrooms, condition, how often, extras)
- Price tables for each service
- What affects the price
- Recurring discounts
- What's included
- FAQ
- **Schema:** Offer / PriceSpecification

### City price guides `/house-cleaning-prices-{city}/`
- **Captures searches like:** "how much does a cleaner cost in Melbourne"
- **Sections:** price ranges by home size, hourly vs flat rate, end of lease costs, how to save
- **Upkeep:** update the year in the title every January
- **Links:** pricing page and booking

### Specials `/specials/`
- Current offers and their terms (honest, with no countdown timers)
- Each offer links to its service page and the booking page

### Extras `/services/additional-services/`
- Inside the oven, fridge, windows, walls, balcony, blinds, and carpet add-on
- Each extra has a price and a "Add to my clean" link

### Checklists `/{service}-checklist/`
- Printable checklist for end of lease, deep clean and move-in
- These pages earn links from property managers and get quoted in AI answers
- Each links to its service page

### Book now `/book-now/`
- **Flow:**
  1. Postcode, bedrooms, bathrooms → price shown
  2. Pick a date
  3. Name and mobile
- Shows the guarantee and "pay after the clean"
- **Indexing:** noindex the thank-you page

### Blog `/blog/{post}/`

Copy what works:
- **Jim's:** how to deodorise carpet, how to clean a leather sofa, how to clean glass shower doors, coffee stains, mattress stains
- **Electrodry:** cockroaches, urine smell from a couch, vomit on carpet, red wine stains, never use bleach on mould
- **Absolute Domestics:** what a bond clean includes, shower cleaning guide, housekeeper vs house cleaner

**Spec for each post:**
- 40–60 word answer at the top
- Steps to follow
- A "When to call a pro" box linking to one service page
- FAQ
- Author with real experience
- 900–1,600 words
- Article schema
- Publish 4 a month

### Comparison `/best-cleaning-company-{city}/`
- Write an honest guide on how to choose a cleaner, with a comparison table and where you fit
- AI tools quote this kind of page a lot

### Reviews `/reviews/`
- All reviews, filterable by suburb and service, plus a link to your Google profile
- Only real reviews (never fake ones in the code)

### Guarantee `/guarantee/`
- Plain-English terms: what's covered, the time limit, how to claim, the bond-back process

### About `/about/`
- Your story, ABN, insurance details, police checks, awards, and media mentions

### Team `/team/` and `/team/{name}/`
- Photo, name, years of experience, areas covered and specialty
- Jim's franchisee profile pages rank for "carpet cleaning {suburb}"

### Careers `/careers/`
- Job listings by suburb, pay, the application process and JobPosting schema
- Careers pages get steady search traffic at Maid to Clean and Absolute Domestics

### FAQ and Contact
- **FAQ:** grouped by topic (booking, pricing, products, safety, cancellations)
- **Contact:** phone, text, email, form, hours and service area
- Name, address and phone identical to the Google listing

### Commercial hub `/commercial-cleaning/` (if you offer it)
- Links to office, warehouse, commercial kitchen and strata cleaning
- Maid to Clean has `/services/warehouse-cleaning-services-melbourne/` and `/services/commercial-kitchen-cleaning-melbourne/`

### Legal and technical
- Privacy policy, terms, sitemap.xml, robots.txt and llms.txt
- The customer login portal gets noindex

---

## 4. Internal linking

| From | Link to |
|---|---|
| Service page | Every city and service-in-city page for that service |
| City page | All its services and suburbs, plus 3–6 nearby cities |
| Suburb page | Its city page and 6–12 nearby suburbs |
| Blog post | 1 service page (descriptive link text) and 2 related posts |
| Footer | Services hub, top cities, pricing, reviews, guarantee |

## 5. Launch order

1. Homepage, pricing, book now
2. 8–10 service pages
3. City pages for your Google listings
4. Service-in-city pages for your top 3 services
5. Checklists and price guides
6. Suburb pages only where you have real jobs and reviews
7. Blog, 4 posts a month
