import Image from "next/image";
import { Award, CalendarDays, GraduationCap } from "lucide-react";
import { about } from "@/content/about";
import { site } from "@/content/site";
import type { AboutContent, TimelineItem } from "@/content/types";
import { LogoTile } from "@/components/logo-tile";
import { Reveal } from "@/components/reveal";

// Card surface that lifts on hover — accent-tinted border + soft shadow, matching the
// project/research cards. Reused by the Education and Experience entries.
const cardClass =
  "rounded-lg border border-border bg-surface/40 p-5 transition-[border-color,box-shadow] duration-200 hover:border-accent/40 hover:shadow-md";

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
      <h2 className="mb-5 text-lg text-fg">{title}</h2>
      {children}
    </section>
  );
}

/** A small muted label for a sub-section inside a card. */
function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-medium text-fg-subtle">{children}</p>
  );
}

/** Advisor/professor profile-link chips for a role. */
function Professors({
  items,
}: {
  items: NonNullable<TimelineItem["professors"]>;
}) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((p) => (
        <li key={p.href}>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
          >
            {p.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Personal closing: one serif-italic line beside a photo. */
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

/**
 * The full About content (intro, education, experience, interests, CV, and the personal
 * closing), rendered on the home page beneath the hero. Honors and affiliations live
 * inside the Education card, since they were all earned during undergrad.
 */
export function AboutBody() {
  const edu = about.education[0];

  return (
    <div className="mt-14 border-t border-border pt-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
        <div className="prose-reading min-w-0 flex-1 text-base">
          <p>
            <span className="font-medium text-fg">Currently I am</span>{" "}
            {about.currently}.
          </p>
          <p>
            <span className="font-medium text-fg">Previously, I was</span>{" "}
            {about.previously}.
          </p>
        </div>
        {about.photo ? (
          <figure className="m-0 w-full shrink-0 sm:w-72">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src={about.photo.src}
                alt={about.photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 288px"
                className="object-cover dark:brightness-90"
              />
            </div>
          </figure>
        ) : null}
      </div>

      <Section title="Education">
        <Reveal>
          <div className={cardClass}>
            {edu ? (
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                {edu.logo ? (
                  <LogoTile
                    src={edu.logo.src}
                    alt={edu.logo.alt}
                    className="h-24 w-24 shrink-0 rounded-2xl p-3.5"
                  />
                ) : null}
                <div className="flex min-w-0 flex-1 flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium text-fg">{edu.org}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-fg-muted">
                      <li className="flex items-center gap-2.5">
                        <GraduationCap
                          className="h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        {edu.role}
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CalendarDays
                          className="h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        Graduated {edu.period}
                      </li>
                      {edu.detail ? (
                        <li className="flex items-center gap-2.5">
                          <Award
                            className="h-4 w-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          {edu.detail}
                        </li>
                      ) : null}
                    </ul>
                  </div>

                  {about.affiliations ? (
                    <ul className="flex shrink-0 flex-col gap-2.5">
                      {about.affiliations.map((a) => (
                        <li
                          key={a.name}
                          className="flex items-center gap-2.5 rounded-lg border border-border bg-surface py-1.5 pl-1.5 pr-3.5"
                        >
                          <LogoTile
                            src={a.logo.src}
                            alt={a.logo.alt}
                            className="h-8 w-8 rounded-md p-1"
                          />
                          <span className="leading-tight">
                            <span className="text-sm font-medium text-fg">
                              {a.name}
                            </span>
                            {a.role ? (
                              <span className="block text-xs text-fg-subtle">
                                {a.role}
                              </span>
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ) : null}

            {about.honors.length > 0 ? (
              <div className="mt-5 border-t border-border pt-5">
                <CardLabel>Honors &amp; awards</CardLabel>
                <ul className="space-y-2.5">
                  {about.honors.map((honor) => (
                    <li
                      key={honor.title}
                      className="flex items-baseline justify-between gap-4 text-[15px] leading-snug"
                    >
                      <span className="min-w-0">
                        {honor.href ? (
                          <a
                            href={honor.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="font-medium text-fg underline decoration-accent/40 decoration-1 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
                          >
                            {honor.title}
                          </a>
                        ) : (
                          <span className="font-medium text-fg">
                            {honor.title}
                          </span>
                        )}
                      </span>
                      {honor.detail ? (
                        <span className="shrink-0 whitespace-nowrap font-mono text-xs text-fg-subtle">
                          {honor.detail}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Reveal>
      </Section>

      <Section title="Experience">
        <ul className="space-y-4">
          {about.experience.map((item, i) => (
            <li key={`${item.org}-${i}`}>
              <Reveal delay={i * 60}>
                <div className={cardClass}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-medium text-fg">
                        {item.role}
                      </h3>
                      <p className="text-sm text-fg-muted">{item.org}</p>
                      {item.detail ? (
                        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                          {item.detail}
                        </p>
                      ) : null}
                      {item.professors && item.professors.length > 0 ? (
                        <Professors items={item.professors} />
                      ) : null}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2.5">
                      <span className="whitespace-nowrap font-mono text-[13px] text-fg-subtle">
                        {item.period}
                      </span>
                      {item.logo ? (
                        <LogoTile
                          src={item.logo.src}
                          alt={item.logo.alt}
                          className="h-20 w-20 rounded-2xl p-2.5"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Research interests">
        <p className="text-[15px] leading-relaxed text-fg-muted">
          {about.interests
            .map((x, i) => (i === 0 ? x : x.toLowerCase()))
            .slice(0, -1)
            .join(", ")}
          , and {about.interests[about.interests.length - 1].toLowerCase()}.
        </p>
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
