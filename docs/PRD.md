# Shellharbour Cleaning Product Requirements Document (PRD)

> BMAD-Method PRD (template `prd-tmpl` v2.0), drafted in auto (`#yolo`) mode by the PM agent.
> Project brief inputs: `docs/research/page-structure-guideline.md`, `docs/research/cleaneratdoor-audit.md`, `docs/research/illawarra-keywords.md`, `docs/research/competitors.md`, `docs/research/suburbs.md`, `docs/research/ui-components.md`, `docs/Step-by-step-procedure-to-create-1-ranking-website-for-cleaning-services.md`, `docs/UI-UX-design-guide.md`.

## Goals and Background Context

### Goals

- Rank in the Google local pack and top 3 organic results for "cleaners {town}" and "end of lease cleaning {town}" in Shellharbour, Kiama, Dapto and Wollongong within 6 months of launch.
- Be the business that AI answers (Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot) cite for Illawarra cleaning price and "what's included" questions.
- Show a real price in three taps and let a visitor book a clean in under 90 seconds on a phone, without a phone call.
- Reach 20 genuine Google reviews in the first 90 days and keep a review request after every completed job.
- Run bookings, cleaners and customers on real accounts and a real database (full parity with the CleanerAtDoor app, replacing its mock data store).
- Out-perform CleanerAtDoor on every page-structure gap found in the audit (one URL scheme, service-in-city pages, price guides, reviews, guarantee, careers, team, gated suburb pages, complete LocalBusiness schema).
- Launch with zero fabricated reviews, zero invented local facts and zero unverifiable claims.

### Background Context

Shellharbour Cleaning is a new residential and light-commercial cleaning brand for the Illawarra region of NSW: Shellharbour City, Kiama, the Dapto district and Wollongong. It comes from the same operator as CleanerAtDoor (cleaneratdoor.com, Adelaide), and reuses that business's ABN, phone line and published price list. The brand, site, design and local data are new. The audit of CleanerAtDoor found the patterns worth keeping: one price source, honest null ratings, OpenStreetMap-sourced suburb copy and mechanised QA checks. It also found what holds it back: four competing URL schemes, retired suburb pages, thin schema, no price-first booking, no reviews or guarantee pages, and portals running on browser `localStorage` with a mock login.

The Illawarra search results are winnable. Page one for "end of lease cleaning shellharbour", "house cleaning wollongong", "cleaners kiama" and "cleaning dapto" is dominated by marketplaces (Airtasker, Oneflare, Bark) and Jim's franchise templates. Few independent local businesses have dedicated service or town pages. The top-performing Australian cleaning sites get over 90% of their traffic from service, city, suburb and how-to pages rather than the homepage. This PRD therefore specifies a page-per-service, page-per-town architecture built to the owner's page-structure guideline. It adds answer-first copy for AI citation and a more engaging, photo-led design than the reference mock. Bookings and accounts run on a real backend.

### Target Users

| Persona | Need | Primary pages |
|---|---|---|
| Outgoing tenant (incl. University of Wollongong students) | Bond back, fixed price, agent-ready clean on a set date | End of lease service + service-in-city pages, checklist, book now |
| Busy household (Shell Cove, Albion Park, Dapto family homes) | Reliable regular cleaner, same person each visit, easy rescheduling | Hub pages, regular cleaning, customer portal |
| Property manager / landlord | Vacate cleans between tenants, invoices with ABN | End of lease, checklist, invoices |
| Holiday-let host (Kiama, Shellharbour Village, Gerringong) | Fast turnovers, linen, urgent slots | Airbnb service, Kiama Airbnb page |
| NDIS participant / older resident (and their carer) | Clear funded-service terms, legible pages, trusted cleaner | NDIS and aged care pages, team, guarantee |
| Small office owner (Wollongong CBD) | Scheduled office cleaning, one invoice | Commercial hub, office cleaning |
| Local cleaner seeking work | Pay, hours, areas, simple application | Careers |

### Change Log

| Date | Version | Description | Author |
|---|---|---|---|
| 2026-11-19 | 1.0 | Initial PRD draft (BMAD auto mode) from research pack | John (BMAD PM agent) for the project owner |
| 2026-11-19 | 1.2 | Owner's AI Visibility Checklist 2026 integrated: FR52–FR55, FR40 expanded (logo, foundingDate, Person schema), Stories 5.6, 6.6, 7.5. Grey-hat items kept only in their disclosed, honest form. | John (BMAD PM agent) |
| 2026-11-19 | 1.1 | Ahrefs free-tool keyword data added (KD, volumes, competitor traffic). FR17 expanded with office × Wollongong, NDIS × Wollongong and conditional upholstery × Wollongong; Story 4.6 updated. Owner will supply the new phone number and address (LB3, LB4). | John (BMAD PM agent) |

### Launch Blockers (owner decisions and facts required before public launch)

| ID | Item | Why it blocks | Default if not resolved |
|---|---|---|---|
| LB1 | Register "Shellharbour Cleaning" as a business name (ASIC) under ABN 81 480 225 391, check IP Australia | The Google Business Profile name must be the real registered name; "The Cleaning Co Shellharbour" trades locally | Do not create the GBP |
| LB2 | Domain (e.g. `shellharbourcleaning.com.au`) and email (e.g. `hello@{domain}`) | Canonicals, schema `@id`, NAP | `SITE.url` stays a TODO; production build fails |
| LB3 | Business address: owner will supply an Illawarra address (or confirm service-area business with address hidden) | CleanerAtDoor's address (Munno Para SA) must not appear; NAP must match the GBP | Owner to supply (2026-11-19); until then footer and schema show service areas only |
| LB4 | Phone: owner will supply a new number for Shellharbour Cleaning | One number on two brands' GBPs can link the listings and blur call tracking | Owner to supply (2026-11-19) |
| LB5 | Confirm which services are offered in the Illawarra (see FR10) | Only publish pages for services actually offered | Publish the "confirmed" set only |
| LB6 | Confirm prices apply unchanged in NSW, and confirm the end of lease price grid | Prices are reused from live cleaneratdoor.com | Use live CleanerAtDoor prices |
| LB7 | Real photos of team and of completed jobs (half-day shoot or job uploads) | Team profiles, before/after and job gallery must show real people and real work | Those sections stay hidden; hero/service/hub imagery uses free stock for people and AI-generated or stock images for non-people scenes (owner rule) |
| LB8 | Insurance details (insurer, cover amount) and police-check process wording | About and guarantee pages state these as facts | Omit the figures; say only what is verified |

## Requirements

### Functional

**Site structure and URLs**

- FR1: The site uses one URL scheme: lowercase, hyphenated, no dates, trailing slash. Pages: `/`, `/services/`, `/services/{service}/`, `/{city}/{service}/`, `/locations/`, `/locations/{hub}/`, `/locations/{suburb}/`, `/pricing/`, `/house-cleaning-prices-{city}/`, `/specials/`, `/services/additional-services/`, `/{service}-checklist/`, `/book-now/`, `/blog/{post}/`, `/best-cleaning-company-{city}/`, `/reviews/`, `/guarantee/`, `/about/`, `/team/`, `/team/{name}/`, `/careers/`, `/faq/`, `/contact/`, `/commercial-cleaning/`, `/privacy/`, `/terms/`, `/refund-policy/`.
- FR2: Any URL carrying UTM or other tracking parameters has a canonical tag pointing to the clean URL.
- FR3: Each keyword cluster in `docs/research/illawarra-keywords.md` maps to exactly one URL; a build check fails if two pages declare the same primary keyword.
- FR4: Hubs are Shellharbour (Shellharbour City LGA), Kiama (Kiama Municipality), Dapto (Wollongong LGA localities with postcode 2530) and Wollongong (rest of Wollongong LGA). The Shellharbour village locality uses `/locations/shellharbour-village/`.

**Rules for every page**

- FR5: Every indexable page has a title of 60 characters or fewer using `{Service} {Place} | From $X | Shellharbour Cleaning` (or the page-type pattern in the guideline), a meta description of 155 characters or fewer (proof + offer + action), exactly one H1 containing the service and place, and a canonical URL.
- FR6: The first 100 words of every service, hub and service-in-city page state the service, area, price-from and guarantee.
- FR7: Above the fold, every marketing page shows a tap-to-call phone link, a "See my price" button, the rating and review count (only when real reviews exist) and "police-checked and insured" (only once LB8 is verified).
- FR8: On viewports of 768px or less, a sticky bottom bar shows Call, Text and See my price, and hides while the on-screen keyboard is open.
- FR9: Every page below the homepage shows a breadcrumb and emits BreadcrumbList JSON-LD. Every page with an FAQ shows 4–8 questions and emits FAQPage JSON-LD. Every page ends with a final call-to-action section. The footer shows name, phone, service areas (and address once LB3 allows), ABN, and links to the services hub, the four hubs, pricing, reviews and guarantee.

**Services**

- FR10: The system publishes a service page only when the service is flagged `offered: true` in the service config. The launch set comes from the live CleanerAtDoor menu: regular cleaning, one-off cleaning, end of lease cleaning, deep cleaning, move-in cleaning, carpet steam cleaning, oven cleaning, window cleaning, office cleaning, NDIS cleaning (`ndis-cleaning-services`), aged care cleaning, Airbnb cleaning and additional services. Upholstery, mattress, rug, tile and grout, mould and post-construction cleaning stay `offered: false` until the owner confirms them.
- FR11: Each service page renders the guideline's 14 sections in order: answer-first intro with price-from, quote widget, who it's for, room-by-room checklist with a downloadable PDF, add-ons with prices, how it works (3 steps), before/after photos, guarantee terms, price table by bedrooms × bathrooms (where the service is priced that way), areas served (links to every hub and service-in-city page for that service), reviews mentioning the service, 8 FAQs, related services and posts, and a call to action. Length is 1,200–1,800 words. Schema is Service + Offer + FAQPage.
- FR12: The services hub groups services as home, end of lease, carpet, commercial and specialist (NDIS, aged care, Airbnb). Each service block shows the name, a one-line description, the price-from and a link. Length is 400–700 words.
- FR13: The additional-services page lists each extra (inside oven, inside fridge, interior windows, inside cabinets, additional room, housekeeping tasks, carpet steam per room, Airbnb linen) with its price and an "Add to my clean" link that opens `/book-now/` with that add-on preselected.
- FR14: The commercial hub `/commercial-cleaning/` links to office cleaning and any other commercial service flagged `offered: true`.

