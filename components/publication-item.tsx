import type { Publication } from "@/content/types";
import { IconBadge, IconLink } from "./link-pill";
import { Entry } from "./row";

/** Keeps a name's initials on the same line as the surname. */
const unbroken = (name: string) => name.replace(/\. /g, ".\u00a0");

function Authors({ pub }: { pub: Publication }) {
  return pub.authors.map((author, i) => (
    <span key={i}>
      {author.isMe ? (
        <span className="font-semibold text-fg">{unbroken(author.name)}</span>
      ) : (
        unbroken(author.name)
      )}
      {i < pub.authors.length - 1
        ? ", "
        : author.name.endsWith(".")
          ? ""
          : "."}
    </span>
  ));
}

/** A paper or manuscript: title with its year or status, citation, then a note or link symbols. */
export function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <Entry
      title={pub.title}
      date={pub.type === "in-preparation" ? "In preparation" : String(pub.year)}
    >
      <p className="mt-1 text-[15px] leading-relaxed text-pretty text-fg-muted">
        <Authors pub={pub} />
        {pub.venue ? (
          <>
            {" "}
            {pub.type === "journal" ? <em>{pub.venue}</em> : pub.venue}.
          </>
        ) : null}
      </p>

      {pub.summary ? (
        <p className="mt-1 text-[15px] leading-relaxed text-fg-muted">{pub.summary}</p>
      ) : null}

      {pub.doi || pub.bibtex ? (
        <div className="-ml-1.5 flex flex-wrap items-start gap-x-1">
          {pub.doi ? <IconLink href={`https://doi.org/${pub.doi}`} label="Paper" /> : null}
          {pub.bibtex ? (
            <details className="open:w-full">
              <summary
                aria-label="BibTeX"
                className="group relative inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden"
              >
                <IconBadge label="BibTeX" />
              </summary>
              <pre className="bibtex mt-1 overflow-x-auto rounded-lg bg-surface p-4 text-xs leading-relaxed text-fg-muted">
                {pub.bibtex}
              </pre>
            </details>
          ) : null}
        </div>
      ) : null}
    </Entry>
  );
}
