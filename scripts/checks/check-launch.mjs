// Lists unresolved launch blockers (config/launch.ts, config/site.ts).
// Fails only when DEPLOY_ENV=production. Run with: tsx scripts/checks/check-launch.mjs
import { launchBlockers } from "../../config/site.ts";

const open = launchBlockers();
const production = process.env.DEPLOY_ENV === "production";

if (open.length === 0) {
  console.log("check:launch — all launch blockers resolved.");
  process.exit(0);
}

for (const b of open) console.log(`${b.id}: ${b.note}`);

if (production) {
  console.error(`check:launch — ${open.length} launch blocker(s) unresolved; production build blocked.`);
  process.exit(1);
}
console.warn(`check:launch — ${open.length} launch blocker(s) open (allowed outside production).`);
