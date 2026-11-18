import type { Post } from "./types";
import { PRICE_FROM, formatAud } from "@/lib/pricing/rates";

const carpet = formatAud(PRICE_FROM["carpet-steam-cleaning"]!); // $50
const eolFrom = formatAud(PRICE_FROM["end-of-lease-cleaning"]!); // $190

export const howMuchDoesCarpetCleaningCost: Post = {
  slug: "how-much-does-carpet-cleaning-cost",
  title: "How Much Does Carpet Cleaning Cost? Illawarra Price Guide",
  description: `Carpet steam cleaning in Wollongong, Shellharbour, Kiama and Dapto starts from ${carpet} per room with Shellharbour Cleaning. What changes the price.`,
  h1: "How much does carpet cleaning cost in Wollongong, Shellharbour and Kiama?",
  primaryKeyword: "how much does carpet cleaning cost",
  published: "2026-11-19",
  updated: "2026-11-19",
  author: { name: "Shellharbour Cleaning team", role: "Carpet steam cleaning, Illawarra" },
  answer: `Carpet steam cleaning with Shellharbour Cleaning starts from ${carpet} per room, including GST, for homes in Wollongong, Shellharbour, Kiama and Dapto. Pricing per room means you pay only for the carpeted rooms you choose, and carpet cleaning can be booked on its own or added to an end of lease clean.`,
  tldr: [
    `Shellharbour Cleaning prices carpet steam cleaning from ${carpet} per room, GST included.`,
    "Room count, stains, high-traffic wear and access are what move the final price.",
    "Booking carpet cleaning with an end of lease clean means one visit and one invoice before the final inspection.",
  ],
  sections: [
    {
      heading: "What does carpet steam cleaning cost per room in the Illawarra?",
      paragraphs: [
        `Carpet steam cleaning booked with Shellharbour Cleaning starts from ${carpet} per room, including GST, across Wollongong, Shellharbour, Kiama and Dapto. Per-room pricing suits Illawarra homes where only the bedrooms are carpeted and the living areas have tiles or timber, because the owner or tenant pays for the carpeted rooms only.`,
        "Shellharbour Cleaning publishes the per-room carpet steam cleaning price before booking, so a household in Shell Cove, Albion Park or Corrimal can multiply the number of carpeted rooms by the per-room price and know the base cost in advance. Heavily stained or damaged carpet is assessed separately, and the cleaner explains any extra work before starting it.",
      ],
    },
    {
      heading: "What changes the price of carpet cleaning?",
      paragraphs: [
        "The number of carpeted rooms is the main factor in the price of carpet cleaning in Wollongong and Shellharbour, followed by the condition of the carpet. High-traffic hallways, pet accidents, red wine and food stains take longer to treat than general dust and foot traffic, and Shellharbour Cleaning flags heavy staining before treating it so the customer decides whether to proceed.",
        "Access and furniture also affect carpet cleaning in Kiama and Dapto homes, because a steam cleaning wand needs open floor to reach the carpet evenly. Shellharbour Cleaning asks customers to move small items, toys and loose rugs off the carpet before the visit, while larger furniture can stay in place and is cleaned around.",
        "Carpet type matters for Illawarra homes because wool, nylon and polyester blends each handle heat and moisture differently. Shellharbour Cleaning uses hot-water extraction, commonly called steam cleaning, and adjusts water temperature and drying for older or delicate carpet rather than applying one setting to every room in the house.",
      ],
      table: {
        caption: "What affects a carpet cleaning quote",
        head: ["Factor", "Effect on price", "What Shellharbour Cleaning does"],
        rows: [
          ["Number of carpeted rooms", "Main driver", `From ${carpet} per room`],
          ["Heavy stains or pet accidents", "Can add time", "Assessed and agreed before treatment"],
          ["Furniture and access", "Small effect", "Small items moved by the customer, large furniture cleaned around"],
          ["Carpet fibre and age", "Changes the method", "Hot-water extraction adjusted for delicate carpet"],
        ],
      },
    },
    {
      heading: "Should carpet cleaning be booked with an end of lease clean?",
      paragraphs: [
        `Tenants moving out of a rental in Wollongong, Shellharbour, Kiama or Dapto can book carpet steam cleaning on the same day as the end of lease clean, so the property is ready for the final inspection after a single visit. Shellharbour Cleaning end of lease cleans start from ${eolFrom}, and carpet steam cleaning is added per room on the same booking and the same tax invoice.`,
        "Doing the carpets last on an Illawarra end of lease job keeps them clean while the rest of the home is being finished, so Shellharbour Cleaning schedules carpet steam cleaning after the hard floors, kitchen and bathrooms. Carpets are left to dry with windows open where possible, which usually takes a few hours depending on the weather.",
      ],
    },
    {
      heading: "How often should carpets be steam cleaned?",
      paragraphs: [
        "Shellharbour Cleaning suggests a professional carpet steam clean about once a year for a typical Illawarra household, and more often for homes with pets, young children or allergy sufferers. Households in coastal suburbs such as Shellharbour Village, Kiama and Thirroul also deal with beach sand tracked inside, and sand grit wears carpet fibres faster than ordinary dust.",
        "Regular vacuuming between professional carpet cleans keeps grit from cutting carpet fibres in Wollongong and Shellharbour homes, and Shellharbour Cleaning vacuums carpets as part of every regular house clean. Steam cleaning then lifts the deeper soil that a vacuum cannot reach, so the two work together rather than replacing each other.",
      ],
    },
    {
      heading: "Is it cheaper to hire a carpet cleaning machine?",
      paragraphs: [
        "Hiring a carpet cleaning machine from a hardware or supermarket store can cost less on the day for a household in Dapto or Albion Park, but the result depends on the machine's suction, the cleaning solution and how evenly the carpet is dried. Over-wetting carpet with a hire machine can leave it damp for a long time and bring old stains back to the surface.",
        "Professional carpet steam cleaning from Shellharbour Cleaning includes the equipment, the cleaning solution, pre-treatment of marks and the labour, priced from a fixed per-room rate, which makes it easier for an Illawarra tenant to plan an end of lease budget than a hire machine charged per day plus solutions bought separately.",
      ],
    },
  ],
  callAPro: {
    text: `Carpets in Wollongong, Shellharbour, Kiama or Dapto need a proper clean? Book carpet steam cleaning from ${carpet} per room, on its own or with your end of lease clean.`,
    href: "/services/carpet-steam-cleaning/",
    label: "Carpet steam cleaning",
  },
  faqs: [
    {
      q: "How much does it cost to steam clean a 3-bedroom house?",
      a: `With Shellharbour Cleaning, carpet steam cleaning is priced from ${carpet} per carpeted room, so a three-bedroom home with three carpeted bedrooms starts from three times the per-room rate. Heavy stains are assessed before treatment.`,
    },
    {
      q: "How long does carpet take to dry after steam cleaning?",
      a: "Carpet usually dries within a few hours after hot-water extraction, depending on airflow, humidity and the carpet type. Open windows and running fans speed up drying.",
    },
    {
      q: "Can you remove every stain?",
      a: "Most everyday stains lift with pre-treatment and hot-water extraction, but some stains, such as bleach marks or dye transfer, permanently change the carpet fibre. Shellharbour Cleaning tells you before treatment if a stain is unlikely to come out.",
    },
    {
      q: "Do I need to move furniture before carpet cleaning?",
      a: "Please move small items, toys and loose rugs off the carpet. Large furniture such as beds and sofas can stay in place and is cleaned around.",
    },
  ],
  sources: [
    { label: "Carpet Institute of Australia — carpet care and maintenance", url: "https://www.carpetinstitute.com.au/" },
    { label: "NSW Fair Trading — ending a tenancy", url: "https://www.fairtrading.nsw.gov.au/housing-and-property/renting" },
  ],
  related: ["end-of-lease-cleaning-cost", "house-cleaning-prices-wollongong"],
};
