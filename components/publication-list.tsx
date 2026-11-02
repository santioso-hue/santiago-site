import { inPreparation, publications } from "@/content/publications";
import { PublicationItem } from "./publication-item";

/** One list: published papers newest first, then manuscripts in preparation. */
export function PublicationList() {
  const papers = [...publications].sort((a, b) => b.year - a.year);

  return (
    <ul className="space-y-5">
      {[...papers, ...inPreparation].map((pub) => (
        <li key={pub.id}>
          <PublicationItem pub={pub} />
        </li>
      ))}
    </ul>
  );
}
