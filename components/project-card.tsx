import Image from "next/image";
import type { ProjectEntry } from "@/content/types";
import { CardLinks } from "./card-links";
import { richText } from "./rich-text";
import { Tag } from "./tag";

/** One project card: optional cover figure on top, then title, meta, description, tags, links. */
export function ProjectCard({ entry }: { entry: ProjectEntry }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-surface/40 transition-colors hover:border-border-strong">
      {entry.image ? (
        <div className="relative aspect-[16/9] w-full border-b border-border bg-white">
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h2 className="text-lg font-medium tracking-tight">{entry.title}</h2>
          {entry.period ? (
            <span className="text-sm text-fg-subtle">{entry.period}</span>
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
      </div>
    </article>
  );
}
