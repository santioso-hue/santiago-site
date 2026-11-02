import type { Publication } from "@/content/types";
import { publicFileSize } from "@/lib/asset-size";
import { Row } from "./row";
import { newTabProps, tapTarget } from "./ui";

/** One citation row. Links to the DOI when present, otherwise the provided URL. */
export function PublicationItem({ pub }: { pub: Publication }) {
  const href = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;
  const isLocalFile = !pub.doi && pub.url?.startsWith("/");
  const ext = isLocalFile ? pub.url!.split(".").pop()!.toUpperCase() : null;
  const size = isLocalFile ? publicFileSize(pub.url!) : null;
  const kind = pub.type === "talk" ? "Talk" : "Poster";

  return (
    <Row date={pub.type === "in-preparation" ? undefined : String(pub.year)}>
      <h4 className="text-title font-medium">
        {href ? (
          <a
            href={href}
            {...newTabProps}
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h4>

      <p className="mt-1 text-sm leading-relaxed text-fg-muted">
        {pub.authors.map((author, i) => (
          <span key={i}>
            {author.isMe ? (
              <span className="font-semibold text-fg">{author.name}</span>
            ) : (
              author.name
            )}
            {i < pub.authors.length - 1
              ? ", "
              : author.name.endsWith(".")
                ? ""
                : "."}
          </span>
        ))}
        {pub.venue ? (
          <>
            {" "}
            {pub.type === "journal" ? <em>{pub.venue}</em> : pub.venue}.
          </>
        ) : null}
        {pub.type === "poster" || pub.type === "talk" ? ` ${kind}.` : null}
      </p>

      {href ? (
        <a
          href={href}
          {...newTabProps}
          className={`${tapTarget} text-sm font-medium text-accent underline-offset-4 hover:underline`}
        >
          {pub.doi
            ? `doi.org/${pub.doi}`
            : ext
              ? `${kind} (${ext}${size ? `, ${size}` : ""})`
              : "View"}
        </a>
      ) : null}

      {pub.bibtex ? (
        <details>
          <summary className="inline-flex min-h-11 cursor-pointer items-center text-sm text-fg-subtle transition-colors hover:text-accent">
            BibTeX
          </summary>
          <pre className="bibtex mt-1 overflow-x-auto rounded-lg bg-surface p-4 text-xs leading-relaxed text-fg-muted">
            {pub.bibtex}
          </pre>
        </details>
      ) : null}
    </Row>
  );
}
