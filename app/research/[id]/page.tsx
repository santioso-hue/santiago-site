import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { research } from "@/content/research";
import type { ResearchEntry } from "@/content/types";
import { richText } from "@/components/rich-text";
import { Tag } from "@/components/tag";
import { metaMono } from "@/components/ui";

type Figure = NonNullable<ResearchEntry["figures"]>[number];

/** One captioned figure; `number` is its position across the whole entry. */
function ResearchFigure({ fig, number }: { fig: Figure; number: number }) {
  return (
    <figure className="m-0">
      <Image
        src={fig.src}
        alt={fig.alt}
        width={fig.width}
        height={fig.height}
        sizes="(max-width: 768px) 100vw, 768px"
        className="h-auto w-full rounded-lg border border-border bg-white"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-fg-subtle">
        <span className={`${metaMono} mr-2`}>Fig. {number}</span>
        {fig.caption}
      </figcaption>
    </figure>
  );
}

type Params = { id: string };

/** Only entries flagged `detailPage` get a page; all of them prerender. */
export function generateStaticParams(): Params[] {
  return research
    .filter((entry) => entry.detailPage)
    .map((entry) => ({ id: entry.id }));
}

/** An entry without `detailPage` has no page, so it 404s like an unknown id. */
const findEntry = (id: string) =>
  research.find((r) => r.id === id && r.detailPage);

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const entry = findEntry(id);
  if (!entry) return {};
  return { title: entry.title, description: entry.description };
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const entry = findEntry(id);
  if (!entry) notFound();

  const figures = entry.figures ?? [];
  const figNumber = (fig: Figure) => figures.indexOf(fig) + 1;
  const inlineFigures = (paragraph: number) =>
    figures.filter((f) => f.afterParagraph === paragraph);
  const trailingFigures = figures.filter((f) => !f.afterParagraph);

  const detailEntries = research.filter((r) => r.detailPage);
  const nextEntry =
    detailEntries.length > 1
      ? detailEntries[(detailEntries.indexOf(entry) + 1) % detailEntries.length]
      : null;

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/research"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Research
      </Link>

      <header className="mt-8">
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          {entry.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {entry.affiliation ? (
            <p className="text-sm text-fg-muted">{entry.affiliation}</p>
          ) : null}
          {entry.period ? (
            <span className={metaMono}>{entry.period}</span>
          ) : null}
        </div>
      </header>

      <div className="prose-reading mt-8 text-base">
        <p>{richText(entry.description)}</p>
        {entry.body?.map((paragraph, i) => (
          <p key={i}>{richText(paragraph)}</p>
        ))}
      </div>

      {entry.abstract ? (
        <section className="mt-10">
          <h2 className="mb-4 text-lg text-fg">Abstract</h2>
          <div className="prose-reading text-base">
            {entry.abstract.map((paragraph, i) => (
              <div key={i}>
                <p>{paragraph}</p>
                {inlineFigures(i + 1).map((fig) => (
                  <div key={fig.src} className="my-8">
                    <ResearchFigure fig={fig} number={figNumber(fig)} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {trailingFigures.length ? (
        <section className="mt-10 flex flex-col gap-10">
          {trailingFigures.map((fig) => (
            <ResearchFigure key={fig.src} fig={fig} number={figNumber(fig)} />
          ))}
        </section>
      ) : null}

      {entry.links?.length ? (
        <ul className="mt-10 flex flex-col gap-2.5 border-t border-border pt-6">
          {entry.links.map((link) => (
            <li key={link.href} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs font-medium text-accent underline-offset-4 hover:underline"
              >
                {link.label} &rarr;
              </a>
              {link.note ? (
                <span className="text-sm text-fg-subtle">{link.note}</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      {entry.tags.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      ) : null}

      {nextEntry ? (
        <div className="mt-12 border-t border-border pt-6">
          <Link
            href={`/research/${nextEntry.id}`}
            className="group inline-flex flex-wrap items-baseline gap-x-3"
          >
            <span className={metaMono}>Next</span>
            <span className="text-sm font-medium text-fg transition-colors group-hover:text-accent">
              {nextEntry.title} &rarr;
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
