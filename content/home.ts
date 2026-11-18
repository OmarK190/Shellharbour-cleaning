// Homepage copy (PRD Story 1.6). Every figure comes from lib/pricing/rates.ts.
// Rules: answer first, published facts only, no unverified safety or insurance claims (LB8 open).
import {
  RATES,
  PRICE_FROM,
  END_OF_LEASE_MAX_CENTS,
  EXAMPLE_3BED_2BATH_REGULAR_CENTS,
  formatAud,
} from "@/lib/pricing/rates";

const hourly = formatAud(RATES.regularHourlyCents); // $60.50
const minimum = formatAud(RATES.regularMinimumCents); // $121
const eolFrom = formatAud(PRICE_FROM["end-of-lease-cleaning"]!); // $190
const eolTo = formatAud(END_OF_LEASE_MAX_CENTS); // $410
const example = formatAud(EXAMPLE_3BED_2BATH_REGULAR_CENTS); // $211.75
const deepFrom = formatAud(PRICE_FROM["deep-cleaning"]!); // $181.50

export type HomeService = { slug: string; name: string; fromCents: number | null; unit?: string; href: string; line: string };
export type Review = { text: string; firstName: string; suburb: string; service: string; date: string; source: string };
export type Cleaner = { firstName: string; years: number; hubs: string[]; photoId: string };

const service = (slug: string, name: string, line: string, unit?: string): HomeService => ({
  slug,
  name,
  fromCents: PRICE_FROM[slug] ?? null,
  unit,
  href: `/services/${slug}/`,
  line,
});

