export type NavItem = { href: string; label: string };

// Primary navigation: at most five items (PRD Story 1.3).
export const NAV_ITEMS: NavItem[] = [
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Locations" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/about/", label: "About" },
];

export const PRICE_CTA = { href: "/book-now/", label: "See my price" } as const;
