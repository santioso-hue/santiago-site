import type { Metadata } from "next";
import { publications } from "@/content/publications";
import { PublicationItem } from "@/components/publication-item";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Publications",
  description: "Preprints and papers by Santiago Osorio Jurado.",
};

export default function PublicationsPage() {
  // Newest first.
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading
        title="Publications"
        lede="Preprints and papers, newest first. Links resolve to the DOI where available."
      />
      <div>
        {sorted.map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}
