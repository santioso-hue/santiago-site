import Image from "next/image";
import { about } from "@/content/about";
import { LinkPill } from "./link-pill";
import { Award } from "lucide-react";
import { Entry, LogoMark } from "./row";
import { metaText, newTabProps } from "./ui";

const BODY = "mt-1 leading-relaxed text-fg-muted";
const TEXT_LINK = "underline decoration-fg-subtle underline-offset-2 hover:decoration-fg";

/** One short entry per role: logo, organization and date, role, advisor. */
export function Experience() {
  return (
    <ul className="space-y-6">
      {about.experience.map((item) => (
        <li key={`${item.org}-${item.period}`}>
          <Entry
            compact
            media={item.logo ? <LogoMark logo={item.logo} /> : undefined}
            title={item.org}
            date={item.period}
            org={item.role}
            aside={item.professors?.map((p) => (
              <LinkPill key={p.href} href={p.href}>
                {p.name}
              </LinkPill>
            ))}
          >
            {item.detail ? <p className={BODY}>{item.detail}</p> : null}
          </Entry>
        </li>
      ))}
    </ul>
  );
}

/** The degree across the top, then the graduation photo beside the honors. */
export function Education() {
  const edu = about.education;

  return (
    <>
      <Entry title={edu.org} date={edu.period} org={edu.role}>
        {edu.detail ? <p className={BODY}>{edu.detail}</p> : null}
      </Entry>

      <div className="mt-4 grid items-start gap-6 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-8">
        {about.photo ? (
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            width={about.photo.width}
            height={about.photo.height}
            sizes="(max-width: 768px) 100vw, 320px"
            className="h-auto w-full rounded-xl dark:brightness-90"
          />
        ) : null}
        <div>
          <h3 className="mb-2 text-title font-semibold">Honors</h3>
          <ul className="space-y-2">
            {about.honors.map((honor) => (
              <li key={honor.title} className="flex gap-2 text-sm leading-snug">
                <Award className="mt-px h-4 w-4 shrink-0 text-fg-subtle" aria-hidden />
                <span className="min-w-0 flex-1">
                  {honor.href ? (
                    <a href={honor.href} {...newTabProps} className={TEXT_LINK}>
                      {honor.title}
                    </a>
                  ) : (
                    honor.title
                  )}
                </span>
                <span className={`${metaText} whitespace-nowrap`}>{honor.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

/** Officer roles and what they involved. */
export function Leadership() {
  return (
    <ul className="space-y-6">
      {about.leadership.map((item) => (
        <li key={item.org}>
          <Entry
            compact
            media={<LogoMark logo={item.logo} />}
            title={item.org}
            date={item.period}
            org={item.role}
          >
            {item.points.map((point) => (
              <p key={point} className={BODY}>
                {point}
              </p>
            ))}
          </Entry>
        </li>
      ))}
    </ul>
  );
}

/** Personal closing: the photo in the same column as the research images, the quote beside it. */
export function Closing() {
  const data = about.personal;
  if (!data) return null;

  return (
    <section className="mt-14 grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-4 sm:mt-16 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-7">
      <Image
        src={data.photo.src}
        alt={data.photo.alt}
        width={data.photo.width}
        height={data.photo.height}
        sizes="(max-width: 640px) 120px, 192px"
        className="h-auto w-full rounded-xl dark:brightness-90"
      />
      <figure className="m-0">
        <blockquote>
          <p className="text-lg font-medium leading-snug tracking-tight text-balance sm:text-[1.875rem] sm:leading-tight">
            &ldquo;{data.quote}&rdquo;
          </p>
        </blockquote>
        {data.photo.caption ? (
          <figcaption className="mt-2 text-sm text-fg-subtle">{data.photo.caption}</figcaption>
        ) : null}
      </figure>
    </section>
  );
}
