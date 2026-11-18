// Guides: checklist (6.1), city price guides (6.2), comparisons (6.3), X-vs-Y, glossary, statistics (6.6).
// Every price comes from lib/pricing/rates.ts; marketplace figures are cited with source.
import { RATES, PRICE_FROM, END_OF_LEASE_MAX_CENTS, EXAMPLE_3BED_2BATH_REGULAR_CENTS, regularCleanCents, deepCleanCents, formatAud } from "@/lib/pricing/rates";
import type { PageType } from "@/lib/seo/registry";

const hr = formatAud(RATES.regularHourlyCents);
const min = formatAud(RATES.regularMinimumCents);
const eol = `${formatAud(PRICE_FROM["end-of-lease-cleaning"]!)}–${formatAud(END_OF_LEASE_MAX_CENTS)}`;
const ex = formatAud(EXAMPLE_3BED_2BATH_REGULAR_CENTS);
const deep = formatAud(PRICE_FROM["deep-cleaning"]!);
const carpet = formatAud(PRICE_FROM["carpet-steam-cleaning"]!);
const ndis = formatAud(PRICE_FROM["ndis-cleaning-services"]!);
const YEAR = "2026";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: { caption: string; head: string[]; rows: string[][] };
};

export type Guide = {
  slug: string; // root-level path segment
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  pageType: PageType;
  updated: string;
  answer: string;
  tldr?: [string, string, string];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  callAPro: { text: string; href: string; label: string };
};

const AIRTASKER = { label: "Airtasker — Illawarra cleaning listings", url: "https://www.airtasker.com/cleaning/wollongong-nsw" };
const QUOTEYARD = { label: "The Quote Yard — South Coast cleaning guide", url: "https://www.thequoteyard.com.au/services/hire-cleaner-south-coast-nsw" };
const FAIRTRADING = { label: "NSW Fair Trading — renting", url: "https://www.fairtrading.nsw.gov.au/housing-and-property/renting" };

const sizeRows = () =>
  [
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 2],
    [5, 3],
  ].map(([b, ba]) => [`${b} bed, ${ba} bath`, formatAud(regularCleanCents(b, ba)), formatAud(deepCleanCents(b, ba))]);

function priceGuide(city: "Wollongong" | "Shellharbour" | "Kiama", market: string, local: string, extra?: GuideSection): Guide {
  const slug = `house-cleaning-prices-${city.toLowerCase()}`;
  return {
    slug,
    title: `House Cleaning Prices ${city} ${YEAR} | Price Guide`,
    description: `What a cleaner costs in ${city} in ${YEAR}: ${hr} an hour, ${min} minimum, end of lease ${eol}, compared with local marketplace prices.`,
    h1: `House cleaning prices in ${city} (${YEAR})`,
    primaryKeyword: `house cleaning prices ${city.toLowerCase()}`,
    pageType: "guide",
    updated: "2026-11-19",
    answer: `A house cleaner in ${city} costs ${hr} an hour with Shellharbour Cleaning, including GST, with a ${min} minimum. A three-bedroom, two-bathroom regular clean is ${ex}, a deep clean starts at ${deep}, and end of lease cleaning is a fixed ${eol} by home size.`,
    tldr: [`Shellharbour Cleaning: ${hr}/hr, ${min} minimum, ${ex} for 3 bed 2 bath in ${city}.`, market, "Home size, condition, frequency and add-ons drive the price."],
    sections: [
      {
        heading: `How much does a cleaner cost in ${city} by home size?`,
        paragraphs: [`Shellharbour Cleaning prices whole-home cleans in ${city} by bedrooms and bathrooms, starting from the ${min} two-hour minimum and adding half an hour at ${hr} for each extra bedroom or bathroom. A deep clean in ${city} costs one and a half times the regular price for the same home.`],
        table: { caption: `Shellharbour Cleaning prices in ${city}, GST included`, head: ["Home size", "Regular clean", "Deep clean"], rows: sizeRows() },
      },
      { heading: `How do ${city} cleaning prices compare?`, paragraphs: [market + " " + local] },
      {
        heading: `What does end of lease cleaning cost in ${city}?`,
        paragraphs: [`End of lease cleaning in ${city} with Shellharbour Cleaning is a fixed ${eol}, including GST, set by bedrooms and bathrooms, with carpet steam cleaning added from ${carpet} per room and a free re-clean if the property manager flags a checklist item within 24 hours of the clean.`],
      },
      {
        heading: `How can you save on cleaning in ${city}?`,
        list: ["Book regular visits so each clean takes less time", "Clear benches and floors before the cleaner arrives", "Add only the extras you need, such as inside the fridge or oven", `Book end of lease cleaning after furniture is removed`],
      },
      ...(extra ? [extra] : []),
    ],
    faqs: [
      { q: `Is there a travel fee in ${city}?`, a: `No. Shellharbour Cleaning charges no travel loading or call-out fee in ${city}.` },
      { q: "Do prices include GST?", a: "Yes, except NDIS cleaning, which is GST-free." },
      { q: "Is there a minimum booking?", a: `Yes, ${min}, covering the first two hours.` },
      { q: "Is there a weekly discount?", a: `No frequency discount is published; regular visits are ${hr} an hour.` },
    ],
    sources: [AIRTASKER, QUOTEYARD],
    callAPro: { text: `See your ${city} cleaning price in three taps.`, href: "/services/regular-cleaning/", label: "Regular house cleaning" },
  };
}

