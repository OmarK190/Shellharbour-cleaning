// @vitest-environment jsdom
import { track, setConsent, getConsent } from "@/lib/analytics/events";

type G = typeof globalThis & { gtag?: (...args: unknown[]) => void };
const g = globalThis as G;

beforeEach(() => {
  document.cookie = "sc_consent=; Max-Age=0; Path=/";
  g.gtag = vi.fn();
});

test("consent starts unset", () => {
  expect(getConsent()).toBe("unset");
});

test("track is a no-op before consent", () => {
  track("call_click", { pageType: "home" });
  expect(g.gtag).not.toHaveBeenCalled();
});

test("track is a no-op after consent is denied", () => {
  setConsent("denied");
  track("call_click", { pageType: "home" });
  expect(g.gtag).not.toHaveBeenCalled();
  expect(getConsent()).toBe("denied");
});

test("track sends after consent granted, stored in a first-party cookie", () => {
  setConsent("granted");
  track("call_click", { pageType: "home", hub: "kiama" });
  expect(g.gtag).toHaveBeenCalledWith("event", "call_click", { page_type: "home", hub: "kiama" });
  expect(getConsent()).toBe("granted");
  expect(document.cookie).toContain("sc_consent=granted");
});

test("consent is not stored in localStorage", () => {
  setConsent("granted");
  expect(window.localStorage.getItem("sc_consent")).toBeNull();
});
