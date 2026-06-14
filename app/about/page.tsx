import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/content/about";
import { site } from "@/content/site";
import type { AboutContent, TimelineItem } from "@/content/types";
import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";
import { LogoTile } from "@/components/logo-tile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: bio, education, and research interests.`,
};

/** A titled block. Serif subheading + content, with consistent vertical rhythm. */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-fg-subtle">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Vertical timeline with a left rule and accent dots. */
function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-7 border-l border-border pl-6">
      {items.map((item, i) => (
        <li key={`${item.org}-${i}`} className="relative">
          <span
            aria-hidden
            className="absolute -left-[1.6875rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
            <h3 className="text-base font-medium text-fg">{item.role}</h3>
            <span className="text-sm text-fg-subtle">{item.period}</span>
          </div>
          <p className="text-sm text-fg-muted">{item.org}</p>
          {item.detail ? (
            <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
              {item.detail}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Personal closing: one serif-italic line beside a photo, at the foot of the page. */
function Personal({ data }: { data: NonNullable<AboutContent["personal"]> }) {
  return (
    <section className="mt-16 border-t border-border pt-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
        <blockquote className="max-w-prose flex-1">
          <p className="font-serif text-[1.6rem] italic leading-snug text-fg sm:text-[1.75rem]">
            &ldquo;{data.quote}&rdquo;
          </p>
        </blockquote>
        <figure className="m-0 w-full shrink-0 sm:w-60">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={data.photo.src}
              alt={data.photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 240px"
              className="object-cover dark:brightness-90"
            />
          </div>
          {data.photo.caption ? (
            <figcaption className="mt-2 text-xs leading-relaxed text-fg-subtle">
              {data.photo.caption}
            </figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading title="About" />

      <div className="prose-reading max-w-prose text-base">
        {about.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {about.now ? (
        <div className="mt-8 rounded-lg border border-border bg-accent-soft p-4">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
            {about.now}
          </p>
        </div>
      ) : null}

      <Section title="Education">
        <ul className="space-y-6">
          {about.education.map((item, i) => (
            <li key={`${item.org}-${i}`} className="flex items-start gap-4">
              {item.logo ? (
                <LogoTile
                  src={item.logo.src}
                  alt={item.logo.alt}
                  className="h-12 w-12 rounded-xl p-2"
                />
              ) : null}
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <h3 className="text-base font-medium text-fg">{item.role}</h3>
                  <span className="text-sm text-fg-subtle">{item.period}</span>
                </div>
                <p className="text-sm text-fg-muted">{item.org}</p>
                {item.detail ? (
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {item.detail}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        {about.affiliations ? (
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {about.affiliations.map((a) => (
              <li
                key={a.name}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-surface/40 py-1.5 pl-1.5 pr-3.5"
              >
                <LogoTile
                  src={a.logo.src}
                  alt={a.logo.alt}
                  className="h-8 w-8 rounded-md p-1"
                />
                <span className="leading-tight">
                  <span className="text-sm font-medium text-fg">{a.name}</span>
                  {a.role ? (
                    <span className="block text-xs text-fg-subtle">{a.role}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>

      <Section title="Experience">
        <Timeline items={about.experience} />
      </Section>

      <Section title="Research interests">
        <ul className="flex flex-wrap gap-2">
          {about.interests.map((interest) => (
            <li key={interest}>
              <Tag>{interest}</Tag>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Honors">
        <ul className="space-y-3">
          {about.honors.map((honor) => (
            <li
              key={honor.title}
              className="flex gap-3 text-[15px] leading-relaxed"
            >
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>
                <span className="font-medium text-fg">{honor.title}.</span>{" "}
                {honor.detail ? (
                  <span className="text-fg-muted">{honor.detail}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Curriculum vitae">
        <a
          href={site.cvHref}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:text-accent"
        >
          Download CV (PDF)
        </a>
      </Section>

      {about.personal ? <Personal data={about.personal} /> : null}
    </div>
  );
}
