import { pageMeta } from "@/lib/seo/registry";

export const metadata = pageMeta("/");

export default function HomePage() {
  return (
    <main id="main" data-page-type="home">
      <h1>House cleaning in the Illawarra</h1>
    </main>
  );
}
