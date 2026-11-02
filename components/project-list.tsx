import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import { IconLink } from "./link-pill";
import { richText } from "./rich-text";
import { metaText } from "./ui";

/** Projects as a two-column gallery: each figure at its own proportions, then a short note. */
export function ProjectList() {
  return (
    <ul className="gap-7 sm:columns-2">
      {projects.map((entry) => {
        const href = `/projects/${entry.id}`;
        return (
          <li key={entry.id} className="mb-8 break-inside-avoid">
            <Link href={href} className="block">
              <Image
                src={entry.image.src}
                alt={entry.image.alt}
                width={entry.image.width}
                height={entry.image.height}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 410px"
                className="h-auto w-full rounded-xl bg-white"
              />
            </Link>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="min-w-0 text-title font-semibold text-balance">
                <Link href={href} className="underline-offset-4 hover:underline">
                  {entry.title}
                </Link>
              </h3>
              {entry.period ? <span className={`${metaText} whitespace-nowrap`}>{entry.period}</span> : null}
            </div>
            <p className="mt-1 text-[15px] leading-relaxed text-fg-muted">{richText(entry.description)}</p>
            <ul className="-ml-1.5 mt-0.5 flex flex-wrap gap-x-1">
              {entry.links?.map((link) => (
                <li key={link.label}>
                  <IconLink href={link.href} label={link.label} />
                </li>
              ))}
              <li>
                <IconLink href={href} label="Details" />
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
