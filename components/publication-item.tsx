import { ArrowUpRight } from "lucide-react";
import type { Publication, PublicationType } from "@/content/types";

const TYPE_LABELS: Record<PublicationType, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  poster: "Poster",
  thesis: "Thesis",
};

/** One citation row. Links to the DOI when present, otherwise the provided URL. */
export function PublicationItem({ pub }: { pub: Publication }) {
  const href = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;

  return (
    <article className="border-t border-border py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {pub.type ? (
          <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-fg-subtle">
            {TYPE_LABELS[pub.type]}
          </span>
        ) : null}
        <span className="text-sm text-fg-subtle">{pub.year}</span>
      </div>

      <h2 className="mt-2 text-lg font-medium leading-snug tracking-tight">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h2>

      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
        {pub.authors.map((author, i) => (
          <span key={i}>
            {author.isMe ? (
              <span className="font-semibold text-fg">{author.name}</span>
            ) : (
              author.name
            )}
            {i < pub.authors.length - 1 ? ", " : ""}
          </span>
        ))}
        {" · "}
        <span className="italic">{pub.venue}</span>
      </p>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 inline-flex items-center gap-0.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          {pub.doi ? `doi.org/${pub.doi}` : "View"}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      ) : null}
    </article>
  );
}
