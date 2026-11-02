import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { research } from "@/content/research";
import type { ResearchEntry } from "@/content/types";
import { FigureLightbox } from "@/components/figure-lightbox";
import { LiteYouTube } from "@/components/lite-youtube";
import { richText } from "@/components/rich-text";
import { Tag } from "@/components/tag";
import { metaText, tapTarget } from "@/components/ui";

type Figure = NonNullable<ResearchEntry["figures"]>[number];

/** One captioned figure; `number` is its position across the whole entry. */
function ResearchFigure({ fig, number }: { fig: Figure; number: number }) {
  return (
    <figure className="m-0">
      <FigureLightbox src={fig.src} alt={fig.alt} width={fig.width} height={fig.height}>
        <Image
          src={fig.src}
          alt={fig.alt}
          width={fig.width}
          height={fig.height}
          sizes="(max-width: 768px) 100vw, 768px"
          className="h-auto w-full rounded-lg border border-border bg-white"
        />
      </FigureLightbox>
      <figcaption className="mt-3 text-sm leading-relaxed text-fg-subtle">
        <span className="mr-2 font-medium text-fg-muted">Fig. {number}</span>
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
        href="/#research"
        className={`${tapTarget} text-sm font-medium text-accent underline-offset-4 hover:underline`}
      >
        All research
      </Link>

      <header className="mt-6">
        <h1 className="text-page font-medium tracking-tight">
          {entry.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {entry.affiliation ? (
            <p className="text-sm text-fg-muted">{entry.affiliation}</p>
          ) : null}
          {entry.period ? (
            <span className={metaText}>{entry.period}</span>
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

      {entry.video ? (
        <LiteYouTube youtubeId={entry.video.youtubeId} title={entry.video.title} />
      ) : null}

      {entry.links?.length ? (
        <ul className="mt-10 flex flex-col gap-1">
          {entry.links.map((link) => (
            <li key={link.href} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`${tapTarget} text-sm font-medium text-accent underline-offset-4 hover:underline`}
              >
                {link.label}
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
        <div className="mt-12">
          <Link
            href={`/research/${nextEntry.id}`}
            className="group inline-flex min-h-11 flex-wrap items-baseline gap-x-2 py-2 text-sm"
          >
            <span className="text-fg-subtle">Next:</span>
            <span className="font-medium text-accent underline-offset-4 group-hover:underline">
              {nextEntry.title}
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
