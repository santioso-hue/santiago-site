import { inPreparation, publications, talks } from "@/content/publications";
import type { Publication } from "@/content/types";
import { PublicationItem } from "./publication-item";

/** Newest first. */
const byYear = (a: { year: number }, b: { year: number }) => b.year - a.year;

function Group({ title, items }: { title?: string; items: Publication[] }) {
  return (
    <div className={title ? "mt-14" : ""}>
      {title ? <h3 className="mb-6 text-title font-medium text-fg-muted">{title}</h3> : null}
      <ul className="space-y-8">
        {items.map((pub) => (
          <li key={pub.id}>
            <PublicationItem pub={pub} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PublicationList() {
  return (
    <>
      <Group items={[...publications].sort(byYear)} />
      <Group title="In preparation" items={inPreparation} />
      <Group title="Talks and posters" items={[...talks].sort(byYear)} />
    </>
  );
}
