/** Small rounded chip used for the method/skill tags on project and research cards. */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded bg-surface px-2 py-0.5 text-xs text-fg-muted">
      {children}
    </span>
  );
}
