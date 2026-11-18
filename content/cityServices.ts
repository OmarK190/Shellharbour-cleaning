// Service-in-city pages (PRD FR17, Story 4.5/4.6). Combinations from illawarra-keywords.md §0/§0b.
import type { HubSlug } from "@/config/site";

export type CityService = {
  hub: HubSlug;
  service: string;
  title: string;
  description: string;
  local: string; // unique to this combination
  faqs: { q: string; a: string }[];
};

export const CITY_SERVICES: CityService[] = [
  {
    hub: "wollongong",
    service: "end-of-lease-cleaning",
    title: "End of Lease Cleaning Wollongong | Fixed $190–$410",
    description: "Bond and end of lease cleaning in Wollongong, from the CBD and Gwynneville to Corrimal and Figtree: fixed $190–$410 by home size, free re-clean.",
    local: "Wollongong's rental market runs from CBD units and student share houses in Gwynneville, Keiraville and North Wollongong to family homes in Figtree, Corrimal and Thirroul, so Shellharbour Cleaning prices every Wollongong end of lease clean by bedrooms and bathrooms rather than by suburb, and books cleans a day or two before the final inspection to leave room for a re-clean.",
    faqs: [
      { q: "How much is a bond clean in Wollongong?", a: "A fixed $190 to $410 by bedrooms and bathrooms, GST included." },
      { q: "Do you clean student units near the university?", a: "Yes, including Gwynneville, Keiraville and North Wollongong." },
      { q: "Can you add carpet steam cleaning?", a: "Yes, from $50 per carpeted room, on the same visit." },
      { q: "What if the agent finds something?", a: "Send photos within 24 hours and we re-clean those areas free." },
    ],
  },
  {
    hub: "shellharbour",
    service: "end-of-lease-cleaning",
    title: "End of Lease Cleaning Shellharbour | Fixed $190–$410",
    description: "End of lease cleaning in Shell Cove, Albion Park, Oak Flats and Warilla: a fixed $190–$410 by home size, with a free re-clean if the agent flags anything.",
    local: "Rentals across Shellharbour City range from older brick homes in Warilla, Barrack Heights and Oak Flats to near-new houses in Shell Cove, Calderwood and Tullimbar, and Shellharbour Cleaning's fixed end of lease price covers both, with extra attention on shower grout and range hoods in older homes and builders' dust in new ones.",
    faqs: [
      { q: "How much is end of lease cleaning in Shell Cove?", a: "The same fixed $190 to $410 as the rest of Shellharbour City." },
      { q: "Do you charge travel to Albion Park?", a: "No. There is no travel loading anywhere in Shellharbour City." },
      { q: "Is the oven included?", a: "Yes, the oven is on the end of lease checklist." },
      { q: "When should I book?", a: "After furniture is removed and a day or two before the final inspection." },
    ],
  },
  {
    hub: "kiama",
    service: "end-of-lease-cleaning",
    title: "End of Lease Cleaning Kiama | Fixed $190–$410",
    description: "Bond cleaning in Kiama, Gerringong, Jamberoo and Kiama Downs: a fixed $190–$410 by home size from Shellharbour Cleaning, with a free re-clean.",
    local: "Coastal homes in Kiama, Kiama Downs, Gerringong and Gerroa pick up sand, salt spray on windows and damp in bathrooms, so Shellharbour Cleaning's end of lease clean in Kiama Municipality pays particular attention to window tracks, sliding door channels and bathroom mould before the property manager's inspection.",
    faqs: [
      { q: "Do you do bond cleans in Gerringong?", a: "Yes, at the same fixed $190 to $410 price." },
      { q: "Do you clean window tracks?", a: "Yes, window sills and tracks are on the checklist." },
      { q: "Can you handle bathroom mould?", a: "Surface mould on tiles and grout is cleaned; mould inside walls is a building issue." },
      { q: "Is there a travel fee to Jamberoo?", a: "No travel loading applies anywhere in Kiama Municipality." },
    ],
  },
  {
    hub: "dapto",
    service: "end-of-lease-cleaning",
    title: "End of Lease Cleaning Dapto | Fixed $190–$410",
    description: "End of lease cleaning in Dapto, Horsley, Kanahooka, Koonawarra and West Dapto: a fixed $190–$410 by home size, free re-clean if the agent flags anything.",
    local: "Dapto district rentals include established family homes in Koonawarra, Kanahooka and Horsley and newer houses in the West Dapto estates around Wongawilli and Avondale, and Shellharbour Cleaning quotes every Dapto end of lease clean at the same fixed price by bedrooms and bathrooms, whether the home is ten years old or two.",
    faqs: [
      { q: "How much is a bond clean in Dapto?", a: "A fixed $190 to $410 by bedrooms and bathrooms." },
      { q: "Do you cover Haywards Bay and Horsley?", a: "Yes, the whole 2530 district." },
      { q: "Can I add carpet cleaning?", a: "Yes, from $50 per carpeted room." },
      { q: "Do you include the garage?", a: "Sweeping is included; tell us about oil stains or heavy cleaning when you book." },
    ],
  },
  {
    hub: "wollongong",
    service: "carpet-steam-cleaning",
    title: "Carpet Cleaning Wollongong | From $50 a Room",
    description: "Carpet steam cleaning in Wollongong from $50 per room with Shellharbour Cleaning: hot-water extraction for homes, rentals and end of lease cleans.",
    local: "Carpet in Wollongong homes takes beach sand from the northern suburbs, wet-weather mud and heavy foot traffic in hallways, so Shellharbour Cleaning pre-treats high-traffic paths and marks before hot-water extraction and leaves Wollongong customers with drying advice suited to the humidity on the day.",
    faqs: [
      { q: "How much is carpet cleaning in Wollongong?", a: "From $50 per carpeted room, GST included." },
      { q: "How long until I can walk on it?", a: "Usually a few hours, depending on airflow and humidity." },
      { q: "Can you do it with my end of lease clean?", a: "Yes, on the same visit and invoice." },
      { q: "Do you clean rugs?", a: "Tell us about rugs when you book and we confirm whether we can clean them on site." },
    ],
  },
  {
    hub: "shellharbour",
    service: "carpet-steam-cleaning",
    title: "Carpet Cleaning Shellharbour | From $50 a Room",
    description: "Carpet steam cleaning in Shellharbour, Shell Cove, Albion Park and Warilla from $50 per room with Shellharbour Cleaning, on its own or with a bond clean.",
    local: "Shellharbour City homes often have carpeted bedrooms with tiled living areas, so Shellharbour Cleaning prices carpet steam cleaning in Shell Cove, Albion Park, Oak Flats and Warilla per room, letting households pay only for the carpeted rooms rather than a flat whole-house carpet fee.",
    faqs: [
      { q: "How much is carpet cleaning in Shell Cove?", a: "From $50 per carpeted room." },
      { q: "Do I need to move furniture?", a: "Move small items; large furniture is cleaned around." },
      { q: "Is it hot-water extraction?", a: "Yes, commonly called steam cleaning." },
      { q: "Is there a travel fee?", a: "No travel loading anywhere in Shellharbour City." },
    ],
  },
  {
    hub: "wollongong",
    service: "office-cleaning",
    title: "Office Cleaning Wollongong | Quoted Per Site",
    description: "Scheduled office and shopfront cleaning in the Wollongong CBD and suburbs, quoted per site by Shellharbour Cleaning, with a GST invoice every clean.",
    local: "Wollongong's offices and shopfronts cluster around Crown Street, the CBD and the commercial strips in Fairy Meadow, Corrimal and Figtree, and Shellharbour Cleaning quotes each Wollongong office clean per site after a walk-through, so a two-room practice and a larger open-plan office each pay for the time their space actually needs.",
    faqs: [
      { q: "How is office cleaning priced?", a: "Per site, after we see the space and agree the task list." },
      { q: "Can you clean before or after business hours?", a: "Bookings run 9 am to 9 pm, 7 days; other times can be arranged." },
      { q: "Do you provide tax invoices?", a: "Yes, with our ABN, for every clean." },
      { q: "Do you clean kitchens and bathrooms?", a: "Yes, shared kitchens, breakout areas and bathrooms are included." },
    ],
  },
  {
    hub: "wollongong",
    service: "ndis-cleaning-services",
    title: "NDIS Cleaning Wollongong | $55/hr GST-free",
    description: "NDIS cleaning in Wollongong for self-managed participants at $55 an hour, GST-free, with tax invoices ready to claim from your NDIS funding.",
    local: "Self-managed NDIS participants across Wollongong, from Thirroul and Bulli in the north to Warrawong and Port Kembla in the south, can book Shellharbour Cleaning for household tasks at $55 an hour, GST-free, and receive a tax invoice after every visit that lists the hours, rate, address and ABN needed to claim.",
    faqs: [
      { q: "Is NDIS cleaning in Wollongong GST-free?", a: "Yes, $55 an hour with no GST." },
      { q: "Do you serve NDIA-managed plans?", a: "Shellharbour Cleaning currently serves self-managed participants." },
      { q: "Can a carer book for me?", a: "Yes, a carer, family member or support coordinator can book." },
      { q: "Can I ask for the same cleaner?", a: "Yes, add it to your booking notes." },
    ],
  },
  {
    hub: "kiama",
    service: "airbnb-cleaning",
    title: "Airbnb Cleaning Kiama | Turnovers From $121",
    description: "Airbnb and holiday-let turnovers in Kiama, Gerringong and Kiama Downs from $121, linen $30 a bedroom, urgent slots outside 9 am–9 pm for $50 extra.",
    local: "Kiama Municipality has a large share of holiday homes between Kiama, Gerringong and Gerroa, with busy changeover days in summer and on long weekends, so Shellharbour Cleaning offers turnover cleans timed between check-out and check-in, linen changes at $30 a bedroom, and urgent slots outside 9 am to 9 pm for $50 extra.",
    faqs: [
      { q: "How much is an Airbnb clean in Kiama?", a: "From $121, plus $30 a bedroom for linen changes." },
      { q: "Can you clean on a Sunday?", a: "Yes, bookings run 7 days." },
      { q: "Do you restock supplies?", a: "Tell us what to restock in your booking notes; you supply the items." },
      { q: "What about same-day turnovers?", a: "Book an urgent slot outside 9 am–9 pm for $50 extra." },
    ],
  },
];
