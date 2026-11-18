"use client";

import { useEffect } from "react";
import { getConsent, track, type EventName } from "@/lib/analytics/events";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function loadGa(id: string) {
  if (document.getElementById("ga4")) return;
  const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer ?? [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

/** Loads GA4 only after consent, and sends events for clicks on [data-event] elements. */
export function Analytics({ pageType }: { pageType: string }) {
  useEffect(() => {
    const start = () => {
      if (GA_ID && getConsent() === "granted") loadGa(GA_ID);
    };
    start();
    window.addEventListener("sc-consent", start);

    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-event]");
      const name = el?.getAttribute("data-event") as EventName | null;
      if (!name) return;
      const pageEl = el?.closest("[data-page-type]") ?? document.querySelector("[data-page-type]");
      track(name, { pageType: pageEl?.getAttribute("data-page-type") ?? pageType, hub: el?.getAttribute("data-hub") ?? undefined });
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("sc-consent", start);
      document.removeEventListener("click", onClick);
    };
  }, [pageType]);

  return null;
}
