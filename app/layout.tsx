import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700"], display: "swap", variable: "--font-fraunces" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-figtree" });

export const metadata: Metadata = { title: "Shellharbour Cleaning" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="pb-16 md:pb-0">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:p-2">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
