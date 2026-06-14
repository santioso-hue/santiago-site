"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A nav pill that knows whether it points at the current route.
 * Active links get bold weight, the accent color, and aria-current="page".
 */
export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors ${
        active
          ? "font-semibold text-accent"
          : "font-medium text-fg-muted hover:bg-surface hover:text-fg"
      }`}
    >
      {label}
    </Link>
  );
}
