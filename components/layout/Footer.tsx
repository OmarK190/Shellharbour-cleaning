import Link from "next/link";
import { SITE, isResolved } from "@/config/site";

const COMPANY_LINKS = [
  { href: "/services/", label: "All services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/guarantee/", label: "Our guarantee" },
  { href: "/facts/", label: "Business facts" },
];

const LEGAL_LINKS = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
];

export function Footer() {
  const phone = isResolved(SITE.phone) ? SITE.phone : null;
  const email = isResolved(SITE.email) ? SITE.email : null;
  return (
    <footer className="bg-deep-water text-paper">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{SITE.name}</p>
          <p className="mt-2">Cleaning across Shellharbour, Kiama, Dapto and Wollongong, NSW.</p>
          <p className="mt-2">{SITE.hours.display}</p>
          {phone && (
            <p className="mt-2">
              <a href={`tel:${phone.e164}`} data-event="call_click" className="underline">
                {phone.display}
              </a>
            </p>
          )}
          {email && (
            <p className="mt-2">
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </p>
          )}
          <p className="mt-2">ABN {SITE.abn}</p>
        </div>
        <nav aria-label="Areas we clean">
          <p className="font-semibold">Areas we clean</p>
          <ul className="mt-2 space-y-1">
            {SITE.hubs.map((hub) => (
              <li key={hub.slug}>
                <Link href={hub.path} className="underline-offset-2 hover:underline">
                  Cleaners in {hub.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="font-semibold">Company</p>
          <ul className="mt-2 space-y-1">
            {[...COMPANY_LINKS, ...LEGAL_LINKS].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline-offset-2 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
