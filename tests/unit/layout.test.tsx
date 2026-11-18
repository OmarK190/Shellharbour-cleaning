// @vitest-environment jsdom
import { render, screen, cleanup } from "@testing-library/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { NAV_ITEMS } from "@/components/layout/SiteNav";

afterEach(cleanup);

test("nav has at most 5 items with trailing-slash paths", () => {
  expect(NAV_ITEMS.length).toBeLessThanOrEqual(5);
  for (const item of NAV_ITEMS) expect(item.href).toMatch(/^\/([a-z0-9-]+\/)*$/);
});

test("header has See my price CTA linking to /book-now/", () => {
  render(<Header />);
  expect(screen.getByRole("link", { name: "See my price" })).toHaveAttribute("href", "/book-now/");
});

test("no tel or sms link and no placeholder text while phone is an open launch blocker", () => {
  const { container } = render(
    <>
      <Header />
      <Footer />
      <StickyMobileBar />
    </>,
  );
  expect(container.querySelector('a[href^="tel:"]')).toBeNull();
  expect(container.querySelector('a[href^="sms:"]')).toBeNull();
  expect(container.textContent).not.toMatch(/undefined|LB\d|launch-blocker/);
});

test("footer links every hub and shows ABN", () => {
  render(<Footer />);
  for (const hub of ["Shellharbour", "Kiama", "Dapto", "Wollongong"]) {
    expect(screen.getAllByRole("link", { name: new RegExp(hub) }).length).toBeGreaterThan(0);
  }
  expect(screen.getByText(/ABN 81 480 225 391/)).toBeInTheDocument();
});

test("sticky bar always offers See my price", () => {
  render(<StickyMobileBar />);
  expect(screen.getByRole("link", { name: "See my price" })).toHaveAttribute("href", "/book-now/");
});
