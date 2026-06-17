/**
 * Institution logo that blends into the card surface (no opaque tile). Monochrome /
 * line-art marks are flipped light in dark mode so they stay legible; filled colored
 * seals (which already read on any background) are left untouched.
 */
export function LogoTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  // Filled colored seals (e.g. the UC Berkeley seal) read on any background, and
  // inverting them would wreck their color — so only flip the dark line-art marks.
  const invertInDark = !src.includes("uc-berkeley");

  return (
    <span
      className={`flex shrink-0 items-center justify-center ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`max-h-full max-w-full object-contain${
          invertInDark ? " dark:[filter:invert(1)_hue-rotate(180deg)]" : ""
        }`}
      />
    </span>
  );
}
