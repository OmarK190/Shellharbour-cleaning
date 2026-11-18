import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb + BreadcrumbList JSON-LD. Pass Home first; the last item is the current page. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-4 py-3 text-sm">
      <ol className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <li key={item.path} className="flex gap-2">
            {i < items.length - 1 ? (
              <>
                <Link href={item.path} className="text-escarpment underline-offset-2 hover:underline">
                  {item.name}
                </Link>
                <span aria-hidden="true">/</span>
              </>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </nav>
  );
}
