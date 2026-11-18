// @vitest-environment jsdom
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { getConsent } from "@/lib/analytics/events";

beforeEach(() => {
  document.cookie = "sc_consent=; Max-Age=0; Path=/";
});
afterEach(cleanup);

test("shows Accept and Reject with equal prominence while consent is unset", () => {
  render(<ConsentBanner />);
  const accept = screen.getByRole("button", { name: "Accept" });
  const reject = screen.getByRole("button", { name: "Reject" });
  expect(accept.className).toBe(reject.className);
});

test("Reject stores denied and hides the banner", () => {
  render(<ConsentBanner />);
  fireEvent.click(screen.getByRole("button", { name: "Reject" }));
  expect(getConsent()).toBe("denied");
  expect(screen.queryByRole("button", { name: "Accept" })).toBeNull();
});

test("not shown once a choice exists", () => {
  document.cookie = "sc_consent=granted; Path=/";
  render(<ConsentBanner />);
  expect(screen.queryByRole("button", { name: "Accept" })).toBeNull();
});
