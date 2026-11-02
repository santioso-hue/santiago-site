import Image from "next/image";
import { about } from "@/content/about";
import { OrgLine, Row } from "./row";
import { newTabProps } from "./ui";

const BODY = "mt-2 text-[15px] leading-relaxed text-fg-muted";
const TEXT_LINK = "text-accent underline-offset-4 hover:underline";

/** Dated roles, with the organization mark and the advisor as a text link. */
export function Experience() {
  return (
    <ul className="space-y-10">
      {about.experience.map((item) => (
        <li key={`${item.org}-${item.period}`}>
          <Row date={item.period}>
            <h3 className="text-title font-medium">{item.role}</h3>
            <OrgLine logo={item.logo}>
              {item.org}
              {item.professors?.map((p) => (
                <span key={p.href}>
                  {", with "}
                  <a href={p.href} {...newTabProps} className={TEXT_LINK}>
                    {p.name}
                  </a>
                </span>
              ))}
            </OrgLine>
            {item.detail ? <p className={BODY}>{item.detail}</p> : null}
          </Row>
        </li>
      ))}
    </ul>
  );
}

/** The degree beside the graduation photo, then honors dated in the same left column. */
export function Education() {
  const edu = about.education;

  return (
    <>
      <Row
        date={edu.period}
        aside={
          about.photo ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface">
              <Image
                src={about.photo.src}
                alt={about.photo.alt}
                fill
                sizes="160px"
                className="object-cover dark:brightness-90"
              />
            </div>
          ) : undefined
        }
      >
        <h3 className="text-title font-medium">{edu.role}</h3>
        <OrgLine logo={edu.logo}>{edu.org}</OrgLine>
        {edu.detail ? <p className={BODY}>{edu.detail}</p> : null}
      </Row>

      <h3 className="mb-6 mt-14 text-title font-medium text-fg-muted">
        Honors and awards
      </h3>
      <ul className="space-y-4">
        {about.honors.map((honor) => (
          <li key={honor.title}>
            <Row date={honor.year}>
              <p className="text-[15px] leading-snug">
                {honor.href ? (
                  <a href={honor.href} {...newTabProps} className={TEXT_LINK}>
                    {honor.title}
                  </a>
                ) : (
                  honor.title
                )}
                {honor.source ? (
                  <span className="text-fg-muted">, {honor.source}</span>
                ) : null}
              </p>
            </Row>
          </li>
        ))}
      </ul>
    </>
  );
}

/** Officer roles and what they involved. */
export function Leadership() {
  return (
    <ul className="space-y-10">
      {about.leadership.map((item) => (
        <li key={item.org}>
          <Row date={item.period}>
            <h3 className="text-title font-medium">{item.role}</h3>
            <OrgLine logo={item.logo}>{item.org}</OrgLine>
            {item.points.map((point) => (
              <p key={point} className={BODY}>
                {point}
              </p>
            ))}
          </Row>
        </li>
      ))}
    </ul>
  );
}

/** Personal closing: one line beside a photo. */
export function Closing() {
  const data = about.personal;
  if (!data) return null;

  return (
    <section className="mt-24 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
      <blockquote className="max-w-prose flex-1">
        <p className="text-section text-fg">&ldquo;{data.quote}&rdquo;</p>
      </blockquote>
      <figure className="m-0 w-full shrink-0 sm:w-56">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface">
          <Image
            src={data.photo.src}
            alt={data.photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, 224px"
            className="object-cover dark:brightness-90"
          />
        </div>
        {data.photo.caption ? (
          <figcaption className="mt-2 text-xs leading-relaxed text-fg-subtle">
            {data.photo.caption}
          </figcaption>
        ) : null}
      </figure>
    </section>
  );
}
