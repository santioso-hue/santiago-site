import Link from "next/link";
import type { Logo, ResearchLink } from "@/content/types";
import { CardLinks } from "./card-links";
import { richText } from "./rich-text";
import { OrgLine } from "./row";
import { Tag } from "./tag";

/** Fields CardBody renders; both ProjectEntry and ResearchEntry satisfy this. */
interface CardBodyEntry {
  title: string;
  affiliation?: string;
  description: string;
  tags: string[];
  links?: ResearchLink[];
  logo?: Logo;
}

/**
 * The text block shared by research rows and project entries: title, organization
 * line, description, tag chips, and outbound links.
 */
export function CardBody({
  entry,
  titleHref,
}: {
  entry: CardBodyEntry;
  /** When set, the title links here (e.g. to the entry's detail page). */
  titleHref?: string;
}) {
  return (
    <>
      <h3 className="text-title font-medium">
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
      </h3>

      {entry.affiliation ? (
        <OrgLine logo={entry.logo}>{entry.affiliation}</OrgLine>
      ) : null}

      <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
        {richText(entry.description)}
      </p>

      {entry.tags.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-1.5">
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
