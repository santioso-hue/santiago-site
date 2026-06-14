import { ArrowUpRight } from "lucide-react";
import type { ResearchEntry } from "@/content/types";
import { Tag } from "./tag";
import { LiteYouTube } from "./lite-youtube";

/** One research entry: optional leading institution logo, title, meta, description, tags, links, video. */
export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <article className="rounded-lg border border-border bg-surface/40 p-5 transition-colors hover:border-border-strong sm:p-6">
      <div className="flex items-start gap-4 sm:gap-5">
        {entry.logo ? (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 ring-1 ring-border sm:h-16 sm:w-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.logo.src}
              alt={entry.logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
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
      </div>

      {entry.video ? (
        <LiteYouTube
          youtubeId={entry.video.youtubeId}
          title={entry.video.title}
        />
      ) : null}
    </article>
  );
}
