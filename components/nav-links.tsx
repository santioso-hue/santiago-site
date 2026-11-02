"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { newTabProps, tapTarget } from "./ui";

const LINK = `${tapTarget} whitespace-nowrap px-2 text-sm transition-colors sm:px-2.5`;

/** Section links; on the home page the one for the section in view is marked current. */
export function NavLinks() {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = site.nav
      .map((item) => document.getElementById(item.href.replace("/#", "")))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          if (entry.isIntersecting) setCurrent(id);
          else setCurrent((prev) => (prev === id ? null : prev));
        }
      },
      // A section counts as current once it crosses a thin band near the top.
      { rootMargin: "-20% 0px -75% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <ul className="flex items-center">
      {site.nav.map((item) => {
        const active = pathname === "/" && item.href === `/#${current}`;
        return (
          <li key={item.href} className={item.onPhone ? "" : "hidden md:block"}>
            <Link
              href={item.href}
              aria-current={active ? "location" : undefined}
              className={`${LINK} ${active ? "font-medium text-fg" : "text-fg-muted hover:text-fg"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
      <li>
        <a
          href={site.cvHref}
          {...newTabProps}
          className={`${LINK} text-fg-muted hover:text-fg`}
        >
          CV
        </a>
      </li>
    </ul>
  );
}
