import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectEntry } from "@/content/types";
import { Tag } from "./tag";

/** One project: optional cover figure, title, meta, description, tags, links. */
export function ProjectCard({ entry }: { entry: ProjectEntry }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-surface/40 transition-colors hover:border-border-strong">
      {entry.image ? (
        <div className="relative aspect-[16/9] w-full border-b border-border bg-white">
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 className="text-xl font-medium tracking-tight">{entry.title}</h2>
          {entry.period ? (
            <span className="text-sm text-fg-subtle">{entry.period}</span>
          ) : null}
        </div>

        {entry.affiliation ? (
          <p className="mt-1 text-sm text-fg-muted">{entry.affiliation}</p>
        ) : null}

        <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
          {entry.description}
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

        {entry.links && entry.links.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {entry.links.map((link) => {
              const external =
                link.href.startsWith("http") ||
                /\.(pdf|jpe?g|png)$/i.test(link.href);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="inline-flex items-center gap-0.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
