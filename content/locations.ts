// Locations hub + four hub pages v1 (PRD FR15–FR16). Suburb lists from docs/research/suburbs.md;
// postcodes are planning values pending Nominatim verification (Story 4.1), so v1 lists names only.
import { RATES, PRICE_FROM, END_OF_LEASE_MAX_CENTS, formatAud } from "@/lib/pricing/rates";
import type { HubSlug } from "@/config/site";

const hourly = formatAud(RATES.regularHourlyCents);
const minimum = formatAud(RATES.regularMinimumCents);
const eol = `${formatAud(PRICE_FROM["end-of-lease-cleaning"]!)}–${formatAud(END_OF_LEASE_MAX_CENTS)}`;

export type HubContent = {
  slug: HubSlug;
  name: string;
  title: string; // ≤ 60
  description: string; // ≤ 155
  h1: string;
  intro: string;
  local: string;
  suburbs: string[];
  services: string[]; // service slugs to feature
  faqs: { q: string; a: string }[];
};

export const HUBS: HubContent[] = [
  {
    slug: "shellharbour",
    name: "Shellharbour",
    title: "Cleaners Shellharbour | House & End of Lease Cleaning",
    description: `House, end of lease and deep cleaning across Shellharbour City, from Shell Cove to Albion Park. ${hourly} an hour, ${minimum} minimum, GST included.`,
    h1: "House cleaning Shellharbour",
    intro: `Shellharbour Cleaning cleans homes, rentals and holiday lets across Shellharbour City, including Shell Cove, Albion Park, Oak Flats, Warilla and Lake Illawarra. Regular cleaning is ${hourly} an hour with a ${minimum} minimum, end of lease cleans are a fixed ${eol} by home size, and a free re-clean applies if anything is missed.`,
    local: "Shellharbour City mixes established family homes in Warilla, Barrack Heights and Oak Flats with newer estates in Shell Cove, Calderwood and Tullimbar, so Shellharbour Cleaning offers everything from move-in cleans in brand-new houses to end of lease cleans in long-held rentals, plus holiday-let turnovers around Shellharbour Village and the Shell Cove marina.",
    suburbs: ["Shell Cove", "Shellharbour Village", "Shellharbour City Centre", "Flinders", "Oak Flats", "Blackbutt", "Dunmore", "Albion Park", "Albion Park Rail", "Calderwood", "Tullimbar", "Croom", "Warilla", "Barrack Heights", "Barrack Point", "Lake Illawarra", "Mount Warrigal", "Windang"],
    services: ["regular-cleaning", "end-of-lease-cleaning", "deep-cleaning", "carpet-steam-cleaning", "airbnb-cleaning"],
    faqs: [
      { q: "Do you charge travel to Shell Cove or Albion Park?", a: "No. There is no travel loading anywhere in Shellharbour City." },
      { q: "Can you clean a new build before we move in?", a: "Yes. Book a deep clean to remove builders' dust from benches, cupboards, windows and floors before you unpack." },
      { q: "Can I book a same-week clean?", a: "Choose any available day when you book; availability is shown before you confirm." },
    ],
  },
  {
    slug: "kiama",
    name: "Kiama",
    title: "Cleaners Kiama | House, Bond & Holiday-Let Cleaning",
    description: `House, end of lease and holiday-let cleaning in Kiama, Gerringong, Jamberoo and Kiama Downs from ${minimum}. Linen changes $30 a bedroom. GST included.`,
    h1: "House cleaning Kiama",
    intro: `Shellharbour Cleaning cleans homes and holiday lets throughout Kiama Municipality, from Kiama Downs and Minnamurra to Jamberoo, Gerringong and Gerroa. Regular cleans are ${hourly} an hour with a ${minimum} minimum, holiday-let turnovers start at ${minimum} with linen changed for $30 a bedroom, and end of lease cleans are a fixed ${eol}.`,
    local: "Kiama Municipality has a large share of holiday homes along the coast between Kiama and Gerroa, so Shellharbour Cleaning offers turnover cleans timed between guest check-out and check-in, alongside regular cleaning for permanent residents in Kiama Heights, Bombo and Jamberoo and bond cleans for tenants moving on.",
    suburbs: ["Kiama", "Kiama Downs", "Kiama Heights", "Bombo", "Minnamurra", "Jamberoo", "Gerringong", "Gerroa"],
    services: ["airbnb-cleaning", "regular-cleaning", "end-of-lease-cleaning", "deep-cleaning", "carpet-steam-cleaning"],
    faqs: [
      { q: "Can you turn over a holiday let between guests?", a: "Yes. Turnovers start at $121, linen is $30 a bedroom, and an urgent slot outside 9 am–9 pm is $50 extra." },
      { q: "Do you clean in Gerringong and Gerroa?", a: "Yes, at the same published prices as the rest of Kiama Municipality, with no travel loading." },
      { q: "Do you supply linen?", a: "We change the linen you provide for $30 a bedroom." },
    ],
  },
  {
    slug: "dapto",
    name: "Dapto",
    title: "Cleaners Dapto | House, End of Lease & Move-In Cleaning",
    description: `House, end of lease and move-in cleaning in Dapto, Horsley, Kanahooka and West Dapto from ${minimum}. Fixed end of lease prices ${eol}, GST included.`,
    h1: "House cleaning Dapto",
    intro: `Shellharbour Cleaning cleans homes across the Dapto district, including Horsley, Kanahooka, Koonawarra, Brownsville, Penrose and Haywards Bay. Regular cleaning costs ${hourly} an hour with a ${minimum} minimum, end of lease cleaning is a fixed ${eol} by bedrooms and bathrooms, and every clean carries a free re-clean guarantee.`,
    local: "The Dapto district is growing quickly as the West Dapto release area adds new streets around Wongawilli, Avondale and Yallah, so Shellharbour Cleaning offers move-in deep cleans that clear builders' dust from new homes, alongside regular fortnightly cleaning for established houses in Koonawarra, Kanahooka and Horsley.",
    suburbs: ["Dapto", "Horsley", "Kanahooka", "Koonawarra", "Brownsville", "Penrose", "Avondale", "Huntley", "Haywards Bay", "Yallah", "Wongawilli", "Marshall Mount"],
    services: ["regular-cleaning", "deep-cleaning", "end-of-lease-cleaning", "carpet-steam-cleaning", "ndis-cleaning-services"],
    faqs: [
      { q: "Do you cover the new West Dapto estates?", a: "Yes, including the newer streets around Wongawilli, Avondale and Yallah." },
      { q: "How much is a move-in clean in Dapto?", a: "Book a deep clean, from $181.50, priced by bedrooms and bathrooms." },
      { q: "Do you offer NDIS cleaning in Dapto?", a: "Yes, for self-managed participants at $55 an hour, GST-free." },
    ],
  },
  {
    slug: "wollongong",
    name: "Wollongong",
    title: "Cleaners Wollongong | House & End of Lease Cleaning",
    description: `House, end of lease, carpet and office cleaning in Wollongong, from Thirroul to Port Kembla. ${hourly} an hour, end of lease ${eol} fixed, GST included.`,
    h1: "House cleaning Wollongong",
    intro: `Shellharbour Cleaning cleans homes, units and small offices across Wollongong, from Thirroul, Corrimal and Fairy Meadow through Figtree and Unanderra to Warrawong and Port Kembla. Regular cleaning is ${hourly} an hour with a ${minimum} minimum, end of lease cleans are a fixed ${eol}, and carpet steam cleaning starts from $50 per room.`,
    local: "Wollongong has a large rental market around the CBD, North Wollongong, Gwynneville and Keiraville near the University of Wollongong, so Shellharbour Cleaning offers fixed-price end of lease cleans that suit student moves at the end of each semester, alongside regular cleaning for family homes in the northern suburbs and office cleaning in the city centre.",
    suburbs: ["Wollongong", "North Wollongong", "West Wollongong", "Gwynneville", "Keiraville", "Mount Keira", "Mount Saint Thomas", "Coniston", "Mangerton", "Fairy Meadow", "Balgownie", "Mount Ousley", "Towradgi", "Corrimal", "East Corrimal", "Bellambi", "Russell Vale", "Woonona", "Bulli", "Thirroul", "Austinmer", "Coledale", "Figtree", "Unanderra", "Farmborough Heights", "Cordeaux Heights", "Mount Kembla", "Kembla Grange", "Port Kembla", "Warrawong", "Cringila", "Lake Heights", "Primbee", "Berkeley"],
    services: ["end-of-lease-cleaning", "regular-cleaning", "carpet-steam-cleaning", "office-cleaning", "ndis-cleaning-services"],
    faqs: [
      { q: "Do you clean units near the University of Wollongong?", a: "Yes, including end of lease cleans for students in Gwynneville, Keiraville and North Wollongong." },
      { q: "Do you clean offices in the Wollongong CBD?", a: "Yes. Office cleaning is quoted per site after we see the space." },
      { q: "Is Dapto covered by the Wollongong page?", a: "Dapto and the 2530 district have their own page, with the same published prices." },
    ],
  },
];

export function getHub(slug: string): HubContent {
  const h = HUBS.find((x) => x.slug === slug);
  if (!h) throw new Error(`Unknown hub: ${slug}`);
  return h;
}
