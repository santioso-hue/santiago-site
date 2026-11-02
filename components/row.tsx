import { metaText } from "./ui";

/** The date on an entry's title line. */
function EntryDate({ date }: { date: string }) {
  return <span className={`${metaText} whitespace-nowrap`}>{date}</span>;
}

/**
 * One entry: an image or logo in the left column, then the title with its date, the
 * organization, and the content. `compact` narrows the left column
 * to a logo and keeps it beside the text on phones.
 */
export function Entry({
  media,
  compact = false,
  wideMedia = false,
  title,
  date,
  org,
  aside,
  children,
}: {
  media?: React.ReactNode;
  compact?: boolean;
  /** A wider left column, for a video that needs to be watchable. */
  wideMedia?: boolean;
  title: React.ReactNode;
  date?: string;
  org?: React.ReactNode;
  /** A pill at the right end of the organization line. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const columns = compact
    ? "grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4"
    : wideMedia
      ? "gap-y-3 md:grid-cols-[22rem_minmax(0,1fr)] md:gap-x-7"
      : "gap-y-3 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-7";

  return (
    <div className={`grid ${media ? columns : ""}`}>
      {media ? <div className={compact || wideMedia ? "" : "max-w-40 sm:max-w-none"}>{media}</div> : null}
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 sm:flex-nowrap">
          <h3 className="min-w-0 text-title font-semibold text-balance">{title}</h3>
          {date ? <EntryDate date={date} /> : null}
        </div>
        {org ? (
          <div className="mt-0.5 flex flex-wrap items-center justify-between gap-x-4">
            <p className="text-[15px] font-medium text-fg-muted">{org}</p>
            {aside ? <div className="-my-2.5">{aside}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}

/**
 * An institution's logo on the page background, with no tile. Line-art marks turn light in
 * dark mode so they stay legible.
 */
export function LogoMark({
  logo,
  large = false,
}: {
  logo: { src: string; alt: string; lightInDark?: boolean };
  large?: boolean;
}) {
  return (
    <div className={`flex items-center ${large ? "h-28 w-full" : "h-14 w-14 justify-center"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className={`object-contain ${large ? "max-h-28 max-w-28" : "max-h-full max-w-full"} ${
          logo.lightInDark ? "dark:[filter:brightness(0)_invert(0.9)]" : ""
        }`}
      />
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
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-14 sm:mt-16"
    >
      <h2 id={`${id}-heading`} className="mb-6 text-section font-bold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
