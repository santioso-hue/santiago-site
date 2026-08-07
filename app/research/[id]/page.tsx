import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { research } from "@/content/research";
import { CardLinks } from "@/components/card-links";
import { LogoTile } from "@/components/logo-tile";
import { richText } from "@/components/rich-text";
import { Tag } from "@/components/tag";
import { metaMono } from "@/components/ui";

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

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/research"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Research
      </Link>

      <header className="mt-6 flex items-start gap-4 sm:gap-5">
        {entry.logo ? (
          <LogoTile
            src={entry.logo.src}
            alt={entry.logo.alt}
            keepColor={entry.logo.keepColor}
            className="h-14 w-14 shrink-0 rounded-2xl p-2.5 sm:h-16 sm:w-16"
          />
        ) : null}

        <div className="min-w-0 flex-1">
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
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      ) : null}

      {entry.figures?.length ? (
        <section className="mt-10 flex flex-col gap-10">
          {entry.figures.map((fig) => (
            <figure key={fig.src} className="m-0">
              <Image
                src={fig.src}
                alt={fig.alt}
                width={fig.width}
                height={fig.height}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full rounded-lg border border-border bg-white"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-fg-subtle">
                {fig.caption}
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      {entry.tags.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      ) : null}

      {entry.links ? <CardLinks links={entry.links} /> : null}
    </div>
  );
}
