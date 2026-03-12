import dynamic from "next/dynamic";
import Hero from "@/components/sections/hero";

const WebinarTopics = dynamic(
  () => import("@/components/sections/webinar-topics"),
  { ssr: true },
);

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <WebinarTopics />
    </main>
  );
}
