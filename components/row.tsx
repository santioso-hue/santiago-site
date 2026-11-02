import { metaText } from "./ui";

/**
 * One dated entry: the date in a left column, the text beside it, and an optional
 * thumbnail on the right. On phones the date sits above and the thumbnail below.
 */
export function Row({
  date,
  aside,
  wideAside = false,
  children,
}: {
  date?: string;
  aside?: React.ReactNode;
  /** Larger thumbnail, for labeled diagrams that are unreadable at the small size. */
  wideAside?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-x-8 gap-y-1 md:grid-cols-[8.5rem_minmax(0,1fr)]">
      <p className={`${metaText} md:pt-0.5`}>{date}</p>
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 max-w-[40rem] flex-1">{children}</div>
        {aside ? (
          <div className={`shrink-0 ${wideAside ? "w-full sm:w-56" : "w-40 sm:w-36"}`}>
            {aside}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** A titled home-page section; `id` is the nav anchor. */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-20 sm:mt-24">
      <h2 id={`${id}-heading`} className="mb-8 text-section">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** A small institution mark beside the organization line of a row. */
export function OrgLine({
  logo,
  children,
}: {
  logo?: { src: string; alt: string; keepColor?: boolean };
  children: React.ReactNode;
}) {
  return (
    <p className="mt-1 flex items-start gap-2 text-sm leading-relaxed text-fg-muted">
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className={`mt-0.5 h-[18px] w-auto shrink-0 object-contain${
            logo.keepColor ? "" : " dark:[filter:invert(1)_hue-rotate(180deg)]"
          }`}
        />
      ) : null}
      <span className="min-w-0">{children}</span>
    </p>
  );
}
