import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";

// ── Lazy-load everything below the fold ──────────────────────────────────────
// Hero loads eagerly (above the fold — critical path).
// All other sections are code-split so the initial JS bundle the browser must
// parse and execute before first paint is as small as possible.
// ssr: true keeps server-side rendering active so content is still indexable
// by search engines and there's no content flash on hydration.

const ProblemStatement = dynamic(
  () => import("@/components/sections/problem-statement"),
  { ssr: true },
);

const Solution = dynamic(() => import("@/components/sections/solution"), {
  ssr: true,
});

const WebinarTopics = dynamic(
  () => import("@/components/sections/webinar-topics"),
  { ssr: true },
);

const SocialProof = dynamic(
  () => import("@/components/sections/social-proof"),
  { ssr: true },
);

const WebinarCTA = dynamic(() => import("@/components/sections/cta"), {
  ssr: true,
});

export default function HomePage() {
  return (
    <main id="main-content">
      {/* ── Critical: above the fold, eager ── */}
      <Hero />

      {/* ── Below the fold: code-split, streamed ── */}
      <ProblemStatement />
      <Solution />
      <WebinarTopics />
      <SocialProof />
      <WebinarCTA />
    </main>
  );
}
