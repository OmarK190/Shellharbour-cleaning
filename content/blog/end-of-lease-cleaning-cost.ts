import type { Post } from "./types";
import { PRICE_FROM, END_OF_LEASE_MAX_CENTS, formatAud } from "@/lib/pricing/rates";

const from = formatAud(PRICE_FROM["end-of-lease-cleaning"]!); // $190
const to = formatAud(END_OF_LEASE_MAX_CENTS); // $410
const carpet = formatAud(PRICE_FROM["carpet-steam-cleaning"]!); // $50

export const endOfLeaseCleaningCost: Post = {
  slug: "end-of-lease-cleaning-cost",
  title: "End of Lease Cleaning Cost Illawarra | 2026 Price Guide",
  description: `End of lease cleaning in Wollongong, Shellharbour, Kiama and Dapto costs ${from} to ${to} with Shellharbour Cleaning. What changes the price and how to save.`,
  h1: "How much does end of lease cleaning cost in Wollongong and the Illawarra?",
  primaryKeyword: "end of lease cleaning cost",
  published: "2026-11-19",
  updated: "2026-11-19",
  author: { name: "Shellharbour Cleaning team", role: "End of lease cleaning, Illawarra" },
  answer: `End of lease cleaning with Shellharbour Cleaning costs a fixed ${from} to ${to}, including GST, depending on how many bedrooms and bathrooms the home has. The price covers the standard bond-clean checklist across Wollongong, Shellharbour, Kiama and Dapto, with carpet steam cleaning and other extras added only if you choose them.`,
  tldr: [
    `Shellharbour Cleaning charges a fixed ${from}–${to} for an end of lease clean, set by bedrooms and bathrooms.`,
    "Carpet steam cleaning, heavy oven grime and extra rooms are the add-ons that change the final cost most.",
    "A fixed price plus a written re-clean guarantee costs less overall than a cheap hourly quote that needs a second visit.",
  ],
  sections: [
    {
      heading: "What does an end of lease clean cost in the Illawarra?",
      paragraphs: [
        `An end of lease clean booked with Shellharbour Cleaning costs between ${from} and ${to}, including GST, for homes in Wollongong, Shellharbour, Kiama and Dapto. The exact figure is fixed before the booking is confirmed and depends on the number of bedrooms and bathrooms, so a one-bedroom unit sits at the lower end and a large family home sits at the upper end.`,
        `Marketplace prices for end of lease cleaning in the Illawarra vary far more than fixed-price quotes. Airtasker listings for Shellharbour show end of lease jobs posted between about $150 and $500, and The Quote Yard's South Coast guide puts a bond clean for a two-bedroom unit at $310 to $530 and a three- or four-bedroom house at $480 to $950, so the Shellharbour Cleaning range of ${from} to ${to} sits at or below those figures.`,
      ],
      table: {
        caption: "End of lease cleaning prices in the Illawarra (GST included)",
        head: ["Source", "Price shown", "What the price covers"],
        rows: [
          ["Shellharbour Cleaning", `${from}–${to} fixed`, "Standard bond-clean checklist, set by bedrooms and bathrooms"],
          ["Airtasker, Shellharbour listings", "About $150–$500", "Individual job posts; scope set by each tasker"],
          ["The Quote Yard, South Coast guide", "$310–$530 (2-bed unit), $480–$950 (3–4 bed house)", "Indicative ranges, not quotes"],
        ],
      },
    },
    {
      heading: "What changes the price of a bond clean?",
      paragraphs: [
        "The biggest factor in the price of a bond clean in Wollongong or Shellharbour is the size of the home, measured by bedrooms and bathrooms, because each bathroom adds shower screens, tiles, grout, toilets and exhaust fans that take time to bring back to inspection standard. Shellharbour Cleaning uses bedrooms and bathrooms as the only inputs to its fixed end of lease price.",
        `Carpet steam cleaning changes the total more than any other extra on an Illawarra end of lease job. Tenants in NSW should check their lease and the move-in condition report to see whether carpet cleaning is needed, and Shellharbour Cleaning prices carpet steam cleaning from ${carpet} per room so tenants add only the rooms that are carpeted rather than paying a flat carpet fee.`,
        "The condition of the oven, the amount of mould in bathrooms and how much furniture is still in the home also affect how long an end of lease clean takes in Kiama, Dapto or Wollongong. Shellharbour Cleaning asks tenants to remove furniture and rubbish before the clean, because a cleaner cannot clean floors and skirting boards that are hidden under boxes.",
      ],
    },
    {
      heading: "Is a fixed price or an hourly rate cheaper for end of lease cleaning?",
      paragraphs: [
        `A fixed end of lease price is usually cheaper overall for tenants in the Illawarra because the risk of the job running over sits with the cleaning company, not the tenant. Shellharbour Cleaning quotes a fixed ${from} to ${to} by home size, so a tenant in Shellharbour or Wollongong knows the full cost before the cleaner arrives and does not pay more if the oven takes longer than expected.`,
        "An hourly end of lease quote can look cheaper in Wollongong until the clean runs past the estimated hours or the property manager asks for a second visit. Tenants comparing quotes should ask whether the price is fixed, what the checklist covers, and whether a free re-clean is included if the agent flags something at the final inspection.",
      ],
    },
    {
      heading: "What does the Shellharbour Cleaning end of lease price include?",
      paragraphs: [
        "The Shellharbour Cleaning end of lease price includes the kitchen benchtops, splashback, cupboard fronts, stovetop, range hood and sink, every bathroom's shower, tiles, toilet, vanity and mirror, and the bedrooms, living areas, laundry and hallways, with skirting boards, door frames and light switches wiped and floors vacuumed and mopped throughout the home.",
        "Extras that sit outside the standard Shellharbour Cleaning end of lease checklist include carpet steam cleaning, inside the fridge, inside cupboards, interior windows and wall spot-cleaning beyond light marks. Each extra has its own published price, so a tenant in Kiama or Dapto can see exactly what each addition costs before booking rather than finding it on the invoice.",
      ],
    },
    {
      heading: "How can tenants save money on end of lease cleaning in NSW?",
      paragraphs: [
        "Tenants in NSW can save money on end of lease cleaning by booking the clean after all furniture and rubbish have been removed, because Shellharbour Cleaning and most Illawarra cleaners can then finish the job faster and without working around boxes. Booking a weekday slot a few days before the final inspection also leaves room to fix anything the property manager points out.",
        "Reading the original condition report before booking helps tenants in Wollongong and Shellharbour avoid paying for cleaning the property never needed. NSW Fair Trading explains that a tenant must leave the premises in the same condition as at the start of the tenancy, apart from fair wear and tear, so marks that were recorded at move-in do not need to be removed at move-out.",
      ],
    },
    {
      heading: "What happens if the agent is not happy after the clean?",
      paragraphs: [
        "If a property manager in the Illawarra flags something after a Shellharbour Cleaning end of lease clean, the tenant sends photos of the areas within 24 hours and Shellharbour Cleaning replies within 48 hours and re-cleans those areas at no cost. If the tenant is still unhappy after the re-clean, Shellharbour Cleaning refunds the clean in full within 15 days.",
        "Bond disputes in NSW are handled through NSW Fair Trading's Rental Bonds Online and, where a tenant and landlord cannot agree, the NSW Civil and Administrative Tribunal. A written cleaning checklist and a tax invoice from Shellharbour Cleaning give a tenant in Wollongong, Shellharbour, Kiama or Dapto clear evidence of what was cleaned and when.",
      ],
    },
  ],
  callAPro: {
    text: `Moving out of a home in Wollongong, Shellharbour, Kiama or Dapto? See your fixed end of lease price from ${from} in three taps, with a free re-clean if the agent flags anything.`,
    href: "/services/end-of-lease-cleaning/",
    label: "End of lease cleaning prices",
  },
  faqs: [
    {
      q: "How much is a bond clean for a 2-bedroom unit in Wollongong?",
      a: `A bond clean for a two-bedroom unit with Shellharbour Cleaning sits toward the lower end of the fixed ${from} to ${to} range, with the exact figure set by the number of bathrooms and shown before you book.`,
    },
    {
      q: "Does end of lease cleaning include carpet cleaning?",
      a: `No. Carpet steam cleaning is an add-on priced from ${carpet} per room, so you only pay for the rooms that have carpet.`,
    },
    {
      q: "How long does an end of lease clean take?",
      a: "A small unit usually takes a few hours and a large house can take most of a day, depending on bedrooms, bathrooms and the oven and bathroom condition. Shellharbour Cleaning prices by home size, so the time taken does not change the price.",
    },
    {
      q: "Is GST included in the price?",
      a: "Yes. Every Shellharbour Cleaning price includes GST, and each booking comes with a tax invoice showing the business ABN.",
    },
    {
      q: "When should I book my end of lease clean?",
      a: "Book the clean for after furniture is removed and a day or two before the final inspection, so there is time for a free re-clean if the agent asks for one.",
    },
  ],
  sources: [
    { label: "NSW Fair Trading — ending a tenancy and getting your bond back", url: "https://www.fairtrading.nsw.gov.au/housing-and-property/renting" },
    { label: "Airtasker — end of lease cleaning in Shellharbour", url: "https://www.airtasker.com/au/services/end-of-lease-cleaning/shellharbour-nsw/" },
    { label: "The Quote Yard — hire a cleaner on the South Coast", url: "https://www.thequoteyard.com.au/services/hire-cleaner-south-coast-nsw" },
  ],
  related: ["how-much-does-carpet-cleaning-cost", "house-cleaning-prices-wollongong"],
};
