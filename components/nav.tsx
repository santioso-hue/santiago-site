import Link from "next/link";
import { site } from "@/content/site";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

/**
 * Plain top bar: name on the left, section links and the theme toggle on the right.
 * Below `sm` the name and the secondary links drop out so everything fits at 360 px.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="hidden min-h-11 items-center whitespace-nowrap text-sm font-medium sm:inline-flex"
        >
          {site.name}
        </Link>
        <div className="flex w-full items-center justify-between gap-1 sm:w-auto">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
