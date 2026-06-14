/** Small white logo tile — keeps colored or dark marks legible in light and dark. */
export function LogoTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-white ring-1 ring-border ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </span>
  );
}
