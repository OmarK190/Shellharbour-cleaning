// Service pages v1 (PRD FR10–FR12). Full 14-section pages arrive in Epic 3; v1 states only published facts.
import { RATES, PRICE_FROM, END_OF_LEASE_MAX_CENTS, EXAMPLE_3BED_2BATH_REGULAR_CENTS, formatAud } from "@/lib/pricing/rates";
import { HOME } from "@/content/home";

const hourly = formatAud(RATES.regularHourlyCents);
const minimum = formatAud(RATES.regularMinimumCents);
const eolFrom = formatAud(PRICE_FROM["end-of-lease-cleaning"]!);
const eolTo = formatAud(END_OF_LEASE_MAX_CENTS);
const example = formatAud(EXAMPLE_3BED_2BATH_REGULAR_CENTS);
const deepFrom = formatAud(PRICE_FROM["deep-cleaning"]!);
const carpet = formatAud(PRICE_FROM["carpet-steam-cleaning"]!);
const ndis = formatAud(PRICE_FROM["ndis-cleaning-services"]!);

export type ServiceContent = {
  slug: string;
  name: string;
  group: "Home" | "End of lease" | "Carpet" | "Specialist" | "Commercial";
  title: string; // ≤ 60
  description: string; // ≤ 155
  h1: string;
  intro: string;
  price: string;
  whoFor: string[];
  includes: { name: string; tasks: string[] }[];
  addOns: string[];
  faqs: { q: string; a: string }[];
};

const ADD_ONS = [
  "Inside the oven (included in deep cleans)",
  "Inside the fridge",
  "Inside cupboards",
  "Interior windows",
  `Carpet steam cleaning from ${carpet} per room`,
];

const CORE_FAQS = [
  {
    q: "Do prices include GST?",
    a: "Yes. Every Shellharbour Cleaning price includes GST except NDIS cleaning, which is GST-free. Each booking comes with a tax invoice showing our ABN.",
  },
  {
    q: "What if something is missed?",
    a: "Send photos within 24 hours and we re-clean those areas free. The full terms are on our guarantee page.",
  },
];

