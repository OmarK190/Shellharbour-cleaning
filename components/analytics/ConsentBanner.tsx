"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/analytics/events";

const BUTTON = "min-h-12 flex-1 rounded-control border-2 border-deep-water px-4 font-semibold text-deep-water";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(getConsent() === "unset");
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <section
      aria-label="Cookie choice"
      className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-prose rounded-card bg-paper p-4 shadow-lift md:bottom-4"
    >
      <p>
        We use analytics cookies to see which pages help people book. Nothing loads unless you accept. Read our{" "}
        <a href="/privacy/" className="text-escarpment underline">
          privacy policy
        </a>
        .
      </p>
      <div className="mt-3 flex gap-3">
        <button type="button" className={BUTTON} onClick={() => choose("granted")}>
          Accept
        </button>
        <button type="button" className={BUTTON} onClick={() => choose("denied")}>
          Reject
        </button>
      </div>
    </section>
  );
}
