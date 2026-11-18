import type { Post } from "./types";
import { RATES, PRICE_FROM, EXAMPLE_3BED_2BATH_REGULAR_CENTS, formatAud } from "@/lib/pricing/rates";

const hourly = formatAud(RATES.regularHourlyCents); // $60.50
const minimum = formatAud(RATES.regularMinimumCents); // $121
const example = formatAud(EXAMPLE_3BED_2BATH_REGULAR_CENTS); // $211.75
const deep = formatAud(PRICE_FROM["deep-cleaning"]!); // $181.50

export const houseCleaningPricesWollongong: Post = {
  slug: "house-cleaning-prices-wollongong",
  title: "House Cleaning Prices Wollongong | What a Cleaner Costs",
  description: `A house cleaner in Wollongong and the Illawarra costs ${hourly} an hour with Shellharbour Cleaning, ${minimum} minimum. Compare hourly, flat and marketplace prices.`,
  h1: "How much does a house cleaner cost in Wollongong and the Illawarra?",
  primaryKeyword: "house cleaning prices",
  published: "2026-11-19",
  updated: "2026-11-19",
  author: { name: "Shellharbour Cleaning team", role: "Regular house cleaning, Illawarra" },
  answer: `A house cleaner from Shellharbour Cleaning costs ${hourly} an hour, including GST, with a ${minimum} minimum covering the first two hours, across Wollongong, Shellharbour, Kiama and Dapto. A regular clean of a three-bedroom, two-bathroom home costs ${example} a visit, and deep cleans start from ${deep}.`,
  tldr: [
    `Shellharbour Cleaning charges ${hourly} an hour with a ${minimum} minimum; a 3-bed, 2-bath regular clean is ${example}.`,
    "Illawarra marketplace listings show cleaner prices ranging from about $120 to $376 a job, with wide variation in scope.",
    "Home size, condition, frequency and add-ons are what move the price of a house clean.",
  ],
  sections: [
    {
      heading: "What does a house cleaner cost per hour in Wollongong?",
      paragraphs: [
        `A house cleaner booked with Shellharbour Cleaning costs ${hourly} an hour, including GST, in Wollongong, Shellharbour, Kiama and Dapto. The minimum booking is ${minimum}, which covers the first two hours, and there is no call-out fee, booking fee or travel loading anywhere in the four Illawarra areas Shellharbour Cleaning serves.`,
        `A regular clean of a three-bedroom, two-bathroom home in the Illawarra costs ${example} a visit with Shellharbour Cleaning, which is the worked example published on the pricing page. Smaller units cost less and larger homes cost more, because each extra bedroom and bathroom adds time to the clean.`,
      ],
    },
    {
      heading: "How do Illawarra cleaning prices compare?",
      paragraphs: [
        "Marketplace listings give a rough picture of what households in the Illawarra pay for a cleaner. Airtasker's Wollongong page shows a typical cleaner cost of about $120 to $290 with a median of $180, its Shellharbour page shows $210 to $300, Shell Cove shows $200 to $366 with a median of $275, and Kiama shows $150 to $376.",
        `Marketplace prices for cleaning in Wollongong and Shellharbour are set by individual job posters and taskers, so the scope behind each figure varies widely. Shellharbour Cleaning publishes ${hourly} an hour with a fixed checklist for every regular clean, which lets a household compare like with like instead of comparing a two-hour tidy with a four-hour deep clean.`,
      ],
      table: {
        caption: "House cleaning prices in the Illawarra (GST included where stated)",
        head: ["Source", "Price shown", "Notes"],
        rows: [
          ["Shellharbour Cleaning", `${hourly}/hr, ${minimum} minimum; ${example} for 3 bed, 2 bath`, "Published rate and checklist"],
          ["Airtasker, Wollongong", "About $120–$290, median $180", "Individual job posts"],
          ["Airtasker, Shellharbour", "About $210–$300", "Individual job posts"],
          ["Airtasker, Shell Cove", "About $200–$366, median $275", "Individual job posts"],
          ["Airtasker, Kiama", "About $150–$376", "Individual job posts"],
        ],
      },
    },
    {
      heading: "Is hourly or flat-rate cleaning better value?",
      paragraphs: [
        `Hourly cleaning suits Wollongong and Shellharbour households that want regular upkeep and are happy to agree the time each visit takes. Shellharbour Cleaning charges ${hourly} an hour for regular and one-off cleans, and the cleaner contacts the customer before going past the booked hours, so nobody receives a larger invoice than expected.`,
        `Fixed pricing suits one-off jobs in the Illawarra where the scope is clear, such as end of lease cleaning and deep cleaning. Shellharbour Cleaning fixes deep cleaning from ${deep} and end of lease cleaning by bedrooms and bathrooms, because those jobs follow a set checklist and the customer benefits from knowing the full cost before the cleaner arrives.`,
      ],
    },
    {
      heading: "What affects the price of a house clean?",
      paragraphs: [
        "Home size is the biggest factor in the price of a house clean in Kiama, Dapto, Shellharbour or Wollongong, measured by bedrooms, bathrooms and living areas. Bathrooms take the most time per room because shower screens, tiles, grout and toilets need detailed cleaning, so a home with three bathrooms costs more to clean than a home with one.",
        "The condition of the home and how often it is cleaned also change what a house clean costs in the Illawarra. A home cleaned every week or fortnight by Shellharbour Cleaning takes less time per visit than a home that has not been cleaned for months, because grime and soap scum have less time to build up between visits.",
        "Add-ons change the total of an Illawarra house clean when the customer chooses them. Shellharbour Cleaning lists inside-oven cleaning, inside-fridge cleaning, inside cupboards, interior windows and carpet steam cleaning as separate add-ons with published prices, so a customer pays for exactly the extra work they want and nothing they did not ask for.",
      ],
    },
    {
      heading: "How can you keep house cleaning costs down?",
      paragraphs: [
        "Booking a regular clean every week or fortnight keeps house cleaning costs down for Wollongong and Shellharbour households, because each visit takes less time when grime has not built up. Clearing benches, floors and bathroom surfaces of clutter before the cleaner arrives also lets Shellharbour Cleaning spend the booked time cleaning rather than tidying.",
        "Choosing only the add-ons you need keeps the cost of an Illawarra house clean predictable. Shellharbour Cleaning shows the price of each add-on before booking and does no extra work without the customer's agreement, so households in Kiama, Dapto, Shellharbour and Wollongong stay in control of the final amount.",
      ],
    },
  ],
  callAPro: {
    text: `See your house cleaning price for Wollongong, Shellharbour, Kiama or Dapto in three taps: ${hourly} an hour, ${minimum} minimum, GST included.`,
    href: "/services/regular-cleaning/",
    label: "Regular house cleaning",
  },
  faqs: [
    {
      q: "Is there a minimum charge?",
      a: `Yes. Shellharbour Cleaning has a ${minimum} minimum for regular and one-off cleans, which covers the first two hours.`,
    },
    {
      q: "Do prices include GST?",
      a: "Yes. Every Shellharbour Cleaning house cleaning price includes GST, and each booking comes with a tax invoice showing the business ABN.",
    },
    {
      q: "Do you offer weekly or fortnightly discounts?",
      a: `Shellharbour Cleaning does not publish a frequency discount. Regular visits are charged at the same ${hourly} hourly rate, and frequent cleans usually take less time per visit.`,
    },
    {
      q: "Are prices the same across Wollongong, Shellharbour, Kiama and Dapto?",
      a: "Yes. The same published prices apply across all four areas, with no travel loading.",
    },
  ],
  sources: [
    { label: "Airtasker — cleaners in Wollongong", url: "https://www.airtasker.com/cleaning/wollongong-nsw" },
    { label: "Airtasker — cleaners in Shellharbour", url: "https://www.airtasker.com/au/services/cleaning/shellharbour-nsw" },
    { label: "Airtasker — cleaners in Shell Cove", url: "https://www.airtasker.com/au/services/cleaning/shell-cove-nsw/" },
    { label: "Airtasker — cleaners in Kiama", url: "https://www.airtasker.com/au/services/cleaning/kiama-nsw" },
  ],
  related: ["end-of-lease-cleaning-cost", "does-ndis-cover-cleaning"],
};
