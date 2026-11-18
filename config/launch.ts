// Launch blockers (PRD "Launch Blockers" table). A value that is still a LaunchBlocker
// renders nothing on the site and fails a production build (scripts/checks/check-launch.mjs).

export type LaunchBlockerId = "LB1" | "LB2" | "LB3" | "LB4" | "LB5" | "LB6" | "LB7" | "LB8";

export type LaunchBlocker = { kind: "launch-blocker"; id: LaunchBlockerId; note: string };

export function blocker(id: LaunchBlockerId, note: string): LaunchBlocker {
  return { kind: "launch-blocker", id, note };
}

export function isResolved<T>(value: T | LaunchBlocker): value is T {
  return !(typeof value === "object" && value !== null && (value as LaunchBlocker).kind === "launch-blocker");
}

// Blockers that are decisions or assets rather than a single config value.
// Flip `resolved` to true once the owner has supplied the item.
export const OWNER_DECISIONS: { blocker: LaunchBlocker; resolved: boolean }[] = [
  { blocker: blocker("LB1", "Register 'Shellharbour Cleaning' as a business name (ASIC) and check IP Australia"), resolved: false },
  { blocker: blocker("LB5", "Confirm which services are offered in the Illawarra"), resolved: false },
  { blocker: blocker("LB6", "Confirm prices apply in NSW and confirm the end of lease price grid"), resolved: false },
  { blocker: blocker("LB7", "Real photos of team and completed jobs"), resolved: false },
  { blocker: blocker("LB8", "Insurance details and police-check process wording"), resolved: false },
];
