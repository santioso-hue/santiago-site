import Link from "next/link";
import type { ResearchLink } from "@/content/types";
import { CardLinks } from "./card-links";
import { richText } from "./rich-text";
import { Tag } from "./tag";
import { metaMono } from "./ui";

/** The two card text sizes: research titles are larger, with a wider header gap. */
const SIZES = {
  base: { title: "text-lg", gap: "gap-x-3" },
  lg: { title: "text-xl", gap: "gap-x-4" },
} as const;

/** Fields CardBody renders; both ProjectEntry and ResearchEntry satisfy this. */
interface CardBodyEntry {
  title: string;
  period?: string;
  affiliation?: string;
  description: string;
  tags: string[];
  links?: ResearchLink[];
}

/**
 * The text block shared by ProjectCard and ResearchCard: title + period header,
 * affiliation, description, tag chips, and outbound links.
 */
export function CardBody({
  entry,
  size = "base",
  titleHref,
}: {
  entry: CardBodyEntry;
  size?: keyof typeof SIZES;
  /** When set, the title links here (e.g. to the entry's detail page). */
  titleHref?: string;
}) {
  return (
    <>
      <div
        className={`flex flex-wrap items-baseline justify-between ${SIZES[size].gap} gap-y-1`}
      >
        <h2 className={`${SIZES[size].title} font-medium tracking-tight`}>
          {titleHref ? (
            <Link
              href={titleHref}
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {entry.title}
            </Link>
          ) : (
            entry.title
          )}
        </h2>
        {entry.period ? (
          <span className={metaMono}>{entry.period}</span>
        ) : null}
      </div>

      {entry.affiliation ? (
        <p className="mt-1 text-sm text-fg-muted">{entry.affiliation}</p>
      ) : null}

      <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
        {richText(entry.description)}
      </p>

      {entry.tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.links ? <CardLinks links={entry.links} /> : null}
    </>
  );
}
