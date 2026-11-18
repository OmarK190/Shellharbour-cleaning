# UI Direction & Component Plan — Shellharbour Cleaning

Date: 2026-11-19. Inputs: `docs/UI-UX-design-guide.md` (principles, layouts, component rules, WCAG 2.2 AA, performance budget), `no-ai-slop` skill, 21st.dev library (category pages fetched 2026-11-19), owner feedback: "`cleaning-website-design.html` is not that good — I want a more engaging landing page, more images, more UI components."

## 1. Reconciling "more engaging" with "no slop"

The owner wants more energy than the reference mock. The no-ai-slop rules and the performance budget still apply. Engagement comes from **real things the visitor can look at or use**, not decoration:

| Engagement source | Allowed | Instead of |
|---|---|---|
| Many high-quality images (hero, every service, every hub, gallery of jobs) — people from free stock, non-people scenes AI or stock, team and before/after real (§4) | Yes — this is the main lever | Watermarked or low-res images, AI-generated people |
| Interactive price tool with live price easing | Yes — the one "memorable element" | Static "Request a quote" button |
| Before/after drag slider on real job photos | Yes | Carousel of generic room shots |
| Room-by-room photo + checklist pairing | Yes (full list visible; photo swaps) | Hidden accordions of inclusions |
| Local map with the 4 hubs and linked suburbs | Yes (static image + link, lazy) | Full-viewport interactive globe |
| Named cleaners with photos and areas | Yes | Avatar stacks of anonymous faces |
| Review cards with suburb, service, date + link to Google | Yes (only real reviews) | Autoplay marquee of invented quotes |
| Subtle scroll reveals (opacity/translate ≤ 200ms, reduced-motion off) | Yes, sparingly | Shader / WebGL / particle / liquid-metal heroes |
| Bold type and colour blocking per section | Yes | Glassmorphism, gradient text, glow blobs |

Banned regardless of 21st.dev popularity: shader and WebGL backgrounds, animated hero spectacle, number tickers on decorative stats, stat-tile rows, utility bar above nav, emoji, countdown timers, chatbot widgets on marketing pages.

## 2. Visual direction: "Escarpment to shore"

The Illawarra's identity is the green escarpment dropping to surf beaches, sandstone and sea pools (Kiama Blowhole, Shell Cove marina). It is distinct from CleanerAtDoor (ink/orange/teal) and from the reference mock (eucalypt/lemon).

### Tokens (defined once in `app/globals.css` + `tailwind.config.ts`; no other values allowed)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--deep-water` | `#0B3B4A` | Brand, headings, header/footer bg | 11.7:1 on white |
| `--ink` | `#14232A` | Body text | 15.6:1 on white |
| `--sea-glass` | `#DCEFEA` | Section tint, trust strip | bg only |
| `--sand` | `#F5EDE1` | Alternate section tint (warm) | bg only |
| `--escarpment` | `#2F6B4F` | Links, focus ring, ticks | 6.3:1 on white |
| `--coral` | `#C2482A` | Primary CTA bg only, with white text | white on coral 4.9:1 (AA). Original #E8603C failed axe at 3.54:1 with deep-water text |
| `--paper` | `#FFFFFF` | Main bg | — |
| `--alert` | `#B3261E` | Errors only | 6.5:1 |

Rule: coral means "book/price" and nothing else.

Type: **Fraunces** (display, 600/700, soft optical size — warm, coastal-editorial) + **Figtree** (body/UI, 400/600 — legible humanist sans). 2 families × 2 weights, `font-display: swap`, self-hosted via `next/font`. Scale and spacing follow `UI-UX-design-guide.md` §3.2–3.3 (16px base, 1.25 ratio, 4px grid, radius 10/20/full, shadow only on quote card and sticky bar).

Motion: price easing (~250ms, `@number-flow/react`), section reveal 150–200ms, before/after slider drag. All off under `prefers-reduced-motion`.

## 3. 21st.dev component map

21st.dev components are React + TypeScript + Tailwind in shadcn registry format; each page has a "Copy prompt" and a shadcn CLI install command. Free tier allows 2 copies/installs per day, so installs are spread across stories, or the owner buys a plan ($6/mo billed yearly). Each component lands as source in `components/ui/` and **must be re-skinned to the tokens above** (no imported colours, radii or shadows). Check each component's licence on its page before install and record it in `components/ui/LICENSES.md`.

