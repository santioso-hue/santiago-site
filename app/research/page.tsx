import type { Metadata } from "next";
import { research } from "@/content/research";
import { ResearchCard } from "@/components/research-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in neural engineering, computational imaging, and medical imaging.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading
        title="Research"
        lede="Selected projects across neural engineering, computational imaging, and medical imaging."
      />
      <div className="space-y-6">
        {research.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 60}>
            <ResearchCard entry={entry} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
