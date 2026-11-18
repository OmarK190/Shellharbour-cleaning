
# UI/UX Design Guide for a Cleaning Services Website

> This guide sets out the design system, UX rules and user-research plan for a cleaning website that converts. It is built from patterns on the 10 highest-traffic cleaning sites in the US and Australia, and is the companion to *Step-by-step-procedure-to-create-1-ranking-website-for-cleaning-services.md*. A reference build is in `cleaning-website-design.html`, which uses a fictional Melbourne brand, "Fernsby Home Cleaning".
>
> Labels: **[OBSERVED]** competitor pattern · **[DATA]** measured or published figure · **[RULE]** what to build.

---

## 1. Who we are designing for

### 1.1 Jobs to be done

| Customer | The job they are hiring us for | What they need to see in 5 seconds | Biggest fear |
|---|---|---|---|
| **Renter moving out** (AU "bond clean", US "move-out") | "Get my bond / deposit back without a fight" | A bond-back guarantee, a fixed price, a date that suits | Agent rejects the clean, so they lose money |
| **Busy household** (recurring) | "Give me my weekends back" | Price per visit, the same cleaner each time, flexible schedule | Strangers in the house, inconsistent quality |
| **Landlord / property manager** | "Turn the property over fast so it rents" | Fast availability, invoicing, before/after proof | Delays and no-shows |
| **Older person / NDIS participant** (AU) | "Keep my home safe and clean with someone I trust" | Police-checked staff, NDIS-registered status, a phone number | Being rushed, being overcharged |
| **One-off / deep clean** (pre-event, post-reno) | "Make it spotless before Saturday" | Same-week slots, what's included, price | Hidden extras on the day |

### 1.2 The decision journey

```
Search / AI answer / Maps ─► Lands on city or service page ─► Scans price + trust (≤ 10 s)
        ─► Checks what's included + reviews ─► Gets instant price ─► Calls / texts / books
        ─► Confirmation + reminder ─► Clean ─► Review request ─► Rebook / recurring
```

**Drop-off points to design against:** the price isn't visible, the form asks for contact details too early, there's no proof of what's included, the phone number is hard to tap, and the page loads slowly on mobile.

[DATA] Google found that as mobile load time goes from 1s to 10s, the probability of a visitor bouncing rises 123%. Form conversion falls from roughly 25% at 3 fields to roughly 12% at 7 fields (FoundryCRO 2026). BrightLocal (2026) reports that 97% of consumers read reviews for local businesses.

---

## 2. Design principles

