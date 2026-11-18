import type { Post } from "./types";
import { PRICE_FROM, formatAud } from "@/lib/pricing/rates";

const ndis = formatAud(PRICE_FROM["ndis-cleaning-services"]!); // $55

export const doesNdisCoverCleaning: Post = {
  slug: "does-ndis-cover-cleaning",
  title: "Does NDIS Cover Cleaning? Illawarra Guide for Participants",
  description: `NDIS plans can fund cleaning when it is reasonable and necessary. Shellharbour Cleaning cleans for self-managed participants at ${ndis} an hour, GST-free.`,
  h1: "Does the NDIS cover cleaning? A guide for Illawarra participants",
  primaryKeyword: "does ndis cover cleaning",
  published: "2026-11-19",
  updated: "2026-11-19",
  author: { name: "Shellharbour Cleaning team", role: "NDIS cleaning, Illawarra" },
  answer: `Yes, the NDIS can fund house cleaning when it is reasonable and necessary because of a participant's disability, usually under Core Supports for household tasks. Shellharbour Cleaning cleans for self-managed NDIS participants in Wollongong, Shellharbour, Kiama and Dapto at ${ndis} an hour, GST-free, with invoices showing our ABN.`,
  tldr: [
    "The NDIS can fund cleaning when it is reasonable and necessary because of disability, usually from Core Supports.",
    "How you pay depends on plan management: self-managed and plan-managed participants have more choice of provider.",
    `Shellharbour Cleaning charges self-managed participants ${ndis} an hour, GST-free, across the Illawarra.`,
  ],
  sections: [
    {
      heading: "Can NDIS funding pay for house cleaning?",
      paragraphs: [
        "NDIS funding can pay for house cleaning when the National Disability Insurance Agency agrees the support is reasonable and necessary because of the participant's disability. Cleaning is generally funded as help with household tasks within Core Supports, which covers everyday activities a participant cannot do, or cannot do safely, because of their disability.",
        "Whether a particular NDIS participant in Wollongong or Shellharbour can use plan funds for cleaning depends on what is written in their own NDIS plan. Participants should check their plan, speak with their support coordinator or plan manager, or contact the NDIS, because Shellharbour Cleaning cannot decide what a plan covers.",
      ],
    },
    {
      heading: "Does plan management change who can clean for you?",
      paragraphs: [
        "The way an NDIS plan is managed changes which cleaning providers a participant in the Illawarra can use. Self-managed and plan-managed participants can generally choose providers who are not registered with the NDIS Quality and Safeguards Commission, while participants whose plans are managed by the NDIA can generally use only registered providers.",
        `Shellharbour Cleaning currently cleans for self-managed NDIS participants in Wollongong, Shellharbour, Kiama and Dapto. Self-managed participants pay the Shellharbour Cleaning invoice of ${ndis} an hour, GST-free, and then claim the cost from their NDIS funding through the NDIS portal, keeping the invoice for their records.`,
      ],
      table: {
        caption: "NDIS plan management and choice of cleaning provider",
        head: ["Plan management type", "Who pays the provider", "Can use non-registered providers?"],
        rows: [
          ["Self-managed", "The participant, then claims from the NDIS", "Generally yes"],
          ["Plan-managed", "The plan manager", "Generally yes"],
          ["NDIA-managed (agency-managed)", "The NDIA", "Generally no — registered providers only"],
        ],
      },
    },
    {
      heading: "What does an NDIS cleaning visit include?",
      paragraphs: [
        "An NDIS cleaning visit from Shellharbour Cleaning covers the household tasks a participant in the Illawarra needs help with, such as cleaning the kitchen, bathroom and toilet, vacuuming and mopping floors, dusting surfaces and changing bed linen. The participant and the cleaner agree the task list at the first visit so each clean focuses on what matters most.",
        "NDIS participants booking with Shellharbour Cleaning in Wollongong, Shellharbour, Kiama and Dapto can ask in their booking notes for the same cleaner on regular visits, because consistency helps many people feel comfortable with who is in their home. Notes about access, pets, preferred products and routines travel with every booking so each visit follows the same plan.",
      ],
    },
    {
      heading: "What cleaning does the NDIS usually not fund?",
      paragraphs: [
        "The NDIS generally does not fund supports that are not related to a participant's disability or that are ordinary day-to-day living costs every household pays, so a one-off spring clean that anyone would book is unlikely to be funded. Participants in Wollongong and Shellharbour should match the cleaning they request to the household tasks their plan describes.",
        "End of lease cleaning, carpet steam cleaning and other one-off jobs are usually treated differently from regular household help in an NDIS plan, and participants in Kiama and Dapto should check with their plan manager or support coordinator before booking them with plan funds. Shellharbour Cleaning can quote these jobs separately at the published prices for participants paying privately.",
      ],
    },
    {
      heading: "How much does NDIS cleaning cost?",
      paragraphs: [
        `NDIS cleaning with Shellharbour Cleaning costs ${ndis} an hour, GST-free, for self-managed participants in Wollongong, Shellharbour, Kiama and Dapto. Cleaning provided to an NDIS participant under their plan is GST-free, which is why the NDIS rate is shown without GST while other Shellharbour Cleaning prices include it.`,
        "The NDIS publishes Pricing Arrangements and Price Limits that set the maximum amounts registered providers can charge for each support item, and self-managed participants can use those limits as a guide when comparing cleaning providers in the Illawarra. Shellharbour Cleaning shows its NDIS hourly rate before booking so participants can check it against their budget.",
      ],
    },
    {
      heading: "How do you book NDIS cleaning in the Illawarra?",
      paragraphs: [
        "Booking NDIS cleaning with Shellharbour Cleaning starts with choosing NDIS cleaning, the day and the time window, and adding notes about the participant's needs and access. A participant, a family member, a carer or a support coordinator can make the booking on the participant's behalf for homes in Wollongong, Shellharbour, Kiama and Dapto.",
        "Each Shellharbour Cleaning NDIS booking produces a tax invoice that lists the date, the hours, the hourly rate, the business ABN and the address of the clean. Self-managed participants in the Illawarra use that invoice to claim the cost from their NDIS funding and to keep the records the NDIS asks self-managing participants to keep.",
      ],
    },
  ],
  callAPro: {
    text: `Self-managed NDIS participant in Wollongong, Shellharbour, Kiama or Dapto? Book NDIS cleaning at ${ndis} an hour, GST-free, with an invoice ready to claim.`,
    href: "/services/ndis-cleaning-services/",
    label: "NDIS cleaning services",
  },
  faqs: [
    {
      q: "Is NDIS cleaning GST-free?",
      a: `Yes. Cleaning supplied to an NDIS participant under their plan is GST-free, and Shellharbour Cleaning charges ${ndis} an hour with no GST added.`,
    },
    {
      q: "Is Shellharbour Cleaning a registered NDIS provider?",
      a: "Shellharbour Cleaning currently serves self-managed NDIS participants, who can choose providers that are not registered. Check your plan management type before booking.",
    },
    {
      q: "Can a carer or support coordinator book for me?",
      a: "Yes. A family member, carer or support coordinator can book on a participant's behalf and add notes about access and needs.",
    },
    {
      q: "Can I ask for the same cleaner each visit?",
      a: "Yes. Ask for the same cleaner in your booking notes and Shellharbour Cleaning will roster them when they are available, and tell you in advance if someone else will attend.",
    },
  ],
  sources: [
    { label: "NDIS — Reasonable and necessary supports", url: "https://www.ndis.gov.au/understanding/supports-funded-ndis/reasonable-and-necessary-supports" },
    { label: "NDIS — Ways to manage your funding", url: "https://www.ndis.gov.au/participants/using-your-plan/managing-your-plan" },
    { label: "NDIS — Pricing arrangements and price limits", url: "https://www.ndis.gov.au/providers/pricing-arrangements" },
  ],
  related: ["house-cleaning-prices-wollongong", "end-of-lease-cleaning-cost"],
};
