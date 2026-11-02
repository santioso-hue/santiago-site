import type { ResearchLink } from "@/content/types";
import { newTabProps, tapTarget } from "./ui";

/** Outbound links for a research or project entry (paper, code, poster). */
export function CardLinks({ links }: { links: ResearchLink[] }) {
  if (links.length === 0) return null;

  return (
    <ul className="mt-1 flex flex-wrap gap-x-4">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...newTabProps}
            className={`${tapTarget} text-sm font-medium text-accent underline-offset-4 hover:underline`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