export const HOME = {
  h1: "House cleaning in Shellharbour, Kiama, Dapto and Wollongong",

  intro: `Shellharbour Cleaning cleans homes, rentals and small offices across Shellharbour, Kiama, Dapto and Wollongong. A regular clean is ${hourly} an hour including GST, with a ${minimum} minimum that covers the first two hours, and end of lease cleans are a fixed ${eolFrom} to ${eolTo} depending on bedrooms and bathrooms. You see your price before we ask for your name. If we miss something, send photos within 24 hours and we re-clean those areas free.`,

  trust: [
    "Every price published, GST included",
    "Free re-clean if you report within 24 hours",
    "Pay upfront or after the clean",
    "Bookings 9:00 AM–9:00 PM, 7 days",
  ],

  services: [
    service(
      "end-of-lease-cleaning",
      "End of lease cleaning",
      `Fixed ${eolFrom} to ${eolTo} by home size, worked to the checklist agents use at the outgoing inspection, with re-clean cover if they flag anything.`,
    ),
    service(
      "regular-cleaning",
      "Regular house cleaning",
      `Weekly, fortnightly or monthly visits at ${hourly} an hour. A 3-bedroom, 2-bathroom home costs ${example} a visit.`,
    ),
    service(
      "deep-cleaning",
      "Deep cleaning",
      `From ${deepFrom}, priced by bedrooms and bathrooms. Inside the oven is included, plus skirting boards, light switches and built-up grime.`,
    ),
    service(
      "carpet-steam-cleaning",
      "Carpet steam cleaning",
      "Hot-water extraction priced per room, booked on its own or added to an end of lease clean.",
      "per room",
    ),
    service(
      "ndis-cleaning-services",
      "NDIS cleaning",
      "Hourly, GST-free cleaning for self-managed NDIS participants, with an invoice that lists our ABN.",
      "per hour",
    ),
    service(
      "airbnb-cleaning",
      "Airbnb and holiday-let cleaning",
      `Turnovers from ${minimum}, linen changed for $30 a bedroom, and an urgent slot outside 9 am–9 pm for $50 extra.`,
    ),
    service(
      "office-cleaning",
      "Office cleaning",
      "Scheduled cleans for small offices and shopfronts, quoted per site after we see the space.",
    ),
  ],

  steps: [
    {
      title: "See your price",
      text: "Pick the service, bedrooms and bathrooms. The price appears straight away, with GST included and nothing added later for travel or call-outs.",
    },
    {
      title: "Choose a day",
      text: "Pick a date and time window that suits you. You can reschedule free up to 24 hours before the clean starts.",
    },
    {
      title: "Check the result",
      text: "Walk through when we finish. If anything was missed, send photos within 24 hours and we come back to re-clean those areas.",
    },
  ] as const,

  rooms: [
    {
      name: "Kitchen",
      tasks: [
        "Benchtops, splashback and cupboard fronts wiped",
        "Stovetop and range hood exterior degreased",
        "Sink and tapware cleaned and polished",
        "Microwave cleaned inside and out",
        "Floors vacuumed and mopped",
      ],
    },
    {
      name: "Bathrooms",
      tasks: [
        "Shower screen, tiles and grout lines scrubbed",
        "Toilet cleaned inside, outside and behind the base",
        "Vanity, basin and mirror cleaned",
        "Exhaust fan cover dusted",
        "Floors mopped",
      ],
    },
    {
      name: "Bedrooms and living areas",
      tasks: [
        "Surfaces and shelves dusted",
        "Mirrors and glass tables cleaned",
        "Skirting boards and door frames wiped",
        "Beds made with your linen on request",
        "Carpets vacuumed, hard floors mopped",
      ],
    },
    {
      name: "Laundry and entry",
      tasks: ["Tub and taps cleaned", "Washer and dryer exteriors wiped", "Light switches and door handles wiped", "Entry and hallway floors vacuumed and mopped"],
    },
  ],

  notIncluded:
    "A standard clean does not cover rubbish removal beyond your bins, pest control, repairs or gardening. Inside the oven, inside the fridge, inside cupboards, interior windows and carpet steam cleaning are add-ons with their own published prices, so you can add only what you need. If the job looks like running over the booked time, your cleaner asks you before doing any extra work.",

  areas: [
    {
      name: "Shellharbour",
      href: "/locations/shellharbour/",
      text: "Shellharbour City, including Shell Cove, Albion Park, Oak Flats, Warilla, Flinders, Barrack Heights, Lake Illawarra and Windang.",
    },
    {
      name: "Kiama",
      href: "/locations/kiama/",
      text: "Kiama Municipality, including Kiama Downs, Minnamurra, Jamberoo, Gerringong and Gerroa, plus holiday-let turnovers between guests.",
    },
    {
      name: "Dapto",
      href: "/locations/dapto/",
      text: "The 2530 district: Dapto, Horsley, Kanahooka, Koonawarra, Brownsville, Penrose, Haywards Bay and the newer West Dapto estates.",
    },
    {
      name: "Wollongong",
      href: "/locations/wollongong/",
      text: "Wollongong city and suburbs from Thirroul and Corrimal through Figtree and Unanderra to Warrawong and Port Kembla.",
    },
  ],

  guarantee:
    "If something on the checklist was missed, tell us within 24 hours of the clean and include photos of the areas. We reply within 48 hours and re-clean those areas at no cost. If you are still unhappy after the re-clean, we refund the clean in full within 15 days.",

  faqs: [
    {
      q: "How much does house cleaning cost in Shellharbour and Wollongong?",
      a: `A regular house clean is ${hourly} an hour including GST, with a ${minimum} minimum that covers up to two hours. A 3-bedroom, 2-bathroom home is ${example} a visit. Deep cleans start at ${deepFrom}.`,
    },
    {
      q: "How much is an end of lease clean?",
      a: `End of lease cleaning is a fixed ${eolFrom} to ${eolTo}, set by the number of bedrooms and bathrooms. Carpet steam cleaning and inside-oven cleaning can be added at the published add-on prices.`,
    },
    {
      q: "Which suburbs do you clean?",
      a: "We clean Shellharbour City, Kiama Municipality, the Dapto district and Wollongong. Check your suburb on the locations page, or enter your postcode when you get a price.",
    },
    {
      q: "What happens if something is missed?",
      a: "Send us photos within 24 hours of the clean. We reply within 48 hours and re-clean those areas free. If you are still unhappy after the re-clean, you get a full refund within 15 days.",
    },
    {
      q: "When do I pay?",
      a: "You choose: pay when you book, or pay after the clean is finished. Getting a price needs no card. Card payments are processed by Stripe.",
    },
    {
      q: "Can I cancel or reschedule?",
      a: "Yes. Changes made more than 24 hours before the start time are free. Cancelling within 24 hours of the start incurs a 50% fee. If we have to cancel, you pay nothing and we rebook you first.",
    },
    {
      q: "Do prices include GST?",
      a: "Yes, every price on this site includes GST, except NDIS cleaning, which is GST-free. Each booking comes with a tax invoice showing our ABN.",
    },
    {
      q: "Is there a call-out or travel fee?",
      a: "No. There is no call-out fee, no booking fee and no travel loading anywhere in the four areas we serve.",
    },
  ],

  finalCta: "See your price in three taps. No name or card needed until you choose a day.",

  reviews: [] as Review[],
  cleaners: [] as Cleaner[],
};
