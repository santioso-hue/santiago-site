import { Hero } from "@/components/hero";
import { AboutBody } from "@/components/about-body";

// The landing page is the hero plus the full About content (modeled on aidanandrews.info).
export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <Hero />
      <AboutBody />
    </div>
  );
}
