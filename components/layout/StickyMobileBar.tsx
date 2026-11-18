"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, isResolved } from "@/config/site";
import { PRICE_CTA } from "./SiteNav";

const FORM_FIELDS = "input, textarea, select";

export function StickyMobileBar() {
  const [hidden, setHidden] = useState(false);
  const phone = isResolved(SITE.phone) ? SITE.phone : null;

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => setHidden((e.target as Element | null)?.matches?.(FORM_FIELDS) ?? false);
    const onFocusOut = () => setHidden(false);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (hidden) return null;

  const cell = "flex min-h-12 flex-1 items-center justify-center font-semibold";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-sea-glass bg-paper shadow-lift md:hidden">
      {phone && (
        <a href={`tel:${phone.e164}`} data-event="call_click" className={`${cell} text-deep-water`}>
          Call
        </a>
      )}
      {phone && (
        <a href={`sms:${phone.e164}`} data-event="text_click" className={`${cell} text-deep-water`}>
          Text
        </a>
      )}
      <Link href={PRICE_CTA.href} data-event="quote_started" className={`${cell} bg-coral text-deep-water`}>
        {PRICE_CTA.label}
      </Link>
    </div>
  );
}