| Page section | 21st.dev component (URL) | Adaptation |
|---|---|---|
| Header + mega menu (Services, Locations) | https://21st.dev/@AliFarooqDev/components/navbar/navbar-dropdown | Max 5 items; tel link + coral "See my price" |
| Breadcrumb | shadcn/ui breadcrumb (https://21st.dev/@shadcn/library/shadcn-ui) | Plus BreadcrumbList JSON-LD |
| Hero layout | https://21st.dev/@brijr/components/hero-modern/hero-five | Split layout: H1 + trust row left, real photo + quote card right; no background animation |
| Quote card steps | https://21st.dev/@anubra266/components/steps/steps-progress | 3 steps: price → date → contact |
| Live price number | https://21st.dev/@barvian/components/number-flow | Price only; never on stats |
| Frequency selector | https://21st.dev/@alexisroe/components/segmented/full-width | Weekly / Fortnightly / Monthly / One-off |
| Bedrooms/bathrooms stepper | shadcn/ui button + input (built in-house) | `inputmode="numeric"`, ≥ 48px targets |
| Date picker with real availability | https://21st.dev/@anubra266/components/calendar-1/unavailable-dates-calendar | Unavailable dates from booking API |
| Service grid (homepage, services hub) | https://21st.dev/@avanishverma4/components/bento-grid-01 | Each tile = real photo + name + "from $" + link; no icon tiles |
| What's included (room photo synced to list) | https://21st.dev/@aloksivastava1025/components/cue-split-panel-image-synced-faq-features | Full room list visible; hover/tap swaps the photo only |
| Before/after | https://21st.dev/@aadixc0de/components/image-compare | Own job photos only, labelled suburb + service |
| Job photo gallery | https://21st.dev/@aadixc0de/components/media-gallery | Lazy-loaded, AVIF/WebP, alt text required |
| Reviews | https://21st.dev/@anubra266/components/carousel-1/testimonials-carousel and https://21st.dev/@clevision/components/card-studio/rating-card | Grid on desktop, swipe on mobile, no autoplay; hidden when zero real reviews |
| Price tables / calculator page | https://21st.dev/@aadixc0de/components/calculator-widget and https://21st.dev/@aymanch-03/components/pricing-tab | Tabs per service; all tables also rendered server-side for crawlers |
| Comparison page table | https://21st.dev/@dhxwhy/components/spotlight-comparison-table | Categories (marketplace / franchise / local business), honest criteria |
| Areas map | https://21st.dev/@dev.shejanmahamud/components/expanded-map/expanded-map-locations | Static map image first (LCP-safe), expands on tap; every suburb a link |
| Team cards | https://21st.dev/@Astryxdesign/components/astryx-avatar/user-card | Real photo, name, years, areas |
| FAQ | https://21st.dev/@a11ypros/components/a11y-accordion | Accessible `<details>`-like behaviour; FAQ only; answers in HTML source |
| Final CTA band | https://21st.dev/@brijr/components/call-to-action-1 | Coral button + phone + text |
| Footer | https://21st.dev/@efferd/components/footer-2 | NAP identical to GBP, ABN, all hub/service links |
| Directory badges (only real listings) | https://21st.dev/@clevision/components/logo-cloud | Static, not a moving marquee; omit until listings exist |
| Sticky mobile bar | Built in-house | Call · Text · See my price; hides with keyboard |

Not used: Liquid Metal Hero, Shader Animation, WebGL Shader, Hero ASCII, Background Paths, Animated Glowing Search Bar, Number Ticker for stats, AI chat components.

## 4. Imagery plan

Owner rule (2026-11-19): images with **people** use free, high-quality, watermark-free stock photos (they read as real and build trust); images **without people** (cleaning scenes, products, rooms, surfaces, details) may be AI-generated or stock.

| Image type | Source | Rule |
|---|---|---|
| People in hero, service and hub imagery (cleaner at work, customer at home) | Free stock: Unsplash, Pexels, Pixabay — commercial-use licence, no watermark, ≥ 2000px source | Record photographer + URL in `public/images/CREDITS.md`; never captioned or implied as "our team" or a named cleaner |
| Non-people cleaning images (spotless kitchen, shower screen, oven interior, carpet texture, products, kit) | AI-generated or stock | Photorealistic, no text artefacts, no fake brand logos; reviewed by a human before use; recorded in `CREDITS.md` as "AI-generated" with tool + date |
| Team profiles `/team/{name}/`, "Your cleaners" blocks | **Real photos only** (with consent) | Shows a real named person — stock or AI here would mislead customers |
| Before/after pairs, job gallery, "jobs done nearby" | **Real job photos only** (customer photo consent) | Presented as our work — stock or AI here is a misleading claim (ACCL) |
| Local context (Shell Cove marina, Kiama harbour, Wollongong streets) | Own photos or licensed stock | Must be the real place named |

1. **Real shoot (still recommended, replaces stock over time):** 1 half-day with 2 cleaners in 3 Illawarra homes. Shot list: team portraits, before/after pairs from the same angle, services in action, van/kit. Required before the team and before/after sections can show.
2. **At launch:** stock people + AI/stock non-people images fill hero, service and hub imagery; team, before/after and gallery sections stay hidden until real photos exist.
3. **Specs:** AVIF + WebP, hero ≤ 120KB, `next/image` with explicit sizes, LCP image `priority`, all others lazy. Alt text describes the task and place ("Cleaner wiping a stovetop in a Shell Cove apartment"). Unique image per page (port CleanerAtDoor `check-visible-image-uniqueness.mjs`). Per-page OG image from the page hero.

## 5. Homepage section → component check

| Guideline homepage section | Component |
|---|---|
| 1 Hero: H1, price tool, trust row | hero-five + steps-progress + number-flow + segmented |
| 2 Trust strip | in-house (4 items max, real facts only) |
| 3 Service list with "from $" | bento-grid-01 (photo tiles, links) |
| 4 How it works (3 steps) | in-house numbered list with photos |
| 5 What's included | cue-split-panel-image-synced |
| 6 Recent reviews | testimonials-carousel / rating-card (hidden until real) |
| 7 Guarantee | in-house text block + link to `/guarantee/` |
| 8 Areas we clean | expanded-map-locations + linked hub/suburb lists |
| 9 Cleaners | astryx user-card |
| 10 FAQ | a11y-accordion |
| 11 Final CTA | call-to-action-1 |

None of these is a decorative stat row. Before/after (image-compare) and the job gallery appear on service pages and hub pages.

## Sources

- https://21st.dev/ and category pages `/community/components/s/{hero,testimonials,comparison,steps,pricing-section,gallery,faq,map,marquee,cta,team,tabs,date-picker,slider,grid,number,features,navigation-menu,footer}` (fetched 2026-11-19)
- `docs/UI-UX-design-guide.md` §2–8
