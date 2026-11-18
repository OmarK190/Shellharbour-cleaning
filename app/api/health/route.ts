export async function GET(): Promise<Response> {
  return Response.json({ status: "ok", commit: process.env.GIT_COMMIT ?? "dev" });
}
