/** Page title + optional lede, used at the top of /research, /publications, /about. */
export function SectionHeading({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <header className="mb-10 sm:mb-12">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
      {lede ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
