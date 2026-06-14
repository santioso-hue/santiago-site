import Link from "next/link";
import { site } from "@/content/site";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

/**
 * Floating, centered, rounded-pill navigation (modeled on aidanandrews.info).
 * Sticky to the top; the pill itself scrolls horizontally on narrow screens so
 * every item stays reachable without wrapping.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        aria-label="Primary"
        className="no-scrollbar max-w-full overflow-x-auto"
      >
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-bg/80 px-1.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-colors">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 font-serif text-sm font-medium tracking-tight transition-colors hover:text-accent"
          >
            {site.shortName}
          </Link>

          <span aria-hidden className="mx-0.5 h-4 w-px shrink-0 bg-border" />

          <ul className="flex shrink-0 items-center gap-0.5">
            {site.nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
            <li className="shrink-0">
              <a
                href={site.cvHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
              >
                CV
              </a>
            </li>
          </ul>

          <span aria-hidden className="mx-0.5 h-4 w-px shrink-0 bg-border" />

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
