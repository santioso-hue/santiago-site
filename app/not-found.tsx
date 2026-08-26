import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { metaMono } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className={metaMono}>404</p>
      <SectionHeading
        title="Page not found"
        lede="Nothing lives at this address. It may have moved, or the link was mistyped."
      />
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <Link
            href="/"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            &larr; Back to the home page
          </Link>
        </li>
        <li>
          <Link
            href="/research"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Research
          </Link>
        </li>
      </ul>
    </div>
  );
}
