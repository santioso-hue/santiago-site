import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { FigureLightbox } from "@/components/figure-lightbox";
import { plainText, richText } from "@/components/rich-text";
import { metaText, newTabProps, tapTarget } from "@/components/ui";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return projects.map((entry) => ({ id: entry.id }));
}

const findEntry = (id: string) => projects.find((p) => p.id === id);

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const entry = findEntry(id);
  if (!entry) return {};
  return { title: entry.title, description: plainText(entry.description) };
}

/** A project's own page: the figure at full width, the whole description, links, and methods. */
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const entry = findEntry(id);
  if (!entry) notFound();

  const paragraphs = entry.body ?? [entry.description];

  return (
    <div className="mx-auto max-w-3xl">
      <Link href="/#projects" className={`${tapTarget} text-sm font-medium underline underline-offset-4`}>
        All projects
      </Link>

      <header className="mt-6">
        <h1 className="text-page font-bold tracking-tight text-balance">{entry.title}</h1>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {entry.affiliation ? <p className="text-sm text-fg-muted">{entry.affiliation}</p> : null}
          {entry.period ? <span className={metaText}>{entry.period}</span> : null}
        </div>
      </header>

      <figure className="m-0 mt-8">
        <FigureLightbox
          src={entry.image.src}
          alt={entry.image.alt}
          width={entry.image.width}
          height={entry.image.height}
        >
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            width={entry.image.width}
            height={entry.image.height}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-xl bg-white"
            priority
          />
        </FigureLightbox>
      </figure>

      <div className="prose-reading mt-8 text-base">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{richText(paragraph)}</p>
        ))}
      </div>

      {entry.links?.length ? (
        <ul className="mt-6 flex flex-wrap gap-x-4">
          {entry.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...newTabProps}
                className={`${tapTarget} text-sm font-medium underline underline-offset-4`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-4 text-sm text-fg-subtle">{entry.tags.join(", ")}</p>
    </div>
  );
}
