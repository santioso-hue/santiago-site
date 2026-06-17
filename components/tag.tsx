/** Small rounded chip used for the method/skill tags on project and research cards. */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-xs font-medium tracking-tight text-fg-muted">
      {children}
    </span>
  );
}
