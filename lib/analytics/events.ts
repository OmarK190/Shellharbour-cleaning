// Consent-gated analytics events (PRD FR49). Nothing is sent until the visitor accepts.
// Consent lives in a first-party cookie, never in localStorage.

export type EventName =
  | "call_click"
  | "text_click"
  | "quote_started"
  | "price_shown"
  | "booking_step_1"
  | "booking_step_2"
  | "booking_step_3"
  | "booking_submitted"
  | "contact_submitted"
  | "careers_applied";

export type Consent = "granted" | "denied" | "unset";

const COOKIE = "sc_consent";
const MAX_AGE_SECONDS = 180 * 24 * 60 * 60;

type Gtag = (...args: unknown[]) => void;

export function getConsent(): Consent {
  if (typeof document === "undefined") return "unset";
  const match = document.cookie.match(/(?:^|;\s*)sc_consent=(granted|denied)/);
  return (match?.[1] as Consent | undefined) ?? "unset";
}

export function setConsent(value: "granted" | "denied"): void {
  document.cookie = `${COOKIE}=${value}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("sc-consent", { detail: value }));
}

export function track(name: EventName, params: { pageType: string; hub?: string }): void {
  if (getConsent() !== "granted") return;
  const gtag = (globalThis as typeof globalThis & { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, { page_type: params.pageType, ...(params.hub ? { hub: params.hub } : {}) });
}
