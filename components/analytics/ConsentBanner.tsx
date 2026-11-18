"use client";

import { useSyncExternalStore } from "react";
import { getConsent, setConsent, type Consent } from "@/lib/analytics/events";

const BUTTON = "min-h-12 flex-1 rounded-control border-2 border-deep-water px-4 font-semibold text-deep-water";

function subscribe(onChange: () => void) {
  window.addEventListener("sc-consent", onChange);
  return () => window.removeEventListener("sc-consent", onChange);
}

// The server cannot read the cookie, so it renders no banner; the client decides after hydration.
const serverSnapshot = (): Consent | "server" => "server";

export function ConsentBanner() {
  const consent = useSyncExternalStore<Consent | "server">(subscribe, getConsent, serverSnapshot);

  if (consent !== "unset") return null;

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
        <button type="button" className={BUTTON} onClick={() => setConsent("granted")}>
          Accept
        </button>
        <button type="button" className={BUTTON} onClick={() => setConsent("denied")}>
          Reject
        </button>
      </div>
    </section>
  );
}
