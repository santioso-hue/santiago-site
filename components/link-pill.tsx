import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  Code,
  FileText,
  Presentation,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { externalLinkProps } from "./ui";

/** The symbol for each kind of link on an entry. */
const LINK_ICONS: Record<string, LucideIcon> = {
  Paper: FileText,
  Poster: Presentation,
  Code,
  Trial: ClipboardList,
  Details: BookOpen,
  BibTeX: Quote,
};

/** The visible round button; the surrounding element keeps a 44 px touch target. */
const ROUND =
  "grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-bg";

/** The label shown above a symbol on hover or keyboard focus. */
export function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-fg px-1.5 py-0.5 text-xs text-bg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {children}
    </span>
  );
}

/** A round symbol for BibTeX's <summary>, which is not itself a link. */
export function IconBadge({ label }: { label: string }) {
  const Icon = LINK_ICONS[label] ?? FileText;
  return (
    <>
      <span className={ROUND}>
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <Tooltip>{label}</Tooltip>
    </>
  );
}

/** A link shown as a symbol, with its label on hover and for screen readers. */
export function IconLink({ href, label }: { href: string; label: string }) {
  const className = "group relative inline-flex h-11 w-11 items-center justify-center";
  const content = <IconBadge label={label} />;

  return href.startsWith("/") && !/\.\w+$/.test(href) ? (
    <Link href={href} aria-label={label} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} aria-label={label} {...externalLinkProps(href)} className={className}>
      {content}
    </a>
  );
}

/** A small rounded link with words, for what a symbol cannot say: an advisor's name. */
export function LinkPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className="group inline-flex min-h-11 items-center"
    >
      <span className="rounded-full bg-accent-soft px-3 py-1 text-[13px] font-medium text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
        {children}
      </span>
    </a>
  );
}
