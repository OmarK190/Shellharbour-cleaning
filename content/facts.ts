// /facts/ page (PRD FR52, AI Visibility Checklist "THE /FACTS OR /ABOUT PAGE").
// Every fact derives from config/site.ts or lib/pricing/rates.ts; unresolved launch blockers are omitted.
import { SITE, isResolved } from "@/config/site";
import { RATES, PRICE_FROM, END_OF_LEASE_MAX_CENTS, formatAud } from "@/lib/pricing/rates";

export const FACTS_UPDATED = "2026-11-19";

export type Fact = { label: string; value: string; href?: string };

export function factsList(): Fact[] {
  const facts: Fact[] = [
    { label: "Business name", value: SITE.name },
    { label: "ABN", value: SITE.abn },
    {
      label: "What we do",
      value:
        "Regular house cleaning, one-off and deep cleaning, end of lease (bond) cleaning, carpet steam cleaning, NDIS cleaning for self-managed participants, Airbnb and holiday-let turnovers, and small office cleaning.",
    },
    { label: "Who we serve", value: "Households, tenants, landlords, property managers, holiday-let hosts, NDIS participants and small businesses." },
    { label: "Service areas", value: SITE.hubs.map((h) => h.name).join(", ") + " (NSW, Illawarra region)", href: "/locations/" },
    { label: "Hours", value: SITE.hours.display },
    {
      label: "Prices",
      value: `Regular cleaning ${formatAud(RATES.regularHourlyCents)} an hour with a ${formatAud(RATES.regularMinimumCents)} minimum; end of lease ${formatAud(PRICE_FROM["end-of-lease-cleaning"]!)}–${formatAud(END_OF_LEASE_MAX_CENTS)} by home size; deep cleaning from ${formatAud(PRICE_FROM["deep-cleaning"]!)}; carpet steam cleaning from ${formatAud(PRICE_FROM["carpet-steam-cleaning"]!)} per room; NDIS ${formatAud(PRICE_FROM["ndis-cleaning-services"]!)} an hour GST-free. All other prices include GST.`,
      href: "/pricing/",
    },
    {
      label: "Guarantee",
      value: "Report a missed area within 24 hours with photos; we reply within 48 hours and re-clean free; full refund within 15 days if still unhappy after the re-clean.",
      href: "/guarantee/",
    },
    { label: "Payment", value: "Pay upfront or after the clean by card (Stripe). No call-out fee, no booking fee, no travel loading." },
    { label: "Cancellations", value: "Free changes more than 24 hours before the start; 50% fee for cancellations within 24 hours." },
  ];
  if (SITE.foundingDate) facts.push({ label: "Founded", value: SITE.foundingDate });
  if (isResolved(SITE.phone)) facts.push({ label: "Phone", value: SITE.phone.display });
  if (isResolved(SITE.email)) facts.push({ label: "Email", value: SITE.email });
  if (isResolved(SITE.address) && SITE.address) {
    const a = SITE.address;
    facts.push({ label: "Address", value: `${a.streetAddress}, ${a.addressLocality} ${a.addressRegion} ${a.postalCode}` });
  }
  return facts;
}