export const GUIDES: Guide[] = [
  {
    slug: "end-of-lease-cleaning-checklist",
    title: "End of Lease Cleaning Checklist NSW | Room by Room",
    description: "The room-by-room end of lease and bond cleaning checklist Shellharbour Cleaning works to in Wollongong, Shellharbour, Kiama and Dapto. Print it or book us.",
    h1: "End of lease cleaning checklist (NSW)",
    primaryKeyword: "end of lease cleaning checklist",
    pageType: "checklist",
    updated: "2026-11-19",
    answer: `An end of lease clean covers every room: kitchen benches, cupboards, stovetop, range hood and oven; bathroom showers, tiles, toilets and vanities; bedroom and living area surfaces, skirting boards and floors; and the laundry and hallways. Shellharbour Cleaning works to this checklist across the Illawarra for a fixed ${eol}.`,
    tldr: ["Clean every room to its move-in condition, apart from fair wear and tear.", "Kitchens and bathrooms take the most time and are checked most closely.", `Shellharbour Cleaning does it for a fixed ${eol} with a free re-clean.`],
    sections: [
      { heading: "Kitchen", list: ["Benchtops, splashback and cupboard fronts wiped", "Inside cupboards and drawers wiped out", "Stovetop, range hood and filters degreased", "Oven cleaned inside, including racks and door glass", "Sink, tapware and dishwasher exterior cleaned", "Floor vacuumed and mopped, including under appliances that can be moved"] },
      { heading: "Bathrooms and toilets", list: ["Shower screen, tiles and grout scrubbed", "Bath, basin, vanity and mirror cleaned", "Toilet cleaned inside, outside and behind the base", "Exhaust fan cover dusted", "Soap scum and water marks removed", "Floor mopped"] },
      { heading: "Bedrooms and living areas", list: ["Built-in wardrobes wiped inside and out", "Skirting boards, door frames and doors wiped", "Light switches and power points wiped", "Window sills and tracks cleaned", "Light marks spot-cleaned from walls", "Carpets vacuumed; hard floors mopped"] },
      { heading: "Laundry, hallways and outdoor areas", list: ["Laundry tub, taps and cupboards cleaned", "Hallway floors and skirting boards cleaned", "Balcony or patio swept", "Cobwebs removed from ceilings and corners"] },
      { heading: "What do NSW tenants need to know?", paragraphs: ["NSW Fair Trading explains that a tenant must leave a rental property in the same condition as at the start of the tenancy, apart from fair wear and tear, so tenants in Wollongong, Shellharbour, Kiama and Dapto should compare the clean against the move-in condition report rather than aiming for a brand-new finish."] },
    ],
    faqs: [
      { q: "Does an end of lease clean include carpet cleaning?", a: `No. Carpet steam cleaning is added from ${carpet} per room if your lease or condition report needs it.` },
      { q: "Does it include walls?", a: "Light marks are spot-cleaned. Repainting or repairing walls is not cleaning." },
      { q: "What does it cost?", a: `With Shellharbour Cleaning, a fixed ${eol} by bedrooms and bathrooms.` },
      { q: "What if the agent finds something?", a: "Send photos within 24 hours and Shellharbour Cleaning re-cleans those areas free." },
    ],
    sources: [FAIRTRADING],
    callAPro: { text: `Skip the checklist: Shellharbour Cleaning does it for a fixed ${eol} with a free re-clean.`, href: "/services/end-of-lease-cleaning/", label: "End of lease cleaning" },
  },
  priceGuide(
    "Wollongong",
    "Airtasker's Wollongong page shows a typical cleaner cost of about $120 to $290, with a median of $180.",
    "Marketplace prices depend on what each job poster asks for, so Shellharbour Cleaning publishes one hourly rate and a fixed checklist that Wollongong households can compare like for like.",
    { heading: "Do prices differ in Dapto?", paragraphs: ["Dapto and the 2530 district, including Horsley, Kanahooka and the West Dapto estates, pay the same Shellharbour Cleaning prices as Wollongong, with no travel loading."] },
  ),
  priceGuide(
    "Shellharbour",
    "Airtasker's Shellharbour page shows a typical cleaner cost of about $210 to $300, and Shell Cove about $200 to $366 with a median of $275.",
    "Those marketplace ranges cover very different job sizes, so Shellharbour Cleaning's published rate and room-based prices give Shell Cove, Albion Park and Warilla households a fixed figure to plan with.",
  ),
  priceGuide(
    "Kiama",
    "Airtasker's Kiama page shows a typical cleaner cost of about $150 to $376.",
    "Kiama has many holiday lets, so Shellharbour Cleaning also publishes Airbnb turnover prices: from $121, linen $30 a bedroom, and $50 extra for urgent slots outside 9 am to 9 pm.",
  ),
  {
    slug: "best-cleaning-company-wollongong",
    title: "Best Cleaning Company Wollongong | How to Choose",
    description: "How to choose a cleaning company in Wollongong: marketplace vs franchise vs local business, what to compare, and where Shellharbour Cleaning fits.",
    h1: "How to choose the best cleaning company in Wollongong",
    primaryKeyword: "best cleaning company wollongong",
    pageType: "comparison",
    updated: "2026-11-19",
    answer: "The best cleaning company in Wollongong for you publishes its prices, writes down what each clean includes, offers a re-clean guarantee, and serves your suburb without travel fees. Compare marketplaces, franchises and local businesses on those four points before you book.",
    tldr: ["Compare published price, written checklist, guarantee and coverage.", "Marketplaces offer choice; franchises offer a brand; local businesses offer consistency.", "Shellharbour Cleaning publishes all four: price, checklist, guarantee and areas."],
    sections: [
      {
        heading: "What should you compare?",
        table: {
          caption: "Comparing cleaning options in Wollongong",
          head: ["Criterion", "Marketplace (e.g. Airtasker)", "National franchise", "Local business (e.g. Shellharbour Cleaning)"],
          rows: [
            ["Price", "Set per job by each tasker", "Quoted per franchisee", `Published: ${hr}/hr, end of lease ${eol}`],
            ["What's included", "Agreed per job", "Varies by franchisee", "Written checklist per service"],
            ["Guarantee", "Platform terms", "Brand guarantee, varies", "Re-clean within 24 hours, refund within 15 days"],
            ["Same cleaner", "Not guaranteed", "Often the franchisee", "Can be requested in booking notes"],
          ],
        },
      },
      { heading: "Where does Shellharbour Cleaning fit?", paragraphs: ["Shellharbour Cleaning is a local Illawarra business that suits Wollongong households who want a published price and a written checklist before booking. It is newer than the national franchises and has fewer reviews so far, so households who want a long review history may prefer to start with a one-off clean and judge the result."] },
    ],
    faqs: [
      { q: "Is a marketplace cheaper?", a: "Sometimes per job, but scope varies; compare against a fixed checklist." },
      { q: "What guarantee should I expect?", a: "A written re-clean window, a response time and a refund path." },
      { q: "Should cleaners be insured?", a: "Ask any provider for their insurance details before booking." },
      { q: "Do I need the same cleaner?", a: "Consistency helps; ask whether you can request the same person." },
    ],
    sources: [AIRTASKER],
    callAPro: { text: `Compare us: ${hr}/hr, end of lease ${eol}, free re-clean.`, href: "/pricing/", label: "Shellharbour Cleaning prices" },
  },
  {
    slug: "best-cleaning-company-shellharbour",
    title: "Best Cleaning Company Shellharbour | How to Choose",
    description: "How to choose a cleaner in Shellharbour, Shell Cove and Albion Park: what to compare, questions to ask, and where Shellharbour Cleaning fits.",
    h1: "How to choose a cleaning company in Shellharbour",
    primaryKeyword: "best cleaning company shellharbour",
    pageType: "comparison",
    updated: "2026-11-19",
    answer: "To choose a cleaning company in Shellharbour, check four things: a published price, a written checklist for the service, a re-clean guarantee with a clear time limit, and coverage of your suburb, such as Shell Cove, Albion Park, Oak Flats or Warilla, without travel fees.",
    sections: [
      { heading: "Which questions should you ask a Shellharbour cleaner?", list: ["What is the total price, including GST?", "What does the checklist include, room by room?", "What happens if something is missed?", "Is there a call-out or travel fee for my suburb?", "How do I pay, and when?"] },
      { heading: "How does Shellharbour Cleaning answer them?", paragraphs: [`Shellharbour Cleaning answers each of those questions on its website before you book: regular cleaning is ${hr} an hour including GST, every service has a written checklist, missed areas reported within 24 hours are re-cleaned free, there is no travel fee anywhere in Shellharbour City, and you can pay upfront or after the clean.`] },
    ],
    faqs: [
      { q: "Do you cover Shell Cove and Albion Park?", a: "Yes, and all of Shellharbour City, at the same prices." },
      { q: "What does a regular clean cost?", a: `${hr} an hour with a ${min} minimum.` },
      { q: "Can I pay after the clean?", a: "Yes." },
      { q: "Is there a guarantee?", a: "Yes: re-clean within 24 hours, full refund within 15 days if still unhappy." },
    ],
    callAPro: { text: "See your Shellharbour price in three taps.", href: "/locations/shellharbour/", label: "Cleaners in Shellharbour" },
  },
  {
    slug: "end-of-lease-vs-deep-cleaning",
    title: "End of Lease vs Deep Cleaning | What's the Difference?",
    description: `End of lease cleaning returns a rental to its move-in condition for ${eol}; a deep clean refreshes a lived-in home from ${deep}. Which one you need.`,
    h1: "End of lease cleaning vs deep cleaning",
    primaryKeyword: "end of lease vs deep cleaning",
    pageType: "comparison",
    updated: "2026-11-19",
    answer: `End of lease cleaning prepares an empty rental for the final inspection and costs a fixed ${eol} with Shellharbour Cleaning. A deep clean refreshes a lived-in home, including inside the oven, and starts from ${deep}. Choose end of lease when you are moving out and deep cleaning when you are staying.`,
    tldr: ["End of lease: empty rental, inspection standard, fixed price.", "Deep clean: lived-in home, built-up grime, oven included.", "Both are priced by bedrooms and bathrooms."],
    sections: [
      {
        heading: "How do they compare?",
        table: {
          caption: "End of lease vs deep cleaning with Shellharbour Cleaning",
          head: ["", "End of lease cleaning", "Deep cleaning"],
          rows: [
            ["Best for", "Moving out of a rental", "A home you are staying in"],
            ["Price", `${eol} fixed`, `From ${deep}`],
            ["Inside cupboards", "Included", "Add-on"],
            ["Inside oven", "Included in checklist", "Included"],
            ["Guarantee", "Free re-clean if the agent flags an item", "Free re-clean within 24 hours"],
          ],
        },
      },
    ],
    faqs: [
      { q: "Can a deep clean replace an end of lease clean?", a: "Not for a bond: the end of lease checklist is written for an empty property and inspection." },
      { q: "Which is more expensive?", a: "It depends on home size; both are priced by bedrooms and bathrooms." },
      { q: "Is carpet cleaning included in either?", a: `No. Carpet steam cleaning is from ${carpet} per room.` },
      { q: "Can I book both?", a: "Yes, for example a deep clean before moving in and an end of lease clean when moving out." },
    ],
    callAPro: { text: "Not sure which you need? Both have published prices.", href: "/pricing/", label: "Compare prices" },
  },
  {
    slug: "local-cleaner-vs-marketplace",
    title: "Local Cleaner vs Marketplace | Illawarra Guide",
    description: "Booking a local cleaning business or a marketplace tasker in the Illawarra: price, scope, guarantee and consistency compared.",
    h1: "Local cleaning business vs marketplace cleaner",
    primaryKeyword: "local cleaner vs marketplace",
    pageType: "comparison",
    updated: "2026-11-19",
    answer: "A marketplace lets you compare many individual cleaners on one job post, while a local cleaning business such as Shellharbour Cleaning publishes a fixed price, a written checklist and a guarantee. Choose a marketplace for one-off odd jobs and a local business when you want a predictable result.",
    sections: [
      {
        heading: "How do they compare in the Illawarra?",
        table: {
          caption: "Local business vs marketplace",
          head: ["", "Marketplace", "Local business"],
          rows: [
            ["Price", "Varies per tasker (Illawarra listings about $120–$376)", `Published (${hr}/hr, ${min} minimum)`],
            ["Scope", "Written per job post", "Fixed checklist per service"],
            ["Guarantee", "Platform terms", "Business guarantee"],
            ["Invoice with ABN", "Depends on tasker", "Every booking"],
          ],
        },
      },
    ],
    faqs: [
      { q: "Is a marketplace cheaper?", a: "Sometimes, but compare the scope behind the price." },
      { q: "Do local businesses charge travel?", a: "Shellharbour Cleaning does not, in any area it serves." },
      { q: "Can I get a tax invoice?", a: "Yes, every Shellharbour Cleaning booking includes one." },
      { q: "Which is better for end of lease?", a: "A business with a written checklist and re-clean guarantee." },
    ],
    sources: [AIRTASKER],
    callAPro: { text: "See a fixed price before you book.", href: "/book-now/", label: "See my price" },
  },
  {
    slug: "regular-vs-one-off-cleaning",
    title: "Regular vs One-Off Cleaning | Which Suits You?",
    description: `Regular cleaning keeps a home on track for ${hr} an hour; a one-off or deep clean resets it. How Illawarra households choose.`,
    h1: "Regular cleaning vs one-off cleaning",
    primaryKeyword: "regular vs one-off cleaning",
    pageType: "comparison",
    updated: "2026-11-19",
    answer: `Regular cleaning keeps a home tidy on a weekly, fortnightly or monthly schedule at ${hr} an hour with Shellharbour Cleaning, while a one-off clean handles a single occasion. If the home has not been cleaned for a while, start with a deep clean from ${deep} and then switch to regular visits.`,
    sections: [
      {
        heading: "Which should you book?",
        table: {
          caption: "Regular vs one-off cleaning",
          head: ["", "Regular", "One-off"],
          rows: [
            ["Schedule", "Weekly, fortnightly or monthly", "Single visit"],
            ["Price", `${hr}/hr, ${min} minimum`, `${hr}/hr, ${min} minimum`],
            ["Best for", "Keeping on top of the home", "Visitors, events, a reset"],
          ],
        },
      },
    ],
    faqs: [
      { q: "Is regular cleaning cheaper per visit?", a: "The rate is the same; regular visits usually take less time." },
      { q: "Can I switch from one-off to regular?", a: "Yes, at any time." },
      { q: "What if my home needs a big clean first?", a: `Book a deep clean from ${deep}.` },
      { q: "Is there a lock-in contract?", a: "No. Reschedule or cancel free more than 24 hours ahead." },
    ],
    callAPro: { text: `${hr} an hour, weekly or once.`, href: "/services/regular-cleaning/", label: "Regular house cleaning" },
  },
  {
    slug: "cleaning-glossary",
    title: "Cleaning Glossary | Bond, Vacate, Deep & Steam Cleaning",
    description: "Plain-English definitions of cleaning terms used in the Illawarra: bond clean, vacate clean, deep clean, steam cleaning, NDIS self-managed and more.",
    h1: "Cleaning glossary",
    primaryKeyword: "cleaning terms glossary",
    pageType: "glossary",
    updated: "2026-11-19",
    answer: "This glossary defines the cleaning terms tenants, hosts and NDIS participants in the Illawarra see most often, from bond clean and condition report to hot-water extraction and self-managed NDIS plan, each linked to the matching Shellharbour Cleaning service.",
    sections: [
      {
        heading: "Terms A to Z",
        list: [
          "Add-on: an extra task priced separately from a standard clean, such as inside the fridge.",
          "Airbnb turnover: a clean between holiday-let guests, including linen changes.",
          "Bond clean: another name for an end of lease clean.",
          "Condition report: the record of a rental's condition at move-in, used at the final inspection in NSW.",
          "Deep clean: a detailed clean of a lived-in home that removes built-up grime.",
          "End of lease clean: a clean of an empty rental to its move-in condition before the final inspection.",
          "Fair wear and tear: normal deterioration from everyday use that a NSW tenant does not have to fix.",
          "Final inspection: the property manager's check when a tenant moves out.",
          "Fixed price: a price agreed before the clean that does not change with time taken.",
          "GST-free: no GST charged, as for NDIS cleaning.",
          "Hot-water extraction: the professional carpet cleaning method usually called steam cleaning.",
          "Move-in clean: a deep clean of a home before you unpack.",
          "NDIS self-managed plan: an NDIS plan where the participant pays providers and claims the cost.",
          "One-off clean: a single clean, not part of a schedule.",
          "Re-clean guarantee: a promise to return and clean missed areas at no cost.",
          "Regular clean: a clean on a weekly, fortnightly or monthly schedule.",
          "Rental Bonds Online: the NSW Fair Trading service for lodging and claiming bonds.",
          "Spot-cleaning: removing light marks from walls or surfaces without repainting.",
          "Travel loading: a fee for travel to a suburb; Shellharbour Cleaning does not charge one.",
          "Vacate clean: another name for an end of lease clean.",
        ],
      },
    ],
    faqs: [
      { q: "Is a bond clean the same as an end of lease clean?", a: "Yes. Bond, vacate and end of lease clean all mean the same service." },
      { q: "Is steam cleaning the same as hot-water extraction?", a: "Yes, for carpets." },
      { q: "What is fair wear and tear?", a: "Normal deterioration from everyday use, which a NSW tenant does not have to fix." },
      { q: "What does GST-free mean for NDIS cleaning?", a: "No GST is added to the price." },
    ],
    sources: [FAIRTRADING],
    callAPro: { text: "Know what you need? See your price.", href: "/book-now/", label: "See my price" },
  },
  {
    slug: "illawarra-cleaning-prices-statistics",
    title: "Illawarra Cleaning Prices 2026 | Statistics & Ranges",
    description: "Cleaning price figures for Wollongong, Shellharbour, Kiama and Shell Cove in 2026: published rates, marketplace ranges and bond costs, with sources.",
    h1: "Illawarra cleaning prices: 2026 figures",
    primaryKeyword: "illawarra cleaning prices",
    pageType: "guide",
    updated: "2026-11-19",
    answer: `In 2026, Illawarra marketplace listings show cleaner prices of about $120 to $376 a job depending on town, while Shellharbour Cleaning publishes ${hr} an hour, a ${min} minimum, end of lease cleaning at ${eol} and NDIS cleaning at ${ndis} an hour GST-free.`,
    sections: [
      {
        heading: "Marketplace cleaner prices by town",
        table: {
          caption: "Typical cleaner cost shown on Airtasker town pages (November 2026)",
          head: ["Town", "Typical range", "Median"],
          rows: [
            ["Wollongong", "$120–$290", "$180"],
            ["Shellharbour", "$210–$300", "—"],
            ["Shell Cove", "$200–$366", "$275"],
            ["Kiama", "$150–$376", "—"],
          ],
        },
      },
      {
        heading: "Bond cleaning ranges on the South Coast",
        table: { caption: "The Quote Yard South Coast guide", head: ["Home", "Range"], rows: [["2-bedroom unit", "$310–$530"], ["3–4 bedroom house", "$480–$950"]] },
      },
      {
        heading: "Shellharbour Cleaning published prices",
        table: {
          caption: "GST included unless stated",
          head: ["Service", "Price"],
          rows: [
            ["Regular cleaning", `${hr}/hr, ${min} minimum`],
            ["3 bed, 2 bath regular", ex],
            ["Deep cleaning", `From ${deep}`],
            ["End of lease", eol],
            ["Carpet steam", `From ${carpet} per room`],
            ["NDIS cleaning", `${ndis}/hr, GST-free`],
          ],
        },
      },
    ],
    faqs: [
      { q: "Where do the marketplace figures come from?", a: "Airtasker town pages and The Quote Yard's South Coast guide, checked November 2026." },
      { q: "Will you publish your own booking averages?", a: "Yes, once at least 30 bookings are completed." },
      { q: "Are these prices GST inclusive?", a: "Shellharbour Cleaning's are, except NDIS. Marketplace figures are as listed." },
      { q: "How often is this page updated?", a: "At least every January and whenever prices change." },
    ],
    sources: [AIRTASKER, QUOTEYARD],
    callAPro: { text: "See your own price, not a range.", href: "/book-now/", label: "See my price" },
  },
];

export function getGuide(slug: string): Guide {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide: ${slug}`);
  return g;
}
