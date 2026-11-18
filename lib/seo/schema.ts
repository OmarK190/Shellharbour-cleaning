// JSON-LD builders (architecture.md §5). Plain objects; render with <JsonLd>.
import { SITE, siteUrl, isResolved, BUSINESS_RATING, BUSINESS_PROFILES, type Hub } from "@/config/site";

type Json = Record<string, unknown>;

const orgId = () => `${siteUrl()}/#organization`;
const businessId = () => `${siteUrl()}/#business`;

export function organizationJsonLd(): Json {
  const o: Json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId(),
    name: SITE.name,
    url: `${siteUrl()}/`,
    logo: `${siteUrl()}${SITE.logo}`,
    description: SITE.description,
    knowsAbout: ["House cleaning", "End of lease cleaning", "Deep cleaning", "Carpet steam cleaning", "NDIS cleaning", "Office cleaning"],
  };
  if (SITE.foundingDate) o.foundingDate = SITE.foundingDate;
  if (BUSINESS_PROFILES.length) o.sameAs = BUSINESS_PROFILES;
  if (SITE.founder) o.founder = { "@type": "Person", name: SITE.founder.name };
  return o;
}

export function websiteJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl()}/#website`,
    url: `${siteUrl()}/`,
    name: SITE.name,
    publisher: { "@id": orgId() },
    inLanguage: "en-AU",
  };
}

export function localBusinessJsonLd(areaServed: Hub[]): Json {
  const lb: Json = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HouseCleaning"],
    "@id": businessId(),
    name: SITE.name,
    url: `${siteUrl()}/`,
    image: `${siteUrl()}${SITE.logo}`,
    description: SITE.description,
    parentOrganization: { "@id": orgId() },
    priceRange: "$$",
    areaServed: areaServed.map((h) => ({ "@type": "City", name: `${h.name}, NSW` })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: SITE.hours.open,
        closes: SITE.hours.close,
      },
    ],
  };
  if (isResolved(SITE.phone)) lb.telephone = SITE.phone.e164;
  if (isResolved(SITE.address) && SITE.address) lb.address = { "@type": "PostalAddress", ...SITE.address };
  if (isResolved(SITE.email)) lb.email = SITE.email;
  if (BUSINESS_PROFILES.length) lb.sameAs = BUSINESS_PROFILES;
  if (BUSINESS_RATING && BUSINESS_RATING.count >= 5) {
    lb.aggregateRating = { "@type": "AggregateRating", ratingValue: BUSINESS_RATING.value, reviewCount: BUSINESS_RATING.count };
  }
  return lb;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl()}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function personJsonLd(p: { name: string; role: string; linkedin: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    worksFor: { "@id": orgId() },
    sameAs: [p.linkedin],
  };
}
