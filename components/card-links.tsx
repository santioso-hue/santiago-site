import { ArrowUpRight, FileImage, FileText } from "lucide-react";
import type { ResearchLink } from "@/content/types";
import { GitHubIcon } from "./icons";

/**
 * Outbound links for a card (paper, code, poster), each led by a matching glyph.
 * Shared by ResearchCard and ProjectCard so link and icon behavior live in one place.
 * Icon is inferred from the href: repos get the GitHub mark, image/PDF files a poster
 * glyph, papers (bioRxiv/arXiv/DOI) a document glyph, anything else a generic arrow.
 */
export function CardLinks({ links }: { links: ResearchLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
      {links.map((link) => {
        const isImage = /\.(pdf|jpe?g|png)$/i.test(link.href);
        const isRepo = /github\.com/i.test(link.href);
        const isPaper = /(biorxiv|arxiv|doi\.org|pubmed|ncbi\.nlm)/i.test(
          link.href,
        );
        const external = link.href.startsWith("http") || isImage;
        const LeadingIcon = isRepo
          ? GitHubIcon
          : isImage
            ? FileImage
            : isPaper
              ? FileText
              : null;

        return (
          <li key={link.label}>
            <a
              href={link.href}
              {...(external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {LeadingIcon ? (
                <LeadingIcon className="h-4 w-4" aria-hidden />
              ) : null}
              {link.label}
              {LeadingIcon ? null : (
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
