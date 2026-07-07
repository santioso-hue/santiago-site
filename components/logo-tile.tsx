/**
 * Institution logo that blends into the card surface (no opaque tile). Monochrome /
 * line-art marks are flipped light in dark mode so they stay legible; pass `keepColor`
 * for filled, multi-color seals that already read on any background.
 */
export function LogoTile({
  src,
  alt,
  keepColor = false,
  className,
}: {
  src: string;
  alt: string;
  /** Keep original colors in dark mode instead of inverting to light. */
  keepColor?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`max-h-full max-w-full object-contain${
          keepColor ? "" : " dark:[filter:invert(1)_hue-rotate(180deg)]"
        }`}
      />
    </span>
  );
}
