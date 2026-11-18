// Generates the static logo and default social image with next/og (run: npx tsx scripts/assets/generate-brand-images.tsx).
// Colours are the design tokens from app/globals.css.
import fs from "node:fs";
import { ImageResponse } from "next/og";

const DEEP_WATER = "#0b3b4a";
const SEA_GLASS = "#dcefea";
const ESCARPMENT = "#2f6b4f";
const SAND = "#f5ede1";

async function save(res: ImageResponse, file: string) {
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  console.log("wrote", file);
}

const logo = new ImageResponse(
  (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: DEEP_WATER, color: SEA_GLASS, fontSize: 168, fontWeight: 700, letterSpacing: -6 }}>
      SC
    </div>
  ),
  { width: 512, height: 512 },
);

const og = new ImageResponse(
  (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: SEA_GLASS, color: DEEP_WATER }}>
      <div style={{ fontSize: 76, fontWeight: 700 }}>Shellharbour Cleaning</div>
      <div style={{ fontSize: 40, marginTop: 24, color: ESCARPMENT }}>House and end of lease cleaning in Shellharbour, Kiama, Dapto and Wollongong</div>
      <div style={{ display: "flex", marginTop: 48, height: 24, width: 360, background: SAND }} />
    </div>
  ),
  { width: 1200, height: 630 },
);

(async () => {
  await save(logo, "public/brand/logo.png");
  await save(og, "public/images/og-default.png");
})();
