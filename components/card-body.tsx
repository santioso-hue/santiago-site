import Link from "next/link";
import type { ResearchLink } from "@/content/types";
import { IconLink } from "./link-pill";
import { richText } from "./rich-text";
import { Entry } from "./row";

/** Fields CardBody renders; ResearchEntry satisfies this. */
interface CardBodyEntry {
  title: string;
  period?: string;
  affiliation?: string;
  description: string;
  summary?: string;
  links?: ResearchLink[];
}

/**
 * A research entry: image or logo, title and date,
 * organization, a short summary, then link symbols.
 */
export function CardBody({
  entry,
  media,
  wideMedia = false,
  titleHref,
}: {
  entry: CardBodyEntry;
  media: React.ReactNode;
  wideMedia?: boolean;
  /** When set, the title and a Details pill link here (the entry's detail page). */
  titleHref?: string;
}) {
  return (
    <Entry
      media={media}
      wideMedia={wideMedia}
      date={entry.period}
      org={entry.affiliation}
      title={
        titleHref ? (
          <Link
            href={titleHref}
            className="underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {entry.title}
          </Link>
        ) : (
          entry.title
        )
      }
    >
      <p className="mt-2 leading-relaxed text-fg-muted">
        {richText(entry.summary ?? entry.description)}
      </p>

      <ul className="-ml-1.5 mt-0.5 flex flex-wrap items-center gap-x-1">
        {entry.links?.map((link) => (
          <li key={link.label}>
            <IconLink href={link.href} label={link.short ?? link.label} />
          </li>
        ))}
        {titleHref ? (
          <li>
            <IconLink href={titleHref} label="Details" />
          </li>
        ) : null}
      </ul>
    </Entry>
  );
}
