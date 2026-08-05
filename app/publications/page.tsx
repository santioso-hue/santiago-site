import type { Metadata } from "next";
import { publications, talks } from "@/content/publications";
import { PublicationItem } from "@/components/publication-item";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Papers, preprints, and conference presentations by Santiago Osorio Jurado.",
};

/** Newest first. */
const byYear = (a: { year: number }, b: { year: number }) => b.year - a.year;

export default function PublicationsPage() {
  const papers = [...publications].sort(byYear);
  const presentations = [...talks].sort(byYear);

  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading
        title="Publications"
        lede="Papers and preprints, newest first. Links resolve to the DOI where available."
      />
      <div>
        {papers.map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
      </div>

      {presentations.length > 0 ? (
        <section className="mt-14">
          <h2 className="mb-5 text-lg text-fg">Talks and posters</h2>
          <div>
            {presentations.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
