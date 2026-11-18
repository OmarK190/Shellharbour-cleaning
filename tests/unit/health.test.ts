import { GET } from "@/app/api/health/route";

test("health returns ok with commit", async () => {
  process.env.GIT_COMMIT = "abc123";
  const res = await GET();
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ status: "ok", commit: "abc123" });
});
