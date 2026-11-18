// Single source of every business fact on the site (PRD NFR9). Change values here only.
import { blocker, isResolved, OWNER_DECISIONS, type LaunchBlocker } from "./launch";

export { isResolved, type LaunchBlocker } from "./launch";

export type HubSlug = "shellharbour" | "kiama" | "dapto" | "wollongong";
export type Hub = { slug: HubSlug; name: string; path: string };

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: "NSW";
  postalCode: string;
  addressCountry: "AU";
};

export type Phone = { display: string; e164: string };

const STAGING_URL = "https://staging.shellharbourcleaning.invalid";

const HUBS: Hub[] = [
  { slug: "shellharbour", name: "Shellharbour", path: "/locations/shellharbour/" },
  { slug: "kiama", name: "Kiama", path: "/locations/kiama/" },
  { slug: "dapto", name: "Dapto", path: "/locations/dapto/" },
  { slug: "wollongong", name: "Wollongong", path: "/locations/wollongong/" },
];

export const SITE: {
  name: string;
  legalName: string | LaunchBlocker;
  abn: string;
  url: string | LaunchBlocker;
  email: string | LaunchBlocker;
  phone: Phone | LaunchBlocker;
  address: PostalAddress | null | LaunchBlocker;
  description: string;
  logo: string;
  foundingDate: string | null;
  founder: { name: string; role: string; linkedin: string } | null;
  hours: { days: string; open: "09:00"; close: "21:00"; display: string };
  hubs: Hub[];
} = {
  name: "Shellharbour Cleaning",
  legalName: blocker("LB1", "Registered business name for 'Shellharbour Cleaning'"),
  abn: "81 480 225 391",
  url: blocker("LB2", "Production domain, e.g. https://shellharbourcleaning.com.au"),
  email: blocker("LB2", "Business email on the production domain"),
  phone: blocker("LB4", "New phone number supplied by the owner"),
  address: blocker("LB3", "Illawarra address, or confirm a service-area business with address hidden (set to null)"),
  description:
    "House, end of lease, deep and carpet cleaning for homes and small businesses in Shellharbour, Kiama, Dapto and Wollongong, NSW, with published prices from $121.",
  logo: "/brand/logo.png",
  foundingDate: null,
  founder: null,
  hours: { days: "Monday to Sunday", open: "09:00", close: "21:00", display: "9:00 AM–9:00 PM, 7 days" },
  hubs: HUBS,
};

/** Google Business Profile rating. Null until real GBP figures exist (never invent one). */
export const BUSINESS_RATING: { value: number; count: number } | null = null;

/** Real profile URLs only (GBP, LinkedIn, YouTube, Facebook, Instagram, directories). */
export const BUSINESS_PROFILES: string[] = [];

/** Every unresolved launch blocker: config values plus owner decisions. */
export function launchBlockers(): LaunchBlocker[] {
  const fromValues = [SITE.legalName, SITE.url, SITE.email, SITE.phone, SITE.address].filter(
    (v): v is LaunchBlocker => !isResolved(v),
  );
  const fromDecisions = OWNER_DECISIONS.filter((d) => !d.resolved).map((d) => d.blocker);
  const byId = new Map<string, LaunchBlocker>();
  for (const b of [...fromValues, ...fromDecisions]) if (!byId.has(b.id)) byId.set(b.id, b);
  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
}

/** Absolute site origin, without a trailing slash. */
export function siteUrl(): string {
  return isResolved(SITE.url) ? SITE.url.replace(/\/$/, "") : STAGING_URL;
}