export const SERVICES: ServiceContent[] = [
  {
    slug: "end-of-lease-cleaning",
    name: "End of lease cleaning",
    group: "End of lease",
    title: "End of Lease Cleaning Illawarra | Fixed $190–$410",
    description: `Fixed-price end of lease and bond cleaning in Wollongong, Shellharbour, Kiama and Dapto: ${eolFrom}–${eolTo} by home size, free re-clean if needed.`,
    h1: "End of lease cleaning",
    intro: `Shellharbour Cleaning's end of lease cleaning, also called bond or vacate cleaning, costs a fixed ${eolFrom} to ${eolTo} including GST, set by bedrooms and bathrooms, for rentals in Wollongong, Shellharbour, Kiama and Dapto. If the property manager flags anything, send photos within 24 hours and we re-clean those areas free.`,
    price: `${eolFrom}–${eolTo} fixed, by bedrooms and bathrooms`,
    whoFor: ["Tenants moving out who want their bond back", "Landlords preparing a property for new tenants", "Property managers who need a vacate clean booked to a deadline"],
    includes: HOME.rooms,
    addOns: ADD_ONS,
    faqs: [
      { q: "What does an end of lease clean cost?", a: `A fixed ${eolFrom} to ${eolTo}, including GST, depending on bedrooms and bathrooms. Carpet steam cleaning is added per room.` },
      { q: "Is carpet cleaning included?", a: `No. Carpet steam cleaning is an add-on from ${carpet} per room, so you only pay for carpeted rooms.` },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "regular-cleaning",
    name: "Regular house cleaning",
    group: "Home",
    title: "Regular House Cleaning Illawarra | $60.50 an Hour",
    description: `Weekly, fortnightly or monthly house cleaning in Wollongong, Shellharbour, Kiama and Dapto at ${hourly} an hour. A 3-bed, 2-bath clean is ${example}.`,
    h1: "Regular house cleaning",
    intro: `Regular house cleaning from Shellharbour Cleaning costs ${hourly} an hour including GST, with a ${minimum} minimum covering the first two hours, for homes in Wollongong, Shellharbour, Kiama and Dapto. A three-bedroom, two-bathroom home costs ${example} a visit, booked weekly, fortnightly or monthly.`,
    price: `${hourly}/hr, ${minimum} minimum; ${example} for 3 bed, 2 bath`,
    whoFor: ["Households who want the same clean every week or fortnight", "Busy families and working couples", "Older residents who want help keeping on top of the home"],
    includes: HOME.rooms,
    addOns: ADD_ONS,
    faqs: [
      { q: "Is there a weekly or fortnightly discount?", a: `No frequency discount is published. Every visit is ${hourly} an hour, and frequent cleans usually take less time.` },
      { q: "Is there a minimum booking?", a: `Yes, ${minimum}, which covers the first two hours.` },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning",
    group: "Home",
    title: "Deep Cleaning Illawarra | From $181.50, Oven Included",
    description: `Deep cleaning in Wollongong, Shellharbour, Kiama and Dapto from ${deepFrom}, priced by bedrooms and bathrooms. Inside the oven included.`,
    h1: "Deep cleaning",
    intro: `A deep clean from Shellharbour Cleaning starts at ${deepFrom} including GST and is priced by bedrooms and bathrooms at one and a half times the regular clean, for homes in Wollongong, Shellharbour, Kiama and Dapto. Inside the oven is included, along with skirting boards, door frames, light switches and built-up grime.`,
    price: `From ${deepFrom}, by bedrooms and bathrooms`,
    whoFor: ["Homes that have not had a professional clean for a while", "Spring cleans and before-visitor cleans", "A first clean before switching to regular visits"],
    includes: HOME.rooms,
    addOns: ADD_ONS.filter((a) => !a.startsWith("Inside the oven")),
    faqs: [
      { q: "How is a deep clean priced?", a: `At 1.5 times the regular whole-home price for your bedrooms and bathrooms, from ${deepFrom}.` },
      { q: "Is the oven included?", a: "Yes, inside-oven cleaning is included in every deep clean." },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "carpet-steam-cleaning",
    name: "Carpet steam cleaning",
    group: "Carpet",
    title: "Carpet Steam Cleaning Illawarra | From $50 a Room",
    description: `Carpet steam cleaning in Wollongong, Shellharbour, Kiama and Dapto from ${carpet} per room with Shellharbour Cleaning, on its own or with an end of lease clean.`,
    h1: "Carpet steam cleaning",
    intro: `Carpet steam cleaning from Shellharbour Cleaning starts at ${carpet} per room including GST for homes in Wollongong, Shellharbour, Kiama and Dapto. Book it on its own or add it to an end of lease clean so the carpets are done on the same visit as the rest of the property.`,
    price: `From ${carpet} per room`,
    whoFor: ["Tenants whose lease or condition report calls for clean carpets", "Homes with pets, children or high-traffic hallways", "Owners preparing a home for sale or new tenants"],
    includes: [{ name: "Each carpeted room", tasks: ["Pre-treatment of everyday marks", "Hot-water extraction across the whole carpet", "Edges and corners cleaned", "Drying advice before we leave"] }],
    addOns: ["End of lease cleaning", "Deep cleaning"],
    faqs: [
      { q: "How much does carpet cleaning cost?", a: `From ${carpet} per carpeted room, GST included. Heavy stains are assessed before treatment.` },
      { q: "How long does carpet take to dry?", a: "Usually a few hours, depending on airflow, humidity and carpet type." },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "ndis-cleaning-services",
    name: "NDIS cleaning",
    group: "Specialist",
    title: "NDIS Cleaning Services Illawarra | $55/hr GST-free",
    description: `NDIS cleaning for self-managed participants in Wollongong, Shellharbour, Kiama and Dapto at ${ndis} an hour, GST-free, with invoices showing our ABN.`,
    h1: "NDIS cleaning services",
    intro: `Shellharbour Cleaning provides NDIS cleaning for self-managed participants in Wollongong, Shellharbour, Kiama and Dapto at ${ndis} an hour, GST-free. Each visit covers the household tasks you need help with, and every booking produces a tax invoice with our ABN that you can claim from your NDIS funding.`,
    price: `${ndis}/hr, GST-free (self-managed plans)`,
    whoFor: ["Self-managed NDIS participants", "Carers and family members booking on a participant's behalf", "Support coordinators arranging regular household help"],
    includes: [{ name: "Household tasks", tasks: ["Kitchen and bathroom cleaning", "Vacuuming and mopping", "Dusting surfaces", "Changing bed linen", "Tasks agreed at the first visit"] }],
    addOns: [],
    faqs: [
      { q: "Does the NDIS cover cleaning?", a: "It can, when cleaning is reasonable and necessary because of your disability, usually under Core Supports. Check your plan or ask your support coordinator." },
      { q: "Is NDIS cleaning GST-free?", a: `Yes. Shellharbour Cleaning charges ${ndis} an hour with no GST for NDIS participants.` },
      { q: "Can I use Shellharbour Cleaning if my plan is NDIA-managed?", a: "Shellharbour Cleaning currently serves self-managed participants. NDIA-managed plans generally need registered providers." },
      CORE_FAQS[1],
    ],
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb and holiday-let cleaning",
    group: "Specialist",
    title: "Airbnb Cleaning Kiama & Illawarra | From $121",
    description: `Airbnb and holiday-let turnovers in Kiama, Shellharbour, Wollongong and Dapto from ${minimum}, linen $30 a bedroom, urgent slots outside 9 am–9 pm for $50 extra.`,
    h1: "Airbnb and holiday-let cleaning",
    intro: `Shellharbour Cleaning turns over Airbnb and holiday lets in Kiama, Shellharbour, Wollongong and Dapto from ${minimum} including GST. Linen is changed for $30 a bedroom, and an urgent turnover outside 9 am to 9 pm is $50 extra, so hosts know the cost of each changeover before guests arrive.`,
    price: `From ${minimum}; linen $30 per bedroom; urgent +$50`,
    whoFor: ["Airbnb and Stayz hosts", "Holiday-let managers in Kiama, Gerringong and Shellharbour Village", "Owners who let their home between personal stays"],
    includes: HOME.rooms,
    addOns: ["Linen change, $30 per bedroom", "Urgent slot outside 9 am–9 pm, $50", ...ADD_ONS.slice(1)],
    faqs: [
      { q: "How much is an Airbnb turnover?", a: `From ${minimum}, GST included, plus $30 a bedroom if we change the linen.` },
      { q: "Can you clean outside business hours?", a: "Yes. An urgent turnover outside 9 am to 9 pm is $50 extra." },
      ...CORE_FAQS,
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office cleaning",
    group: "Commercial",
    title: "Office Cleaning Wollongong & Illawarra | Quoted Per Site",
    description: "Scheduled office and shopfront cleaning in Wollongong, Shellharbour, Kiama and Dapto, quoted per site after we see the space. GST invoice with every clean.",
    h1: "Office cleaning",
    intro: "Shellharbour Cleaning provides scheduled cleaning for small offices and shopfronts in Wollongong, Shellharbour, Kiama and Dapto. Office cleaning is quoted per site after we see the space, because floor area, kitchens, bathrooms and visit frequency vary between businesses, and every clean comes with a GST tax invoice.",
    price: "Quoted per site",
    whoFor: ["Small offices and professional practices", "Shopfronts and studios", "Businesses that want cleaning before or after hours"],
    includes: [{ name: "Typical office clean", tasks: ["Desks and shared surfaces wiped", "Kitchen and breakout area cleaned", "Bathrooms cleaned and restocked", "Bins emptied", "Floors vacuumed and mopped"] }],
    addOns: ["Interior windows", "Carpet steam cleaning"],
    faqs: [
      { q: "How is office cleaning priced?", a: "Per site, after we see the space and agree the task list and how often you want cleaning." },
      { q: "Can you clean after hours?", a: "Yes, bookings run 9 am to 9 pm, 7 days, and other times can be arranged." },
      ...CORE_FAQS,
    ],
  },
];

export function getService(slug: string): ServiceContent {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}