**Locations**

- FR15: The locations hub `/locations/` shows a map of the four hubs, the suburbs under each hub (each one a link to its suburb page or to the hub's quote tool prefilled with that suburb), and a postcode checker that answers "Do you clean in my suburb?" and links to the right hub.
- FR16: Each hub page renders the guideline's 14 city-page sections in order. It carries 900–1,500 words of content unique to that hub, LocalBusiness (HouseCleaning) JSON-LD with `areaServed`, and is the GBP landing URL.
- FR17: Service-in-city pages exist only for the combinations in `illawarra-keywords.md` §0 and §3. At launch these are end of lease × all four hubs, carpet steam × Shellharbour and Wollongong, office cleaning × Wollongong, NDIS cleaning × Wollongong, and Airbnb × Kiama. Upholstery/couch cleaning × Wollongong is added if the owner confirms the service (LB5); it is Ahrefs KD 0 with >100 searches a month. Each has 800–1,200 words with local price examples, suburbs covered, local reviews for that service, the local team and local FAQs. A build check fails if any paragraph of 25 words or more appears on two service-in-city pages.
- FR18: A suburb page is generated only when `isPublishable(suburb)` returns true: three or more unique facts from {≥2 real reviews naming the suburb, ≥3 completed jobs, a named cleaner covering it, ≥2 OpenStreetMap features with element IDs, a cited local housing/rental data point}. Unpublished suburbs have no route and no sitemap entry. Suburb pages use the H1 "Cleaners in {Suburb} {Postcode}", are 500–900 words, list 6–12 nearby suburbs with distances, and link to their hub.
- FR19: Every suburb record stores its postcode and LGA confirmed from Nominatim, with a `postcodeSource`. Every local-feature sentence traces to a stored OSM element ID.

**Pricing and booking**

- FR20: One pricing module is the only source of every price on the site. It holds the live CleanerAtDoor prices: regular cleaning $60.50/hr incl GST with a $121 minimum covering 2 hours; deep cleaning from $181.50, fixed by bedrooms × bathrooms at 1.5× the regular rate; end of lease $190–$410 by bedrooms × bathrooms; NDIS $55/hr GST-free (self-managed plans); aged care from $121; windows $25 per standard window with a $100 minimum and $35 per upper-storey outside pane; Airbnb from $121 plus $30 linen per bedroom and a $50 urgent surcharge outside 9am–9pm; carpet steam from $50 per room; inside oven $63.25 (included in deep cleans); inside fridge $55.
- FR21: The quote card takes postcode or suburb, bedrooms (1–6), bathrooms (1–4), service, frequency and add-ons, and shows the GST-inclusive price instantly, before asking for any personal details. A postcode outside the service area shows the hubs served and an enquiry option instead of a price.
- FR22: `/pricing/` shows a calculator, price tables for each service, what affects the price, the recurring-visit policy as published (no weekly or fortnightly discount), what's included, the fine print (24-hour cancellation fee of 50%, pay upfront or after the clean, no call-out fee, no travel loading), an FAQ, a visible "Prices checked {month year}" date, and Offer/PriceSpecification JSON-LD.
- FR23: `/book-now/` runs three steps: (1) postcode, bedrooms, bathrooms, service, frequency and add-ons, with the price shown; (2) a date and time window drawn from real availability; (3) name, mobile, email, address and access notes. It shows the guarantee and "pay upfront or after the clean" throughout. URL query parameters can prefill the service, suburb and add-ons.
- FR24: A submitted booking is stored in the database with status `requested`. The customer gets an email and SMS confirmation and the operations inbox gets a notification. The thank-you page is `noindex`.
- FR25: The booking form is protected by Cloudflare Turnstile and server-side validation; invalid input returns field-level messages that explain the fix (e.g. "Enter an Illawarra postcode, like 2529").

**Trust and company pages**

- FR26: `/reviews/` lists only reviews stored with a source (Google, direct with consent), filterable by hub, suburb and service, and links to the Google Business Profile. Aggregate rating appears in schema and on pages only when the configured rating matches the GBP and comes from 5 or more reviews.
- FR27: Review blocks on other pages draw from the same store, filtered by hub, suburb or service, and are hidden entirely when there are no matching real reviews. They never fall back to reviews from other regions.
- FR28: `/guarantee/` states in plain English the published fix-it guarantee: report within 24 hours with photos; reply within 48 hours; free re-clean of those areas; full refund within 15 days if still unhappy. It also covers what's covered, the time limit, how to claim, and how end of lease re-cleans work with agents.
- FR29: `/about/` shows the business story, ABN, insurance details and police-check process (only verified facts, LB8) and any awards or media mentions that exist.
- FR30: `/team/` and `/team/{name}/` show each cleaner who has given consent: photo, first name, years of experience, hubs covered and specialty. A profile page exists only for cleaners with consent and a photo.
- FR31: `/careers/` lists open roles by hub with pay, the application process and JobPosting JSON-LD, and an application form whose submissions are stored in the database.
- FR32: `/faq/` groups questions by booking, pricing, products, safety and cancellations. `/contact/` shows phone, text, email, a contact form, hours (9:00 AM–9:00 PM, 7 days, unless the owner changes them) and the service area.
- FR33: `/specials/` lists only current, honest offers with terms and no countdown timers, each linked to its service page and to `/book-now/` with the offer applied. When there are no offers the page says so and is excluded from the sitemap.

**Content and AI search**

- FR34: Printable checklist pages exist for end of lease, deep clean and move-in, each with a downloadable PDF and links to its service page.
- FR35: City price guides `/house-cleaning-prices-{city}/` exist for Wollongong (covering Dapto as a section), Shellharbour and Kiama. They show price ranges by home size, hourly vs flat rate, end of lease costs, how to save, and marketplace price ranges cited with source and date. The year in the title comes from config.
- FR36: Comparison pages `/best-cleaning-company-wollongong/` and `/best-cleaning-company-shellharbour/` give honest criteria for choosing a cleaner, with a comparison table of provider types (marketplace, franchise, local business) and where Shellharbour Cleaning fits, without disparaging named competitors.
- FR37: The blog supports posts with a 40–60-word answer at the top, steps, a "When to call a pro" box linking to one service page, an FAQ, a named author with real experience, 900–1,600 words, Article JSON-LD, and links to one service page and two related posts. Post URLs contain no dates.
- FR38: Every service, hub, pricing, guide and checklist page uses question-phrased H2s where the query is a question, opens each section with a 1–2 sentence direct answer containing the figure, and presents prices, inclusions and comparisons as HTML tables or lists.
- FR39: The site publishes `robots.txt` (allowing Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot and Google-Extended; disallowing portal and thank-you paths), `sitemap.xml` (indexable pages only, with lastmod) and `llms.txt` (hubs, services, pricing, guarantee, checklists, each with a one-line answer).
- FR40: The site emits Organization and WebSite JSON-LD on every page. Organization has a stable `@id`, `name`, `description`, `logo`, `foundingDate` (once supplied), `knowsAbout`, and `sameAs` populated only from configured real profile URLs (Google Business Profile, LinkedIn, YouTube, Facebook, Instagram, directory profiles). A Person JSON-LD block for the founder/manager (name, role, `sameAs` LinkedIn) appears on `/about/` and `/facts/` once the owner supplies those details. The site notifies IndexNow when pages are published or changed.

**AI visibility (from the AI Visibility Checklist 2026 supplied by the owner)**

- FR52: A `/facts/` page lists the essential, verifiable facts about the business in a scannable list and table: legal and trading name, ABN, what we do, services with price-from, who we serve, service areas (four hubs with links), hours, founding date, guarantee terms, booking and payment options, contact details, and official profiles. It carries Organization + LocalBusiness JSON-LD and a visible "Last updated" date. Every fact comes from `config/site.ts`, so the page never disagrees with the rest of the site.
- FR53: Additional citable content types: a cleaning glossary `/cleaning-glossary/` (bond clean, vacate clean, deep clean, steam cleaning, NDIS self-managed and similar terms, each with a one-sentence definition and a link to the relevant service); an Illawarra cleaning price statistics page `/illawarra-cleaning-prices-statistics/` built from our own published prices, booking data once it exists, and cited marketplace ranges with source and date; and "X vs Y" comparison pages (`/end-of-lease-vs-deep-cleaning/`, `/local-cleaner-vs-marketplace/`, `/regular-vs-one-off-cleaning/`) with a comparison table and an answer in the first 2–4 sentences.
- FR54: Every article, guide, checklist, comparison, statistics, glossary, facts, service and hub page shows a visible "Last updated {date}" and emits matching `dateModified` (plus `datePublished` and `author` on articles). Dates come from content metadata, not from build time, so a rebuild does not fake freshness.
- FR55: Article, guide and comparison pages open with a direct 2–4 sentence answer followed by a TL;DR box of 3 bullets, end with an FAQ, and include at least one hard number (price, time, count) and, where available, a quote from a named person with their role (e.g. our lead cleaner with years of experience). Vague claims ("many customers prefer") are not allowed; the banned-phrase check includes "many customers", "many people prefer", "studies show" without a source.

**Customer, cleaner and admin apps (full parity, `my.` subdomain)**

- FR41: Customers sign in at `my.{domain}` with an email magic link or Google. Sessions use httpOnly, Secure, SameSite cookies. All `my.` pages are `noindex` and disallowed in robots.txt.
- FR42: Signed-in customers can see upcoming and past bookings, reschedule or cancel (applying the 50% fee inside 24 hours), manage addresses, rebook a past clean, and download a GST invoice showing the ABN.
- FR43: Customers can pay by card upfront or after the clean via Stripe. The booking records the payment status, and refunds under the guarantee are issued through Stripe.
- FR44: Cleaners sign in to see assigned jobs with address, access notes and the checklist for that service. They can mark checklist items done, upload before/after photos (tagged with the customer's photo-use consent) and see their earnings by period.
- FR45: Admins can view and filter all bookings, confirm or decline requests, assign cleaners, set availability (cleaner rosters and blocked dates that drive the booking calendar), and manage services and prices through the pricing config.
- FR46: Admins can add or import reviews with their source and moderate them. Two hours after a booking is marked complete, the customer gets an SMS review request with the GBP review link, sent at most once per booking and only with SMS consent.
- FR47: Completed-job counts per suburb, cleaner coverage and stored reviews feed `isPublishable()`, so suburb pages appear automatically when they qualify and are flagged for human review before first publish.
- FR48: Admins can approve consented before/after photos from cleaner uploads for the public gallery on service and hub pages.

**Measurement**

- FR49: The site records these analytics events: `call_click`, `text_click`, `quote_started`, `price_shown`, `booking_step_{n}`, `booking_submitted`, `contact_submitted` and `careers_applied`. Each carries the page type and hub. Non-essential analytics wait for consent.
- FR50: Google Search Console and Bing Webmaster Tools are verified, sitemaps are submitted, and GBP landing URLs carry UTM parameters (`utm_source=gbp&utm_medium=organic&utm_campaign={hub}`).

**Imagery**

- FR51: Every image is registered in an image manifest with its source type: `stock-people`, `stock-scene`, `ai-scene`, `real-team` or `real-job`, plus credit/licence or AI tool and date. Images showing people must be `stock-people` (free, watermark-free, high-resolution stock with a commercial licence) or `real-team`/`real-job`, never AI-generated. Team, before/after, job-gallery and "jobs done nearby" slots accept only `real-team`/`real-job` images and are hidden when none exist. Stock and AI images are never captioned as our team or our work. A build check enforces these slot rules.

### Non Functional

- NFR1: Performance budget on a mid-range phone over 4G (lab and CrUX field data): LCP under 2.0s, CLS under 0.05, INP under 200ms. JavaScript under 150KB gzipped on marketing pages (Next.js 16 + React 19 framework baseline is ≈130KB; our own client code stays under 25KB) and under 180KB on `/book-now/`. Hero image 120KB or less (AVIF/WebP). Two font families × two weights, self-hosted.
- NFR2: Marketing pages are statically generated at build time and served from Cloudflare's edge. All indexable content is in the server-rendered HTML; no indexable copy depends on client JavaScript.
- NFR3: Accessibility conforms to WCAG 2.2 AA: contrast of 4.5:1 for body text, targets of at least 24×24px (48px on the sticky bar and steppers), visible focus, labels above fields, keyboard-operable quote card and calendar, and `prefers-reduced-motion` respected.
- NFR4: Lighthouse CI on every pull request enforces Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95 and SEO = 100 on the homepage, a service page, a hub page and `/book-now/`. axe-core reports zero serious or critical violations.
- NFR5: Security: Supabase service-role keys and Stripe secret keys exist only in server-side Worker secrets, never in client bundles. Row-level security is on for every table. No JWT or session token is stored in `localStorage` or `sessionStorage`. CSP, HSTS and Referrer-Policy headers are set. Turnstile protects every public form.
- NFR6: Privacy: complies with the Australian Privacy Act 1988 and APPs. The privacy policy covers collection, use, SMS and email marketing consent (unticked by default, separate from booking consent) and photo consent. Customer data is stored in an Australian (Sydney) region where the provider offers one.
- NFR7: Pricing complies with ACCC single-price rules: every displayed price is GST-inclusive except NDIS, which is labelled GST-free.
- NFR8: Content integrity: a build check fails on any review without a source, any suburb fact without provenance, any `aggregateRating` when the configured rating is null, any emoji in source or copy, and any banned phrase from the no-ai-slop vocabulary list.
- NFR9: NAP consistency: name, phone, email and service area (and address, if published) come from one config module; a build check fails if any rendered page contains a different phone number or the strings "Munno Para" or "Cleaner at Door".
- NFR10: Availability target of 99.9% for marketing pages and 99.5% for booking and portal APIs. Booking submissions that fail to write are retried and reported by an ops alert email.
- NFR11: Database backups run daily with 7-day point-in-time recovery (Supabase Pro or equivalent).
- NFR12: Observability: Worker errors and API failures are logged with request IDs (Cloudflare Workers Logs plus an error tracker such as Sentry). Booking failures and payment webhooks raise alerts.
- NFR13: Cost: aim for under AUD $100/month at launch traffic: Cloudflare Workers paid plan, Supabase Pro, SMS pay-as-you-go, Stripe per-transaction.
- NFR14: Design-system discipline: colours, fonts, radii, shadows and spacing come only from the tokens defined in `docs/research/ui-components.md` §2. Components taken from 21st.dev are re-skinned to those tokens, and their licences are recorded.
- NFR15: Images: every image has alt text describing the task and place, each image is used visibly on only one page, and every page has its own OG image (port of CleanerAtDoor `check-visible-image-uniqueness.mjs`).
- NFR16: Internal linking follows the guideline: service page → every hub and service-in-city page for that service; hub → all its services and suburbs plus the other hubs; suburb → its hub and 6–12 nearby suburbs; blog post → one service page and two related posts; footer → services hub, hubs, pricing, reviews and guarantee. A link checker fails the build on any broken internal link or orphan indexable page.
- NFR17: Copy is Australian English, sentence case, with no rhetorical-question openers and no sentence that would read unchanged on a competitor's site.
- NFR18: Freshness: price-guide titles take the year from config, and a reminder task (documented in the ops runbook) updates it every January.
- NFR19: Data retention: bookings, payments and invoices are kept for 5 years (ATO record-keeping). Job photos without marketing consent are deleted after 24 months. Unsuccessful job applications are deleted after 12 months. Customers can request account deletion, which removes personal data except records the law requires keeping.
- NFR20: Capacity: the booking and availability APIs handle 50 concurrent users with p95 latency under 500ms. Marketing pages are edge-cached, so traffic spikes don't reach the origin.

## User Interface Design Goals

### Overall UX Vision

A calm, photo-led, coastal site that feels like it was made by people who clean Illawarra homes. The one memorable interaction is the price: three taps and a real number appears, easing to its new value as you change inputs. Everything around it is real: our cleaners, before/after shots from local jobs, named suburbs, plain-English guarantee terms. The page is more engaging than the reference mock because there is more to see (real photos, before/after sliders, a room-by-room "what's included" panel with photos, a map of the areas we clean). Visual spectacle (shaders, glow, stat tiles) is not the source.

### Key Interaction Paradigms

- Price-first quote card: suburb, bedrooms, bathrooms, service, frequency → instant price → date → contact.
- Three ways in from any scroll position: Call, Text, See my price (sticky bar on mobile, header on desktop).
- Drag-to-compare before/after images on service and hub pages.
- Room-by-room "what's included": the full list is always visible, and hovering or tapping a room swaps the photo.
- Filter-in-place lists: reviews by hub, suburb and service; areas by hub; postcode checker with an instant answer.
- Account dashboards (customer, cleaner, admin) with simple list → detail views and clear status chips.

### Core Screens and Views

- Homepage (Illawarra-level, links to all four hubs)
- Services hub, service page template, additional services, commercial hub
- Locations hub with map and postcode checker
- Hub (city) page template — Shellharbour, Kiama, Dapto, Wollongong
- Service-in-city page template
- Suburb page template (gated)
- Pricing page with calculator
- Book now (3-step flow) and booking confirmation
- Reviews, guarantee, about, team list and profile, careers, FAQ, contact, specials
- Checklist pages, city price guides, comparison pages, blog index and post
- Customer portal: sign in, bookings list, booking detail (reschedule, cancel, pay, invoice), addresses
- Cleaner portal: today's jobs, job detail with checklist and photo upload, earnings
- Admin: bookings board, booking detail with assignment, availability calendar, reviews, photos, suburb facts

### Accessibility: WCAG AA

WCAG 2.2 AA, with body type at 17–18px on mobile. Older and NDIS customers are a core audience, so legibility is a product requirement, not a nice-to-have.

### Branding

- Name: Shellharbour Cleaning. The voice is direct, specific and Australian without slang filler. Every claim is checkable.
- Visual direction "Escarpment to shore": `--deep-water #0B3B4A`, `--ink #14232A`, `--sea-glass #DCEFEA`, `--sand #F5EDE1`, `--escarpment #2F6B4F`, `--coral #C2482A` (primary CTA only, white text; adjusted from #E8603C after an axe contrast failure), `--paper #FFFFFF`, `--alert #B3261E`. Type: Fraunces (display) + Figtree (body).
- Must not resemble CleanerAtDoor (ink/orange/teal, Plus Jakarta Sans + Inter) or the reference mock `docs/cleaning-website-design.html` (eucalypt/lemon).
- Component sources: 21st.dev components mapped in `docs/research/ui-components.md` §3, re-skinned to tokens. Shader, WebGL and animated hero components are excluded.
- Imagery (owner rule, 2026-11-19): people shown in hero, service and hub imagery use free, high-quality, watermark-free stock photos (Unsplash, Pexels, Pixabay) for realism and trust. Non-people cleaning images (rooms, surfaces, products, kit) may be AI-generated or stock. Team profiles, before/after pairs and the job gallery use real photos only (LB7), because they present real people and real work. Every image source is recorded in `public/images/CREDITS.md`. No AI-generated people.
- **Assumption flagged:** the palette and fonts are a recommendation for the UX Expert to validate with the owner.

### Target Device and Platforms: Web Responsive

Mobile-first responsive web (most local service searches happen on phones). Desktop layouts at 1160px max content width. The portals are responsive web, not native apps.

## Technical Assumptions

### Repository Structure: Monorepo

A single repository (`github.com/OmarK190/Shellharbour-cleaning`) holding one Next.js application. The application serves both the marketing host (`{domain}`) and the app host (`my.{domain}`) via host-based routing, plus `docs/`, `scripts/` (QA checks, suburb pipeline) and `supabase/` (migrations, seed). Rationale: one deployable, one design system, shared pricing and config modules. No package split is needed at this size.

### Service Architecture

**Monolith on the edge, with a managed backend.**

- Next.js (current stable App Router release, ≥ 15) with TypeScript, deployed to Cloudflare Workers through the OpenNext Cloudflare adapter. Marketing routes are statically generated (SSG) and cached at the edge. Booking, portal and webhook routes run as Worker route handlers.
- Host routing: middleware maps `my.{domain}` to the `(app)` route group and sends `X-Robots-Tag: noindex` on it. The `(marketing)` route group serves the apex domain.
- Database and auth: **Supabase** (Postgres + Auth + Storage, Sydney region). Rationale: CleanerAtDoor's code already planned Supabase Auth (`lib/session.ts` TODO). Row-level security fits the three roles (customer, cleaner, admin). Storage holds job photos. Alternative considered: Cloudflare D1 + an auth library, which is cheaper but means hand-building auth, RLS-equivalent policies and file storage. The Architect may revisit this, but must keep the role model and the httpOnly-cookie rule.
- Payments: Stripe (Payment Element; pay upfront or charge the saved card after the clean), with webhooks to a Worker route.
- Messaging: transactional email (Resend or Cloudflare Email Service) and SMS (an AU-capable provider such as Twilio or MessageMedia) for booking confirmations and review requests.
- Bot protection: Cloudflare Turnstile.
- Content: services, hubs, suburbs, FAQs and blog posts live as typed TypeScript/MDX data in the repo (versioned, reviewable, statically built). Dynamic facts (job counts, reviews, cleaner coverage) are read from Supabase at build time and on scheduled rebuilds.

### Testing Requirements

**Full testing pyramid.**

- Unit (Vitest): pricing module golden values ($121 minimum; 3 bed 2 bath regular = $211.75; deep = 1.5× regular; end of lease grid endpoints $190 and $410; NDIS $55 GST-free; add-ons), `isPublishable()`, schema builders, title and meta length rules, UTM canonical stripping.
- Integration: booking API against a local Supabase (`supabase start`), Stripe test mode with webhook replay, RLS policy tests for each role.
- E2E (Playwright): quote → book → confirmation; out-of-area postcode; customer sign in → reschedule inside and outside 24 hours; cleaner completes a checklist and uploads a photo; admin assigns a cleaner.
- Build-time content checks ported from CleanerAtDoor and extended: internal links and orphans, price consistency against the pricing module, image uniqueness and alt text, redirects, no emoji, no banned phrases, NAP check, duplicate-paragraph check across service-in-city pages, one-URL-per-keyword check, schema validation (JSON-LD parse plus required properties per type), title and meta length.
- Lighthouse CI and axe on every PR (NFR4).
- Manual: a pre-launch checklist (Story 7.4) and a 10% human spot-check of OSM cues before suburb publish.

### Additional Technical Assumptions and Requests

- Node.js LTS, npm, ESLint, Prettier, TypeScript strict mode.
- Tailwind CSS with shadcn/ui conventions. 21st.dev components are installed via their shadcn CLI command or "Copy prompt", then re-skinned. The free tier allows 2 installs per day, so plan installs per story or buy the paid plan.
- `@number-flow/react` for the price animation only.
- Static map images for the areas map (no heavy map JS above the fold); an interactive map loads on demand.
- GitHub Actions CI runs lint, typecheck, unit, build, content checks, Lighthouse CI and Playwright against a Cloudflare preview deployment. Production deploys come from `main` after approval. Nobody pushes to `main` directly.
- Environments: local (Supabase CLI), preview (per-PR Workers preview + Supabase branch or staging project), production.
- Secrets live in Cloudflare Worker secrets and GitHub Actions secrets only.
- Reused from `J:\cleanerAtDoor` (adapt, do not copy design): pricing function shapes (`lib/data/flatRates.ts`, `lib/pricing.ts`, updated to live prices), `pageMeta()` (`lib/seo.ts`), check scripts (`scripts/check-*.mjs`), suburb paragraph pipeline (`scripts/generate-suburb-paragraphs.mjs`, `local-suburb-seo` skill scripts), the `BUSINESS_RATING = null` and `BUSINESS_PROFILES` patterns (`config/site.ts`).
- Known discrepancy: the local CleanerAtDoor repo prices regular cleaning at $69.50/hr, while the live site shows $60.50/hr. This PRD uses the live figures (LB6).
- Keyword volumes are unavailable (Ahrefs API returns "Insufficient plan"). Re-rank clusters once a keyword tool with API access is connected.
- Area of high complexity for the Architect: availability and scheduling (rosters, travel between hubs, time windows) feeding the booking calendar; and payment-after-clean flows (saved card, off-session charge, failed-charge handling).

## Epic List

1. **Epic 1: Foundation, Design System & Homepage** — Set up the repo, CI, Cloudflare deploy, config, tokens, layout and SEO foundations, and ship a live homepage on staging.
2. **Epic 2: Pricing Engine & Book Now** — Make every price come from one tested module, show it instantly in the quote card and on `/pricing/`, and take real bookings into the database.
3. **Epic 3: Service Pages** — Publish the services hub, every offered service page, additional services and the commercial hub to the guideline spec.
4. **Epic 4: Locations — Hubs & Service-in-City** — Publish the locations hub, the four GBP landing hub pages and the gated service-in-city pages.
5. **Epic 5: Trust & Company Pages** — Publish reviews, guarantee, about, team, careers, FAQ, contact, specials and legal pages on real data.
6. **Epic 6: Content & AI Search** — Publish checklists, city price guides, comparison pages and the blog, and complete the AI-search layer (llms.txt, crawler rules, entity data, IndexNow).
7. **Epic 7: Launch & Local Presence** — Clear the launch blockers, harden quality gates, go live, and connect the GBP, Search Console and citations.
8. **Epic 8: Customer Portal** — Give customers real accounts on `my.` to manage, pay for and rebook cleans.
9. **Epic 9: Cleaner Portal & Admin** — Give cleaners and operations real tools for jobs, availability, photos and reviews, including the review-request loop.
10. **Epic 10: Suburb Pages & Growth Loop** — Generate verified suburb pages automatically as real jobs, reviews and local data accumulate, and track AI visibility monthly.

Rationale: the order follows the guideline's launch sequence (homepage, pricing and booking → service pages → city pages → service-in-city → checklists and price guides → blog), with public launch at Epic 7. Portals (Epics 8–9) come after launch so ranking pages ship first. Until Epic 9 lands, bookings are handled from email notifications and the Supabase dashboard. Suburb pages come last (Epic 10) because the gate depends on real jobs and reviews, which only exist once the business is operating. Analytics, performance and accessibility gates start in Epic 1 rather than at the end.

---

## Epic 1: Foundation, Design System & Homepage

Stand up the repository, CI/CD, Cloudflare deployment, central config, design tokens, layout shell and SEO plumbing that every later page reuses, and ship a real homepage to staging. Quality gates (Lighthouse, axe, content checks) and analytics run from day one, so no later epic has to retrofit them.

### Story 1.1: Repository, CI and Cloudflare staging deploy

As the owner,
I want the project scaffolded and deploying automatically to a staging URL,
so that every change is visible and tested before it reaches customers.

#### Acceptance Criteria
1: The repo contains a Next.js App Router + TypeScript (strict) + Tailwind + shadcn/ui app, with ESLint, Prettier and Vitest configured.
2: The app deploys to Cloudflare Workers via the OpenNext adapter. Each PR gets a preview URL and `main` deploys to a staging environment.
3: GitHub Actions runs lint, typecheck, unit tests and build on every PR; a failing step blocks merge.
4: `GET /api/health` returns `200 {"status":"ok","commit":"<sha>"}`.
5: Staging and preview responses send `X-Robots-Tag: noindex`, and staging `robots.txt` disallows all crawlers.
6: `README.md` documents local setup, environment variables and deploy flow.
7: Marketing routes are statically generated; a check confirms the homepage HTML contains its H1 and body copy without JavaScript (NFR2).
8: Worker errors are captured with request IDs in Cloudflare Workers Logs and an error tracker (NFR12).

### Story 1.2: Central site config and launch-blocker guard

As the owner,
I want every business fact to live in one config file with launch blockers flagged,
so that NAP stays consistent and the site cannot go live with missing facts.

#### Acceptance Criteria
1: `config/site.ts` exports name "Shellharbour Cleaning", ABN `81 480 225 391`, phone `1300 381 988`, email, domain, hours (9:00 AM–9:00 PM, 7 days), service hubs, `address: null` (LB3), `BUSINESS_RATING: null` and `BUSINESS_PROFILES: []`.
2: Values for LB1–LB8 that are unresolved are marked with a typed `LaunchBlocker` value; `npm run check:launch` lists them.
3: A production build (`DEPLOY_ENV=production`) fails while any launch blocker is unresolved; staging builds warn only.
4: A unit test asserts no exported value contains "Munno Para", "Cleaner at Door" or "cleaneratdoor".

### Story 1.3: Design tokens, fonts and layout shell

As a visitor,
I want a fast, readable, consistent layout on every page,
so that I can find the price, phone and services without hunting.

#### Acceptance Criteria
1: Tokens from `docs/research/ui-components.md` §2 are defined once as CSS variables and Tailwind theme values; a lint rule or check fails on raw hex colours in components.
2: Fraunces (600/700) and Figtree (400/600) are self-hosted via `next/font` with `display: swap`.
3: Header shows logo, at most 5 nav items (Services, Locations, Pricing, Reviews, About), a `tel:` phone link and a coral "See my price" button; no utility bar above it.
4: Footer shows NAP from config, ABN, links to services hub, four hubs, pricing, reviews, guarantee, legal pages.
5: Sticky mobile bar (≤ 768px) shows Call, Text (`sms:`), See my price; each target ≥ 48px; it hides when an input is focused.
6: Layout passes axe with zero serious/critical issues and keyboard navigation reaches every control.

### Story 1.4: SEO plumbing — metadata, canonicals, robots, sitemap, base schema

As a search engine or AI crawler,
I want every page to declare clean metadata and structured data,
so that I can index and cite the right URL.

#### Acceptance Criteria
1: `pageMeta({title, description, path, image})` returns title, description, canonical (trailing slash, query stripped), OG and Twitter tags. It is ported from CleanerAtDoor `lib/seo.ts` and its brand suffix logic.
2: Unit tests assert title ≤ 60 and description ≤ 155 characters for every registered page; violations fail the build.
3: `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended; disallows `/book-now/thank-you/` and the `my.` host; links the sitemap.
4: `sitemap.xml` lists only indexable routes with `lastmod`.
5: Every page emits Organization (stable `@id`) and WebSite JSON-LD; pages below home emit BreadcrumbList via a shared `<Breadcrumb>` component.
6: A schema check parses every JSON-LD block in the build output and fails on invalid JSON or missing required properties.

### Story 1.5: Quality gates — Lighthouse CI, axe, content checks, analytics baseline

As the owner,
I want performance, accessibility and content rules enforced automatically,
so that the site never quietly regresses.

#### Acceptance Criteria
1: Lighthouse CI runs on the PR preview for `/` with budgets from NFR1/NFR4 and fails the PR on breach.
2: Ported checks run in CI: internal links + orphans (NFR16), no emoji, banned phrases (no-ai-slop list, NFR8, NFR17), NAP strings (NFR9), image alt text + uniqueness (NFR15), image manifest slot rules (FR51), one primary keyword per URL (FR3), duplicate ≥ 25-word paragraphs across sibling templates, and token-only colours (NFR14).
3: Analytics (GA4 + Cloudflare Web Analytics) loads after consent; `call_click`, `text_click` and `quote_started` fire from header, sticky bar and hero (FR49).
4: A consent banner offers accept/reject with reject as easy as accept; no non-essential script loads before consent.

### Story 1.6: Homepage v1

As a visitor searching "house cleaning illawarra" or the brand,
I want a homepage that tells me what is cleaned, where, and from what price,
so that I can decide to get a price within seconds.

#### Acceptance Criteria
1: Title "House Cleaning Illawarra | Police-Checked Cleaners | Shellharbour Cleaning" or a ≤ 60-character variant; H1 names house cleaning and the Illawarra (Shellharbour, Kiama, Dapto, Wollongong).
2: Sections in guideline order: hero (H1, price-from, trust row), trust strip (≤ 4 real facts), services with "from $" and links, how it works (3 steps), what's included (room list visible + photo panel), recent reviews (hidden when none), guarantee summary + link, areas we clean (four hub links + map image), cleaners (hidden until real team photos), FAQ (6–8, FAQPage schema), final CTA.
3: 900–1,300 words; first 100 words state service, area, price-from ($121) and guarantee.
4: Links to every offered service page, all four hubs and `/pricing/` (pages not yet built may 404 on staging but must exist before production; link check is enforced at launch).
5: JSON-LD: Organization + LocalBusiness (HouseCleaning) with `areaServed` (four hubs) + FAQPage.
6: Hero image is `stock-people` or `ai-scene` per FR51, ≤ 120KB, `priority`; Lighthouse budgets pass.
7: Static "See my price" CTA links to `/book-now/` (replaced by the live quote card in Story 2.2).

---

## Epic 2: Pricing Engine & Book Now

Make the price the hero of the site: one tested pricing module feeds the quote card, the pricing page and every "from $" figure, and visitors can complete a real booking that lands in the database with confirmations sent. Bookings are handled from notifications and the Supabase dashboard until Epic 9.

### Story 2.1: Pricing module with golden tests

As the owner,
I want all prices calculated in one place,
so that no page ever shows a price that disagrees with another.

#### Acceptance Criteria
1: `lib/pricing/` exports typed functions `quote({service, bedrooms, bathrooms, frequency, addOns})` returning integer cents for subtotal, add-ons, total, GST component, duration estimate and basis (`hourly` | `flat` | `range`).
2: Vitest golden tests pass: regular minimum $121.00; 3 bed 2 bath regular $211.75; deep = 1.5× regular for the same size, minimum $181.50; end of lease minimum $190 and maximum $410 at the configured grid endpoints; NDIS $55/hr with GST = 0; windows $25 each, $100 minimum; Airbnb linen $30/bedroom; oven add-on $63.25 and $0 when service is deep; fridge $55; carpet $50/room.
3: Bedrooms outside 1–6 or bathrooms outside 1–4 throw a typed error.
4: The end of lease grid (bedrooms × bathrooms) is config data marked LB6 until the owner confirms it.
5: `npm run check:prices` scans the build output and fails if any rendered "$" price is not derivable from the module.

### Story 2.2: Price-first quote card on the homepage

As a visitor,
I want to see my price after three taps,
so that I know the cost before giving any personal details.

#### Acceptance Criteria
1: The hero shows a quote card with suburb/postcode input, bedroom and bathroom steppers, service select, frequency segmented control and the live price (number-flow easing ~250ms, disabled under reduced motion).
2: The price appears without a network request (pricing module runs client-side) and matches the module for every combination (property test over the grid).
3: An Illawarra postcode not served, or a non-Illawarra postcode, shows "We clean Shellharbour, Kiama, Dapto and Wollongong" with hub links and an enquiry link, not a price.
4: "Choose a date" passes all inputs to `/book-now/` as query parameters.
5: `price_shown` fires once per session with service and hub.
6: Card is fully keyboard-operable, labelled, and works with JavaScript disabled by falling back to a link to `/pricing/`.

### Story 2.3: Pricing page

As a price-comparing visitor,
I want every price, rule and exclusion on one page,
so that I can trust there are no surprises.

#### Acceptance Criteria
1: `/pricing/` title ≤ 60 chars ("Cleaning Prices Illawarra | From $121 | Shellharbour Cleaning" or equivalent); H1 "Cleaning prices in the Illawarra".
2: Shows calculator (reusing the quote card), one HTML table per service, what affects the price, recurring-visit policy, what's included, fine print (FR22), FAQ (6–8), "Prices checked {month year}" from config.
3: Offer/PriceSpecification JSON-LD per service with `priceCurrency: AUD`.
4: All tables are server-rendered; key prices are visible in body copy, not only inside accordions.

### Story 2.4: Booking data model and API

As operations,
I want each booking stored with everything needed to do the job,
so that no request is lost.

#### Acceptance Criteria
1: Supabase migrations create `customers`, `addresses`, `bookings` (status enum: requested, confirmed, assigned, completed, cancelled), `booking_add_ons`, `services` (slug, offered), with RLS enabled and policies tested.
2: `POST /api/bookings` validates input with a shared schema, re-computes the price server-side with the pricing module (client price is ignored), verifies Turnstile, and stores the booking as `requested`.
3: On success the customer receives an email and SMS confirmation and ops receives an email; message failures are logged and retried without losing the booking.
4: Integration tests run against `supabase start` and cover success, invalid input, Turnstile failure and out-of-area postcode.
5: Service-role key is used only in the Worker; a test asserts it is absent from client bundles.
6: Daily backups with 7-day point-in-time recovery are enabled on the production project (NFR11); a failed booking write triggers an ops alert email (NFR10, NFR12).

### Story 2.5: Book Now flow

As a visitor ready to book,
I want a three-step booking flow,
so that I can book a clean in under 90 seconds on my phone.

#### Acceptance Criteria
1: `/book-now/` step 1 = postcode, bedrooms, bathrooms, service, frequency, add-ons, price; step 2 = date and time window; step 3 = name, mobile, email, address, access notes, separate unticked marketing consent.
2: Step 2 calendar disables dates with no availability (config-driven blocked dates and daily capacity until Epic 9 adds rosters).
3: Query parameters prefill service, suburb, add-ons and offer codes; progress persists when going back.
4: The guarantee and "pay upfront or after the clean" show on every step; errors explain the fix.
5: Submission shows `/book-now/thank-you/` (noindex) with the booking reference.
6: Events `booking_step_1..3` and `booking_submitted` fire; Playwright E2E covers the happy path and out-of-area path on mobile viewport.
7: Lighthouse on `/book-now/` meets NFR1 (JS ≤ 150KB).

---

## Epic 3: Service Pages

Publish a dedicated, genuinely useful page for every service actually offered — the strongest local ranking factor — plus the services hub, extras and commercial hub, all wired into the booking flow.

### Story 3.1: Service data model and page template

As a content editor,
I want one template that renders the 14 guideline sections from typed data,
so that every service page meets the spec and stays consistent.

#### Acceptance Criteria
1: `content/services/{slug}.ts` holds title, meta, H1, intro, audiences, checklist by room, add-ons, steps, FAQs (8), related services/posts, `offered` flag and keyword cluster.
2: The template renders sections in FR11 order; sections with no real data (reviews, before/after) are omitted, not filled with placeholders.
3: Checklist renders as visible lists plus a generated printable PDF link.
4: JSON-LD: Service (provider = Organization `@id`, `areaServed` four hubs) + Offer (price-from) + FAQPage + BreadcrumbList.
5: A build check enforces 1,200–1,800 words and that "areas served" links every hub and every existing service-in-city page for that service.
6: Only `offered: true` services generate routes (FR10).

### Story 3.2: End of lease cleaning page

As a tenant moving out in the Illawarra,
I want to know exactly what a bond clean covers and costs,
so that I can get my bond back without surprises.

#### Acceptance Criteria
1: `/services/end-of-lease-cleaning/` title "End of Lease Cleaning Illawarra | Bond Back Guarantee | Shellharbour Cleaning" trimmed to ≤ 60 characters; H1 "End of lease cleaning".
2: Copy captures "bond cleaning" and "vacate cleaning"; price table by bedrooms × bathrooms from the pricing module ($190–$410).
3: FAQs include "What does an end of lease clean include?" and "How long does an end of lease clean take?" answered in the first sentence.
4: Links to `/end-of-lease-cleaning-checklist/` (or its future URL) and to every end of lease service-in-city page once built.
5: "Who it's for" covers tenants, landlords and property managers, with an agent-handover note.

### Story 3.3: Regular and one-off cleaning pages

As a householder,
I want to understand regular and one-off cleaning prices and scope,
so that I can choose how often to book.

#### Acceptance Criteria
1: `/services/regular-cleaning/` and `/services/one-off-cleaning/` published from the template with distinct intros, audiences and FAQs (duplicate-paragraph check passes between them).
2: Both state $60.50/hr incl GST, $121 minimum covering 2 hours, and the 3 bed 2 bath example $211.75.
3: Regular page explains weekly, fortnightly and monthly options and that no frequency discount is published.

### Story 3.4: Deep and move-in cleaning pages

As someone preparing a home for a fresh start,
I want deep and move-in cleaning explained with fixed prices,
so that I know what extra I get over a regular clean.

#### Acceptance Criteria
1: `/services/deep-cleaning/` (from $181.50, oven included) and `/services/move-in-cleaning/` published, if `offered: true` (LB5).
2: Each lists what it adds over a regular clean in a comparison table.
3: Move-in page targets West Dapto and Shell Cove new-build context only where stated as general area information, not as claims of jobs done.

### Story 3.5: Carpet, window and oven cleaning pages

As a customer with a specific cleaning job,
I want a page for that job with its own price,
so that I can book just what I need.

#### Acceptance Criteria
1: `/services/carpet-steam-cleaning/` (from $50/room), `/services/window-cleaning/` ($25/window, $100 minimum, $35 upper-storey outside), `/services/oven-cleaning/` ($63.25) published.
2: Price tables use the service's own unit (per room, per window), not bedrooms × bathrooms.
3: Window page notes upper-storey limits and what is included (frames, tracks, flyscreens) as published.

### Story 3.6: NDIS, aged care and Airbnb cleaning pages

As a participant, carer or host,
I want a page that answers my funding or turnover questions,
so that I can book with confidence.

#### Acceptance Criteria
1: `/services/ndis-cleaning-services/` states $55/hr GST-free for self-managed plans and answers "Does NDIS cover cleaning?" factually with a link to the NDIS source.
2: `/services/aged-care-cleaning/` (from $121) published.
3: `/services/airbnb-cleaning/` states from $121, $30 linen per bedroom, $50 urgent outside 9am–9pm, and a holiday-let turnover checklist.
4: No regulated claims (e.g. "NDIS registered") unless verified and recorded in config.

### Story 3.7: Services hub, additional services and commercial hub

As a visitor browsing,
I want to see every service, extra and commercial option in one place,
so that I can pick the right one fast.

#### Acceptance Criteria
1: `/services/` groups services per FR12, each block with name, one-liner, price-from and link; 400–700 words; uses the bento grid with real-or-allowed images per FR51.
2: `/services/additional-services/` lists every extra with price and "Add to my clean" deep link to `/book-now/?addon={slug}` (FR13).
3: `/commercial-cleaning/` links `/services/office-cleaning/` (published in this story from the template) and any other offered commercial service.
4: Header mega menu lists all published services.

---

## Epic 4: Locations — Hubs & Service-in-City

Publish the four hub pages that Google Business Profile listings link to, the locations hub with the postcode checker, and the gated service-in-city pages — each with content unique to its town.

### Story 4.1: Location data and verification pipeline

As the owner,
I want every hub and suburb record verified against open data,
so that no page states a wrong postcode or invented place.

#### Acceptance Criteria
1: `content/locations/` holds the four hubs and all suburbs from `docs/research/suburbs.md` with hub, postcode, LGA and centroid.
2: A script queries Nominatim (1 req/s, project User-Agent, cached) to confirm postcode, LGA and centroid; records `postcodeSource`; lists mismatches for human review.
3: Build fails if any suburb lacks `postcodeSource` or its hub contradicts its confirmed LGA/postcode rule (FR4).
4: `isPublishable(suburb)` is implemented and unit-tested against FR18's five fact types (data sources stubbed until Epic 9).

### Story 4.2: Locations hub and postcode checker

As a visitor,
I want to check whether you clean my suburb,
so that I don't waste time on a quote I can't book.

#### Acceptance Criteria
1: `/locations/` shows a static map image of the four hubs, hub sections listing their suburbs, and every suburb is a link (suburb page if published, else hub quote tool prefilled).
2: Postcode checker answers yes/no instantly and links the right hub or offers an enquiry.
3: Separators are commas, not middots; no unlinked place names.

### Story 4.3: Hub page template and Shellharbour hub

As a Shellharbour resident searching "cleaners shellharbour",
I want a page about cleaning in my area with local prices and suburbs,
so that I trust you actually work here.

#### Acceptance Criteria
1: The template renders FR16's 14 sections; title "Cleaners Shellharbour | House & End of Lease Cleaning | Shellharbour Cleaning" trimmed to ≤ 60 characters; H1 "House cleaning Shellharbour".
2: `/locations/shellharbour/` has 900–1,500 words unique to Shellharbour City (housing mix, Shell Cove marina growth, rental turnover — stated only from cited sources).
3: Quote tool prefilled with the hub; services in Shellharbour link to its service-in-city pages; all Shellharbour suburbs listed with links per FR15.
4: LocalBusiness (HouseCleaning) JSON-LD with `areaServed` = Shellharbour City and its suburbs; NAP + hours identical to config.
5: Local FAQs cover parking, keys and access, same-day availability.
6: Nearby hubs (Kiama, Dapto, Wollongong) linked.

### Story 4.4: Kiama, Dapto and Wollongong hubs

As a resident of Kiama, Dapto or Wollongong,
I want my own area page,
so that I see prices, suburbs and answers that fit where I live.

#### Acceptance Criteria
1: `/locations/kiama/`, `/locations/dapto/`, `/locations/wollongong/` published from the template, each 900–1,500 words.
2: Duplicate-paragraph check passes across all four hubs (no ≥ 25-word paragraph shared).
3: Kiama covers holiday-let turnover; Dapto covers the 2530 district and West Dapto new estates; Wollongong covers CBD units and university-semester moves — each angle as cited area context.
4: Wollongong page links Dapto as a nearby area and does not list 2530 suburbs (FR4).

### Story 4.5: Service-in-city template and end of lease × four hubs

As a tenant searching "end of lease cleaning wollongong",
I want a page for bond cleaning in my town,
so that I see local prices and local proof.

#### Acceptance Criteria
1: `/shellharbour/end-of-lease-cleaning/`, `/kiama/end-of-lease-cleaning/`, `/dapto/end-of-lease-cleaning/`, `/wollongong/end-of-lease-cleaning/` published, 800–1,200 words each, H1 "End of lease cleaning {Hub}".
2: Each has local price examples (from the pricing module), suburbs covered, local reviews for the service (hidden when none), local team (hidden when none), local FAQs.
3: Duplicate-paragraph check passes across the four pages and against `/services/end-of-lease-cleaning/`.
4: Each links up to its hub page and the service page, and across to the other three.

### Story 4.6: Carpet × Shellharbour/Wollongong and Airbnb × Kiama

As a customer searching "carpet cleaning wollongong" or a Kiama host,
I want a local page for that service,
so that I can book a local cleaner for it.

#### Acceptance Criteria
1: `/shellharbour/carpet-steam-cleaning/`, `/wollongong/carpet-steam-cleaning/`, `/wollongong/office-cleaning/`, `/wollongong/ndis-cleaning/` and `/kiama/airbnb-cleaning/` published with the Story 4.5 rules; `/wollongong/upholstery-cleaning/` added only if LB5 confirms the service.
2: A config matrix controls which combinations exist; adding a gated combination requires local price examples, ≥ 2 local reviews for the service and a local cleaner (FR17).
3: Sitemap and internal links update automatically from the matrix.

---

## Epic 5: Trust & Company Pages

Give visitors the proof they need — real reviews, plain-English guarantee, who we are, who cleans, and how to reach us — and give jobseekers a way in.

### Story 5.1: Reviews store and reviews page

As a cautious visitor,
I want to read real reviews by suburb and service,
so that I can judge you on what neighbours say.

#### Acceptance Criteria
1: Supabase `reviews` table with source (google | direct), source URL or consent record, rating, text, first name, suburb, hub, service, date, published flag.
2: `/reviews/` filters by hub, suburb and service, links to the GBP, and shows an honest empty state ("We're new to the Illawarra — read our reviews on Google as they come in") when there are none.
3: `aggregateRating` emits only when `BUSINESS_RATING` is set and count ≥ 5 (FR26); build check enforces it.
4: Shared `<Reviews filter>` component used on home, hubs and service pages hides itself when no match (FR27).

### Story 5.2: Guarantee and about pages

As a visitor deciding whether to trust you,
I want your guarantee and business details stated plainly,
so that I know what happens if something goes wrong.

#### Acceptance Criteria
1: `/guarantee/` states FR28 terms, how to claim (phone, email, photos within 24 hours), and the end of lease re-clean process with agents.
2: `/about/` shows story, ABN, police-check process and insurance details from config only when verified (LB8); unverified fields are omitted, not shown as TODO.
3: Both pages have FAQ + FAQPage schema and link to `/book-now/`.

### Story 5.3: Team pages

As a customer letting someone into my home,
I want to see who the cleaners are,
so that I feel safe booking.

#### Acceptance Criteria
1: `cleaners` data (Supabase) with consent flag, first name, `real-team` photo, years, hubs, specialty.
2: `/team/` lists consenting cleaners; `/team/{name}/` profile exists only with consent + photo (FR30); otherwise the routes are not generated and `/team/` is excluded from the sitemap when empty.
3: Hub pages show the cleaners covering that hub.

### Story 5.4: Careers page and applications

As a local cleaner looking for work,
I want to see open roles and apply online,
so that I can join the team.

#### Acceptance Criteria
1: `/careers/` lists roles by hub with pay, hours and process; each role emits JobPosting JSON-LD (`jobLocation` = hub, `baseSalary` when set, `validThrough`).
2: Application form (Turnstile, validation) stores to `cleaner_applications` and emails ops.
3: Expired roles drop out of the page and schema automatically.
4: `careers_applied` event fires.

### Story 5.6: Facts page

As an AI search engine or a cautious customer,
I want one page with the verified facts about the business,
so that I can describe and recommend it accurately.

#### Acceptance Criteria
1: `/facts/` renders FR52 fields from `config/site.ts` only; unresolved launch-blocker fields are omitted, never shown as placeholders.
2: Facts appear as a definition list plus a services/price-from table; first paragraph states what the business does, where, and from what price in 2–4 sentences.
3: Organization + LocalBusiness JSON-LD (and Person JSON-LD when founder details exist); visible "Last updated" date (FR54).
4: Linked from the footer and `/about/`; included in `llms.txt`.

### Story 5.5: FAQ, contact, specials and legal pages

As a visitor with a specific question,
I want FAQs, contact options and policies,
so that I can get answers or reach a person.

#### Acceptance Criteria
1: `/faq/` grouped by booking, pricing, products, safety, cancellations with FAQPage schema.
2: `/contact/` shows phone, text, email, hours, service area and a form (stored + emailed); `contact_submitted` fires.
3: `/specials/` renders offers from config with terms and links (FR33); empty state + sitemap exclusion when none.
4: `/privacy/`, `/terms/`, `/refund-policy/` published, adapted from CleanerAtDoor's terms to the new entity name and NSW, covering FR28 refund terms and NFR6 consent.

---

## Epic 6: Content & AI Search

Publish the pages that win informational and comparison searches and get quoted in AI answers, and finish the machine-readable layer.

### Story 6.1: Checklist pages

As a tenant or property manager,
I want a printable checklist,
so that I can see exactly what will be cleaned.

#### Acceptance Criteria
1: `/end-of-lease-cleaning-checklist/`, `/deep-cleaning-checklist/`, `/move-in-cleaning-checklist/` (if offered) published with room-by-room lists and a PDF download.
2: Each answers its autocomplete question ("What does an end of lease clean include?") in the first 60 words and links to its service page and `/book-now/`.
3: ItemList JSON-LD for the checklist items plus BreadcrumbList.

### Story 6.2: City price guides

As someone asking "how much does a cleaner cost",
I want local price ranges with honest comparisons,
so that I can budget before booking.

#### Acceptance Criteria
1: `/house-cleaning-prices-wollongong/` (with a Dapto section), `/house-cleaning-prices-shellharbour/`, `/house-cleaning-prices-kiama/` published.
2: Each shows ranges by home size, hourly vs flat, end of lease costs, how to save, and cited marketplace ranges (source + date) from `illawarra-keywords.md` §5.
3: Title year comes from config (NFR18); links to `/pricing/` and `/book-now/`.
4: Duplicate-paragraph check passes across the three guides.

### Story 6.3: Comparison pages

As a visitor comparing options,
I want an honest guide to choosing a cleaner in my area,
so that I can decide between a marketplace, a franchise and a local business.

#### Acceptance Criteria
1: `/best-cleaning-company-wollongong/` and `/best-cleaning-company-shellharbour/` published with selection criteria, a comparison table by provider type and where Shellharbour Cleaning fits (including where it may not be the best fit).
2: No named competitor is disparaged; any named fact is cited.
3: Answer-first summary of 40–60 words at the top.

### Story 6.4: Blog system and first four posts

As a reader with a cleaning problem,
I want clear how-to articles with a pro option,
so that I can fix it myself or book help.

#### Acceptance Criteria
1: MDX blog at `/blog/` and `/blog/{slug}/` with author profiles, Article JSON-LD, answer box (40–60 words), steps, "When to call a pro" box (one service link), FAQ, two related posts (FR37).
2: First four posts published (900–1,600 words each): "What does a bond clean include in NSW?", "Does NDIS cover cleaning?", "How to clean glass shower doors", "How much does a cleaner cost in Wollongong?" — each assigned a unique keyword cluster.
3: Blog index lists posts by topic; no dates in URLs.

### Story 6.6: Glossary, statistics and X-vs-Y pages

As a reader comparing options or checking a term,
I want short, sourced definitions, local price figures and side-by-side comparisons,
so that I can decide quickly — and AI answers can quote them accurately.

#### Acceptance Criteria
1: `/cleaning-glossary/` with ≥ 20 terms, each a one-sentence definition linking to its service; DefinedTermSet JSON-LD.
2: `/illawarra-cleaning-prices-statistics/` with tables of our published prices by service and home size, cited marketplace ranges (source + date), and, once ≥ 30 completed bookings exist, anonymised averages from our own data; "Last updated" visible.
3: `/end-of-lease-vs-deep-cleaning/`, `/local-cleaner-vs-marketplace/`, `/regular-vs-one-off-cleaning/` each answer in the first 2–4 sentences, include a TL;DR, a comparison table and an FAQ (FR55).
4: Each page passes the duplicate-paragraph, banned-phrase and schema checks.

### Story 6.5: AI-search layer

As an AI search system,
I want consistent entity data and a clear map of the site,
so that I can cite Shellharbour Cleaning accurately.

#### Acceptance Criteria
1: `llms.txt` generated from content data (FR39) with one-line answers for pricing, guarantee and each hub.
2: Organization `sameAs` renders only configured real URLs; LocalBusiness and Service blocks reference the Organization `@id`.
3: IndexNow key file served; publish/deploy pings changed URLs (FR40).
4: A content check verifies every service, hub, guide and checklist page opens its sections with a direct answer containing a number or concrete fact (FR38), reported as warnings for editor review.

---

## Epic 7: Launch & Local Presence

Clear the launch blockers, run final QA, switch the domain live, and connect the business to Google, Bing, Apple and the directories that feed local packs and AI answers.

### Story 7.1: Resolve launch blockers

As the owner,
I want every launch blocker resolved and recorded,
so that the live site states only true facts.

#### Acceptance Criteria
1: LB1–LB8 resolved in config with the decision and date recorded in `docs/launch-decisions.md`.
2: `npm run check:launch` passes; production build succeeds.
3: Real-photo-only slots (team, before/after, gallery) are populated or confirmed hidden.

### Story 7.2: Production domain, redirects and indexing

As a search engine,
I want the production site served on one canonical host with correct indexing,
so that signals consolidate on the right URLs.

#### Acceptance Criteria
1: Production domain on Cloudflare with HTTPS, HSTS, `www` → apex (or the reverse) 301; staging remains noindex.
2: Security headers per NFR5 present (verified by test).
3: Google Search Console and Bing Webmaster Tools verified; sitemap submitted (FR50).
4: Redirect check passes; no indexable page returns non-200.

### Story 7.3: Google Business Profile and citations handoff

As the owner,
I want the GBP and citations set up consistently,
so that we can appear in the local pack and AI answers.

#### Acceptance Criteria
1: `docs/local-presence.md` documents GBP setup (name per LB1, categories, service areas, hours, UTM landing URL `/locations/shellharbour/?utm_source=gbp&utm_medium=organic&utm_campaign=shellharbour`), weekly posting routine and review-reply rule (48 hours).
2: Citation tracker (`docs/citations.csv`) lists the directories in `competitors.md` §3 with URL, NAP used, date and status.
3: Once live, GBP URL added to `BUSINESS_PROFILES` and redeployed.

### Story 7.5: Off-site AI visibility programme

As the owner,
I want a clear, honest off-site plan,
so that AI engines find consistent third-party evidence about Shellharbour Cleaning.

#### Acceptance Criteria
1: `docs/ai-visibility-playbook.md` maps every item of the owner's AI Visibility Checklist 2026 to an owner, a cadence and a status.
2: Verification run with free tools and recorded: AI bot access (technicalseo.com AI bot access tool) shows all target crawlers allowed; JS-free rendering check (jetoctopus JS tool) shows key copy present without JavaScript; `site:` search confirms key pages indexed.
3: Plan covers: GBP + directories with identical NAP; business description written to the criteria AI tools state when asked "what do you look for when recommending a cleaner in Wollongong"; YouTube channel (videos answering real questions, keywords in title/description/file name/first and last 10 seconds, chapters, companion blog post per video, channel in `sameAs`); Reddit (r/wollongong, r/illawarra, r/AusRenovation, r/AusFinance renting threads — genuine help first, no brand mentions until an established presence, per subreddit rules); LinkedIn long-form articles structured answer-first; local PR target of 3 mentions (e.g. Illawarra Mercury, local community newsletters, business chamber); podcast appearances; review requests that ask customers to describe the specific outcome.
4: Third-party "best of" and comparison posts on Medium, Substack, LinkedIn or Quora are published only with clear authorship disclosure. No undisclosed self-ranking reports, fake reviews or content designed to mislead AI systems (ACCC misleading-conduct risk and platform penalties).
5: Monthly "what do you know about Shellharbour Cleaning" check across ChatGPT, Gemini, Perplexity and Google AI Mode is added to the Story 10.3 routine, with corrections made at the source pages AI cites.

### Story 7.4: Pre-launch QA and go-live

As the owner,
I want a final verified checklist before launch,
so that nothing embarrassing goes live.

#### Acceptance Criteria
1: Full CI suite green: unit, integration, E2E, content checks, Lighthouse CI, axe.
2: Manual checklist completed and committed: every page type spot-checked on a phone, every form submitted, every price compared against the pricing module, every schema type validated in Google's Rich Results Test.
3: Baseline AI visibility recorded: 8 prompts across ChatGPT, Perplexity, Gemini and Google AI Mode, saved to `docs/ai-visibility/{date}.md`.
4: Owner sign-off recorded.

---

## Epic 8: Customer Portal

Replace CleanerAtDoor's mock login and browser storage with real customer accounts on `my.{domain}`: manage, pay for and rebook cleans.

### Story 8.1: Auth and the `my.` host

As a customer,
I want to sign in securely with a magic link or Google,
so that I can manage my bookings without a password.

#### Acceptance Criteria
1: Supabase Auth email magic link and Google OAuth; sessions in httpOnly, Secure, SameSite=Lax cookies; no tokens in web storage (test asserts).
2: Middleware routes `my.{domain}` to the app group and sends `X-Robots-Tag: noindex`; robots.txt on `my.` disallows all.
3: Bookings made before sign-up link to the account by verified email.
4: Roles (customer, cleaner, admin) stored in `profiles`; RLS tests prove a customer cannot read another customer's data.

### Story 8.2: Bookings dashboard, reschedule and cancel

As a customer,
I want to see, reschedule or cancel my cleans,
so that I can fit cleaning around my life.

#### Acceptance Criteria
1: Upcoming and past bookings list with status chips; booking detail shows service, price breakdown, date, address and cleaner first name when assigned.
2: Reschedule offers available dates; cancel shows the fee (50% inside 24 hours, $0 otherwise) before confirming (FR42).
3: Addresses can be added, edited and removed; "Rebook" pre-fills `/book-now/`.
4: Playwright covers reschedule and cancel inside and outside the 24-hour window.

### Story 8.3: Payments and invoices

As a customer,
I want to pay by card upfront or after the clean and download an invoice,
so that paying is easy and I have records for tax.

#### Acceptance Criteria
1: Stripe Payment Element supports pay-now or save-card-for-after; off-session charge on completion; failed charges notify the customer and ops.
2: Webhooks (signature-verified) update `bookings.payment_status`; replay-safe (idempotency).
3: GST invoice PDF with ABN, GST component and booking details downloadable per booking.
4: Admin-issued guarantee refunds go through Stripe and are recorded (FR43).
5: Integration tests use Stripe test mode and webhook fixtures.

---

## Epic 9: Cleaner Portal & Admin

Give cleaners and operations real tools: job lists with checklists and photo capture, rosters that drive availability, reviews and the post-clean review request, and the job and review data that suburb pages are gated on.

### Story 9.1: Cleaner jobs and checklist

As a cleaner,
I want my day's jobs with access notes and a checklist,
so that I arrive prepared and nothing is missed.

#### Acceptance Criteria
1: Cleaners see only their assigned jobs (RLS) with address, access notes, service checklist and customer first name.
2: Checklist items can be ticked; marking the job complete requires all mandatory items and sets status `completed`.
3: Earnings view sums completed jobs by week and month.

### Story 9.2: Job photo uploads with consent

As a cleaner,
I want to upload before/after photos,
so that the customer and the business have proof of the work.

#### Acceptance Criteria
1: Upload to Supabase Storage (private bucket), resized server-side, linked to the job; photos tagged `real-job` and with the customer's photo-use consent flag.
2: Customers see their job's photos in the portal.
3: Admin approval (FR48) is required before any photo appears publicly; only consented photos can be approved; suburb is shown, address never.

### Story 9.3: Admin bookings board and assignment

As operations,
I want to see every booking and assign a cleaner,
so that every request is confirmed fast.

#### Acceptance Criteria
1: Board view filters by status, date, hub and cleaner; booking detail allows confirm, decline (with reason emailed), assign, reschedule.
2: Assignment notifies the cleaner and the customer (cleaner first name).
3: Every admin action is audit-logged with user and timestamp.

### Story 9.4: Rosters and availability

As operations,
I want cleaner rosters to drive the booking calendar,
so that customers only pick times we can deliver.

#### Acceptance Criteria
1: Admin sets each cleaner's working days, hours and hubs, and blocks dates.
2: Availability API returns bookable windows per date and hub, accounting for existing bookings and duration estimates from the pricing module.
3: `/book-now/` and portal reschedule use this API instead of the Epic 2 config; tests cover full days and cross-hub limits.

### Story 9.5: Reviews admin and review-request loop

As the owner,
I want every completed job to ask for a review and every review to be managed,
so that we reach 20 genuine Google reviews in 90 days.

#### Acceptance Criteria
1: Two hours after `completed`, an SMS with the GBP review link is sent once per booking, only with SMS consent, between 9am and 8pm local time (FR46).
2: Admin can import Google reviews (manual entry or GBP export) with source URL, and publish/unpublish them.
3: Dashboard shows requests sent, reviews received, and replies pending past 48 hours.

---

## Epic 10: Suburb Pages & Growth Loop

Turn real operating data into verified suburb pages and keep measuring how search and AI tools see the business.

### Story 10.1: OSM cue pipeline for Illawarra suburbs

As the owner,
I want local features for each suburb fetched from open data with provenance,
so that suburb copy is specific and never invented.

#### Acceptance Criteria
1: The `local-suburb-seo` fetch and generate scripts are ported to `scripts/suburbs/` and run for every Illawarra suburb, writing `content/locations/illawarra-cues.json` with OSM element IDs and timestamps.
2: A human spot-check of 10% of cues is recorded in `docs/suburb-cue-review.md` before generation.
3: Generated paragraphs use only cued features; fallback rows are flagged; the run is rejected if more than one third fall back.
4: Paragraphs are unique strings across all suburbs (check passes).

### Story 10.2: Gated suburb page generation

As a resident of a suburb we actively serve,
I want a page with local reviews, jobs nearby and nearby suburbs,
so that I can see you really work in my street's area.

#### Acceptance Criteria
1: `/locations/{suburb}/` generated only when `isPublishable()` is true using live data from Epics 5 and 9 (FR18, FR47).
2: Page has H1 "Cleaners in {Suburb} {Postcode}", booking widget prefilled, services available, 6–12 nearby suburbs with distances (haversine from verified centroids), local facts with sources, 2–3 local reviews, jobs done nearby (count, anonymised), 3–4 local FAQs, link to hub; 500–900 words.
3: Newly qualifying suburbs enter a "pending review" state in admin; publishing requires one click by an admin; a scheduled rebuild picks up approved suburbs.
4: Sitemap, hub suburb lists and nearby-suburb links update automatically.

### Story 10.3: Monthly AI visibility and search reporting

As the owner,
I want a monthly view of rankings and AI citations,
so that I know what is working and what to write next.

#### Acceptance Criteria
1: A documented monthly routine (`docs/ops-runbook.md`) runs the 8 AI prompts, records citations in `docs/ai-visibility/{yyyy-mm}.md`, and compares to the previous month.
2: Search Console export (queries, pages, CTR) reviewed monthly; pages with high impressions and low CTR get title rewrites via the `title-tag-optimizer` skill.
3: The January step updates the price-guide year (NFR18) and re-checks published prices.

---

## Requirements Traceability

| Requirement | Story |
|---|---|
| FR1 URL scheme | 1.4, every page story |
| FR2 UTM canonicals | 1.4 |
| FR3 one URL per keyword | 1.5 |
| FR4 hub rules | 4.1, 4.4 |
| FR5–FR9 every-page rules | 1.3, 1.4, 1.6, page stories |
| FR10–FR14 services | 3.1–3.7 |
| FR15–FR17 locations | 4.2–4.6 |
| FR18–FR19 suburb gating and provenance | 4.1, 10.1, 10.2 |
| FR20–FR25 pricing and booking | 2.1–2.5 |
| FR26–FR33 trust and company | 5.1–5.5 |
| FR34–FR40 content and AI search | 6.1–6.5, 1.4 |
| FR41–FR43 customer portal | 8.1–8.3 |
| FR44–FR48 cleaner and admin | 9.1–9.5, 10.2 |
| FR49–FR50 measurement | 1.5, 2.2, 2.5, 7.2 |
| FR51 imagery | 1.5, 1.6, 3.7, 9.2 |
| FR52 facts page | 5.6 |
| FR53 glossary, statistics, X vs Y | 6.6 |
| FR54 last updated / dateModified | 1.4 (registry field), 5.6, 6.1–6.6 |
| FR55 answer + TL;DR + numbers + quotes | 6.2–6.6, 1.5 (banned vague phrases) |
| AI Visibility Checklist off-site items | 7.3, 7.5, 10.3 |
| NFR1, NFR4 performance and Lighthouse | 1.5, 2.5 |
| NFR2 static rendering | 1.1 |
| NFR3 accessibility | 1.3, 1.5, 2.2 |
| NFR5 security | 2.4, 7.2, 8.1 |
| NFR6 privacy | 2.5, 5.5 |
| NFR7 GST pricing | 2.1, 2.3 |
| NFR8, NFR17 content integrity and copy | 1.5, 5.1 |
| NFR9 NAP | 1.2, 1.5 |
| NFR10–NFR12 reliability, backups, observability | 1.1, 2.4 |
| NFR13 cost | Technical Assumptions (Architect to confirm) |
| NFR14 tokens | 1.3, 1.5 |
| NFR15 images | 1.5 |
| NFR16 internal linking | 1.5, 3.1, 4.3 |
| NFR18 freshness | 6.2, 10.3 |

## Out of Scope (MVP)

- Native mobile apps (portals are responsive web).
- Services not confirmed under LB5 (upholstery, mattress, rug, tile and grout, mould, post-construction).
- Gift cards, subscriptions with discounts, referral program.
- Service areas beyond the four hubs (e.g. Shoalhaven, Southern Highlands) — the data model supports adding hubs later.
- Paid search campaigns and Local Services Ads (may run alongside, not built here).
- Multi-language content.

## Checklist Results Report

**Mode:** Comprehensive (auto mode; PRD drafted in full before validation)
**Date:** 2026-11-19

### Summary
- Total items checked: 138
- Passed: 133
- Failed: 4
- N/A: 1
- **Overall readiness:** Ready for handoff (failures are minor and listed below)

### Section Scores

| Section | Pass | Fail | N/A |
|---|---|---|---|
| 1. Problem Definition & Context | 14 | 1 | 0 |
| 2. MVP Scope Definition | 14 | 0 | 0 |
| 3. User Experience Requirements | 15 | 0 | 0 |
| 4. Functional Requirements | 15 | 1 | 0 |
| 5. Non-Functional Requirements | 20 | 0 | 0 |
| 6. Epic & Story Structure | 15 | 0 | 0 |
| 7. Technical Guidance | 17 | 0 | 0 |
| 8. Cross-Functional Requirements | 15 | 0 | 1 (data migration — new system, no legacy data) |
| 9. Clarity & Communication | 8 | 2 | 0 |

### Critical Findings
- 1.1 Quantification of problem impact: no keyword search volumes, because the Ahrefs API returned "Insufficient plan". Demand is evidenced by autocomplete and SERP data only.
- 4.1 Feature priority: priority is implied by epic order, but individual FRs carry no MoSCoW labels.
- 9.1 Diagrams: no architecture or user-flow diagrams yet. The Architect and UX Expert should add them.
- 9.2 Communication plan: no cadence is defined for PRD updates between the owner and the build agents.

### Recommendations
1. Connect a keyword tool with API access (or export from the Ahrefs web UI) and re-rank `docs/research/illawarra-keywords.md` clusters before Epic 4 content is written.
2. Resolve LB1 (business name registration) first. It blocks the GBP, which is the single biggest local ranking lever.
3. Decide LB4 (phone). A separate local or tracked number for Shellharbour Cleaning avoids linking two brands' GBPs and gives clean call attribution.
4. Confirm the LB6 end of lease price grid and that live CleanerAtDoor prices apply in NSW before Story 2.1 is closed.
5. Add MoSCoW tags to FRs if scope must be cut. Suggested must-haves for public launch: FR1–FR40, FR49–FR51.
6. Agree on a weekly 15-minute PRD review while Epics 1–7 run, logging changes in the Change Log.

### Approved Sections
- Goals and Background Context (including Target Users and Launch Blockers)
- Requirements (FR1–FR51, NFR1–NFR20)
- User Interface Design Goals
- Technical Assumptions
- Epic List and Epic Details (10 epics, 49 stories)
- Requirements Traceability and Out of Scope

## Next Steps

### UX Expert Prompt

You are the BMAD UX Expert. Read `docs/PRD.md`, then `docs/research/ui-components.md`, `docs/UI-UX-design-guide.md` and `docs/research/page-structure-guideline.md`. Produce `docs/front-end-spec.md` covering the "Escarpment to shore" token set (validate the palette and the Fraunces + Figtree pairing for WCAG 2.2 AA), wireframes for the homepage, service, hub, service-in-city, suburb, pricing and book-now templates, and the re-skin rules for each mapped 21st.dev component. Honour the owner's image rule (stock for people, AI or stock for non-people scenes, real photos only for team and before/after) and the no-ai-slop bans.

### Architect Prompt

You are the BMAD Architect. Read `docs/PRD.md` (especially Technical Assumptions, NFR1–NFR20 and Epics 2, 8 and 9) and `docs/research/cleaneratdoor-audit.md`. Produce `docs/architecture.md` for a single Next.js App Router app on Cloudflare Workers (OpenNext) with Supabase (Postgres, Auth, Storage, RLS, Sydney region), Stripe, email/SMS providers and Turnstile. Include the data model, the host-based routing for `my.`, the availability/scheduling design and the pay-after-clean flow. Confirm or challenge the Supabase vs D1 decision with reasons, and list which CleanerAtDoor modules and check scripts are ported.

