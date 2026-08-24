import { ArrowUpRight } from "lucide-react";
import type { Publication, PublicationType } from "@/content/types";
import { publicFileSize } from "@/lib/asset-size";

const TYPE_LABELS: Record<PublicationType, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  "in-preparation": "In preparation",
  poster: "Poster",
  talk: "Talk",
  thesis: "Thesis",
};

/** One citation row. Links to the DOI when present, otherwise the provided URL. */
export function PublicationItem({ pub }: { pub: Publication }) {
  const href = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;
  const isLocalFile = !pub.doi && pub.url?.startsWith("/");
  const ext = isLocalFile ? pub.url!.split(".").pop()!.toUpperCase() : null;
  const size = isLocalFile ? publicFileSize(pub.url!) : null;

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
          {pub.doi
            ? `doi.org/${pub.doi}`
            : ext
              ? `Poster (${ext}${size ? `, ${size}` : ""})`
              : "View"}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      ) : null}

      {pub.bibtex ? (
        <details className="mt-3">
          <summary className="cursor-pointer font-mono text-xs font-medium text-fg-subtle transition-colors hover:text-accent">
            BibTeX
          </summary>
          <pre className="mt-2 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-[11px] leading-relaxed text-fg-muted">
            {pub.bibtex}
          </pre>
        </details>
      ) : null}
    </article>
  );
}
