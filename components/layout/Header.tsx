import Link from "next/link";
import { SITE, isResolved } from "@/config/site";
import { NAV_ITEMS, PRICE_CTA } from "./SiteNav";

export function Header() {
  const phone = isResolved(SITE.phone) ? SITE.phone : null;
  return (
    <header className="border-b border-sea-glass bg-paper">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-display text-xl font-bold text-deep-water">
          {SITE.name}
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-escarpment">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          {phone && (
            <a href={`tel:${phone.e164}`} data-event="call_click" className="hidden font-semibold text-deep-water md:inline">
              Call {phone.display}
            </a>
          )}
          <Link
            href={PRICE_CTA.href}
            data-event="quote_started"
            className="rounded-control bg-coral px-4 py-2 font-semibold text-paper hover:brightness-95"
          >
            {PRICE_CTA.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