1. **Price before personal details.** Show a real price from three taps (suburb, bedrooms, bathrooms) before asking for a name. [OBSERVED] Simply Maid ("Book in 60 seconds", live calculator) and Homeaglow lead with price. Franchise sites that hide it behind "Request a free quote" rely on brand trust a newcomer doesn't have.
2. **Trust sits next to every ask.** The rating, review count, guarantee and safety line appear next to every primary button. [OBSERVED] All 10 winners repeat a branded guarantee and safety claims.
3. **Three ways in, always.** Call, text and get a price are reachable from any scroll position. On mobile they live in a sticky bottom bar. [OBSERVED] Merry Maids shows its phone number in the header, hero and footer and offers "Text Us". Jim's repeats 131 546 four times on one page.
4. **Local is visible.** The city, suburbs, local reviews, local team and local prices are on the page, not just in the H1. [OBSERVED] Templated franchise pages (e.g., Jim's Melbourne) lack nearby suburbs and team profiles; the data-rich suburb pages (Simply Maid) feel credible.
5. **Show the clean.** Use real before/after photos, room-by-room checklists and named cleaners. Avoid stock photos of models holding spray bottles.
6. **Honest urgency only.** Show real availability ("3 slots left this Thursday"), never countdown timers. [OBSERVED] Truth in Advertising criticised Homeaglow's 10-minute timer on its $19 offer.
7. **Quiet everywhere except the price.** One memorable element per page (the live price). Everything else stays calm, legible and fast.

---

## 3. Design tokens (reference build)

### 3.1 Colour

| Token | Hex | Use | Contrast note |
|---|---|---|---|
| `--eucalypt` | `#0F3D3A` | Brand, headings, header and footer background | 12.0:1 on white |
| `--ink` | `#16211F` | Body text | 16:1 on white |
| `--tile` | `#E3F1EC` | Section tint (like clean bathroom tile), trust strip | Background only |
| `--lemon` | `#F6D64A` | Primary CTA background only (with eucalypt text) | Eucalypt on lemon 8.4:1 |
| `--rinse` | `#2A7068` | Links, focus ring, icons | 5.8:1 on white, 5.0:1 on tile |
| `--paper` | `#FFFFFF` | Main background | — |
| `--alert` | `#B3261E` | Errors only | 6.5:1 on white |

**Why these colours:** eucalyptus green reads as fresh, local (AU) and calm without the clinical blue every cleaner uses. Lemon is the scent of "clean" and gives the primary button an unmistakable colour. It is used **only** for primary actions, so the eye learns "yellow means book".

### 3.2 Typography

- **Display:** Bricolage Grotesque (600/700). It has slightly quirky, friendly shapes and gives personality without looking cheap.
- **Body and UI:** Atkinson Hyperlegible (400/700). It was designed for low-vision readers, which matters for older and NDIS customers.
- **Scale (ratio about 1.25, 16px base):** 13 · 16 · 20 · 25 · 31 · 39 · 49 · 61px. Body is 17–18px on mobile (never below 16px, which also prevents iOS input zoom).
- **Line length** 60–75 characters; body line height 1.55; headings 1.1–1.2.
- **Sentence case everywhere.** No all-caps labels and no decorative eyebrows above headings.

### 3.3 Space, shape, depth

- 4px base grid: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112.
- **Radius by hierarchy, not a single value:** inputs and buttons 10px, the quote card 20px, chips fully rounded. Most sections are flat with no card wrapper.
- **Shadow:** only on the floating quote card and the sticky mobile bar (these are the "lifted" interactive surfaces). Everything else uses tint or a 1px border.
- **Max content width** 1160px. Text columns ≤ 680px.

### 3.4 Motion

- The only ambient motion is the price number easing to its new value (about 250ms) when inputs change, because it shows what changed.
- Accordions and the menu animate height/opacity in 150–200ms.
- Respect `prefers-reduced-motion` (all transitions off).

---

## 4. Page layouts

### 4.1 Homepage / city page (desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ Logo   Services  Areas  Prices  Reviews        (03) 5550 4821  [Get price] │
├──────────────────────────────────────────────────────────────────────┤
│ House cleaning in Melbourne,               ┌───────── Quote card ────────┐│
│ priced before you give us your name.       │ Suburb [________]            ││
│ ★ 4.9 from 1,240 reviews                   │ Bedrooms  – 3 +  Baths – 2 + ││
│ Police-checked · insured · bond-back       │ Service  (Regular|Deep|Lease)││
│ guarantee                                  │ How often (Weekly…One-off)   ││
│                                            │        $189 per clean        ││
│                                            │ [ Choose a date ]            ││
│                                            └──────────────────────────────┘│
├──────────────────────────────────────────────────────────────────────┤
│ Trust strip: rating | guarantee | police checked | pay after the clean    │
├──────────────────────────────────────────────────────────────────────┤
│ Services (two-column list with "from $" prices, linked)                   │
│ How it works (3 real steps)                                               │
│ What's included (room tabs → checklist)                                   │
│ Reviews (recent, with suburb + service)                                   │
│ Guarantee block (plain-English terms)                                     │
│ Areas we clean (suburb links + distance)                                  │
│ Your cleaners (real names, years, photo)                                  │
│ FAQ (accordion)                                                           │
│ Final CTA band                                                            │
│ Footer: NAP, ABN, services, areas, policies                               │
└──────────────────────────────────────────────────────────────────────┘
```

### 4.2 Mobile (≤ 768px)

- The hero headline is ≤ 3 lines and the quote card stacks directly below it (visible in the first scroll).
- Sticky bottom bar with **Call**, **Text** and **Get price** (the last one in lemon). Each is ≥ 48px tall and full width split into thirds.
- The header collapses to logo, a phone icon and the menu.
- Tables become stacked lists. No horizontal scrolling except the room tabs.

---

## 5. Components and their rules

| Component | Rules | Evidence |
|---|---|---|
| **Header** | Phone number as a `tel:` link, always visible on desktop. One primary button ("Get price"). Max 5 nav items. | [OBSERVED] Merry Maids: header phone plus "Free Quote" |
| **Quote card** | Step 1 is suburb/postcode, bedrooms, bathrooms, service and frequency, and the price shows instantly. Step 2 is the date. Step 3 is name, mobile and email. Show what's included under the price. Show "Pay after the clean · Free cancellation 24h". | [OBSERVED] Simply Maid. [DATA] form fields vs conversion |
| **Price display** | Large numerals, "per clean", the frequency saving shown as money ("Save $34 vs one-off"). | Price-first principle |
| **Trust strip** | 4 items max: rating + count, guarantee, safety (police-checked/insured), risk reversal. | [OBSERVED] all winners |
| **Service list** | Name, one-line outcome, "from $" price, link. Not identical image cards. | Stanley Steemer / Molly Maid service pages rank individually |
| **How it works** | 3 numbered steps (it is a genuine sequence). | [OBSERVED] Molly Maid: sign up, customise, enjoy |
| **Checklist** | Tabs by room (Kitchen, Bathrooms, Bedrooms, Living, End of lease extras). Ticks, not paragraphs. Downloadable PDF link. | [OBSERVED] Molly Maid H3 checklist; The Maids plans |
| **Reviews** | Show the first name, suburb, service and date (recency matters: [DATA] 74% only care about reviews from the last 3 months). Link to the Google profile. Never fabricate. | BrightLocal 2026 |
| **Guarantee** | Its own section, in plain English: what's covered, how to claim, how long. | [OBSERVED] Neighborly Done Right Promise, Jim's Work Guarantee |
| **Areas served** | Suburb links with distance from base, grouped by region, plus a map. | [OBSERVED] Simply Maid nearby suburbs with distances |
| **Team** | Real photo, name, tenure, a short line. On city pages, filter by area. | [OBSERVED] Merry Maids team profiles, The Maids "Meet the Owner" (a bad example used lorem ipsum) |
| **FAQ** | `<details>` accordion, 6–8 questions. Answer in the first sentence. Mark up with FAQPage schema. | [OBSERVED] all winners; GEO answer-first |
| **Sticky mobile bar** | Call · Text · Get price. Hide it while the keyboard is open. | Phone repeated 3–4× on winners' pages |
| **Footer** | Full NAP matching the GBP exactly, ABN/licence, service and area links, policies. | NAP consistency |

### 5.1 Button and CTA copy

- The primary button says what happens: "See my price", "Choose a date", "Book this clean". Avoid "Submit" and "Learn more".
- Keep action names consistent through the flow: "Book this clean" leads to a "Clean booked" confirmation.
- Phone CTA: "Call (03) 5550 4821". Text CTA: "Text us".
- Error messages explain how to fix the problem: "Enter a Melbourne postcode, like 3000." Never "Invalid input."

### 5.2 Forms

- Labels sit above fields (never placeholder-only). Use `inputmode="numeric"` for postcodes and `autocomplete` attributes (`postal-code`, `name`, `tel`, `email`).
- Steppers for bedrooms and bathrooms (fewer errors than free text).
- Validate on blur, not on every keystroke. Keep progress if the visitor goes back.
- Marketing consent is unticked by default and kept separate from booking consent.

---

## 6. Accessibility (WCAG 2.2 AA minimum)

- Contrast ≥ 4.5:1 for body text and ≥ 3:1 for large text and UI borders (palette checked in §3.1).
- Visible focus (2px `--rinse` outline with 2px offset) on every interactive element.
- Tap targets ≥ 44×44px, with ≥ 8px between them.
- A skip link, landmarks (`header`, `nav`, `main`, `footer`), one H1 and a logical heading order.
- Price updates announced with `aria-live="polite"`.
- No meaning carried by colour alone (errors get an icon and text).
- Keyboard-operable steppers, tabs and accordions.

---

## 7. Performance budget (design-side)

| Metric | Budget |
|---|---|
| LCP (4G mid-range phone) | < 2.0s |
| CLS | < 0.05 (reserve image and widget space) |
| INP | < 200ms |
| JS per page | < 100KB (the calculator is vanilla JS) |
| Hero media | One image ≤ 120KB AVIF/WebP, or none (the reference uses a CSS tile pattern) |
| Fonts | 2 families × 2 weights, `font-display: swap`, preloaded |

---

## 8. Patterns to avoid (seen on competitor sites)

| Anti-pattern | Where seen | Why it hurts |
|---|---|---|
| Three different phone numbers on one page | The Maids Towson page | Breaks NAP consistency and confuses callers |
| Placeholder lorem ipsum in the owner bio | The Maids Towson page | Destroys trust instantly |
| Identical checklists under 4 different plans | The Maids plans | Visitors can't tell what they're paying for |
| Countdown timer on a "limited" offer | Homeaglow ($19 first clean) | Feels manipulative; brought media criticism |
| No nearby-suburb links on a city page | Jim's Melbourne page | Weak internal linking and a dead end for users |
| UTM-tagged GBP URLs indexed as duplicates | Molly Maid, Merry Maids | Splits signals; fix with canonicals |
| Quote form that loads late ("Loading…") | Merry Maids Baltimore (as captured) | The primary CTA is invisible on first paint |

---

## 9. Validating the design with user research

Run this before and after launch. Five to eight participants per round finds most usability problems.

### 9.1 Research plan

| Question | Method | Sample | Time |
|---|---|---|---|
| Can renters get a bond-clean price and date in under 90 seconds on a phone? | Moderated usability test (mobile) | 6 renters | 1 week |
| Which words do people use for services and areas (bond / end of lease / vacate)? | Open card sort and search-term review | 20 people | 1 week |
| Does price-first beat quote-first? | A/B test (hero quote card vs "Request a quote" form) | Until 95% significance | 2–4 weeks |
| What makes people trust a cleaner with their keys? | Interviews | 6–8 recent customers | 2 weeks |
| Where do people drop out of the booking flow? | Funnel analytics + session recordings (consented) | All traffic | Ongoing |

### 9.2 Interview guide (45 minutes)

1. **Warm-up (5 min):** their home, who lives there, how cleaning is handled now.
2. **Context (10 min):** the last time they hired, or considered hiring, a cleaner. What triggered it? Where did they look?
3. **Deep dive (20 min):** what they checked before booking (price, reviews, insurance). What nearly stopped them. How they compared options. What "trustworthy" looks like.
4. **Reaction (10 min):** show the reference page. Ask them to get a price for their home while thinking aloud.
5. **Wrap-up (5 min):** "What would you change? Anything we didn't ask?"

### 9.3 Synthesis

- **Affinity map** observations into themes (price clarity, safety, flexibility, proof of quality).
- **Journey map** pain points against the §1.2 journey.
- **Impact/effort matrix** to prioritise fixes (below).

### 9.4 Impact / effort priorities for the design

| | Low effort | High effort |
|---|---|---|
| **High impact** | Sticky Call/Text/Price bar · Rating + guarantee beside CTAs · 3-field first step · Answer-first FAQs | Live price calculator with real availability · Unique city pages with local reviews and team |
| **Lower impact** | Microcopy polish · Icon set | Custom illustration system · Video tours |

---

## 10. Hand-off checklist

- [ ] Tokens implemented as CSS custom properties (§3)
- [ ] All components in §5 built with documented states (default, hover, focus, active, disabled, error, loading)
- [ ] Mobile sticky bar tested on iOS Safari and Android Chrome with the keyboard open
- [ ] Contrast checked; keyboard-only walkthrough of the quote flow passes
- [ ] Lighthouse: Accessibility 100, Performance ≥ 95 on Home, Service and City templates
- [ ] Copy reviewed: no "Submit", no all-caps labels, errors explain the fix
- [ ] Real photos, real reviews, real team. No placeholders on launch.

### Sources
- Competitor pages: [Molly Maid move-out](https://mollymaid.com/our-services/move-out-cleaning), [Merry Maids Baltimore](https://merrymaids.com/baltimore), [Jim's Melbourne](https://www.jimscleaning.com.au/local/home-cleaning-services/vic/melbourne/melbourne+3000), [The Maids Towson](https://www.maids.com/147), [Simply Maid West Melbourne](https://simplymaid.com.au/melbourne/west-melbourne), [Homeaglow pricing](https://homeaglow.com/pricing)
- [Think with Google: mobile page speed](https://thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/)
- [FoundryCRO: form conversion benchmarks 2026](https://foundrycro.com/blog/form-conversion-rate-benchmarks-2026/)
- [BrightLocal: Local Consumer Review Survey 2026](https://www.brightlocal.com/research/local-consumer-review-survey/)
- [Truth in Advertising: Homeaglow](https://truthinadvertising.org/articles/taking-the-shine-off-homeaglows-19-cleaning-service)
