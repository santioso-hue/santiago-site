const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*/g;

/**
 * Render a plain string, turning inline `[label](href)` markdown links into <a> elements
 * and `*emphasis*` into a serif-italic span. Keeps typed content as plain strings while
 * supporting the occasional inline link or an editorial italic accent.
 */
export function richText(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;

  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) nodes.push(text.slice(last, idx));
    const [, label, href, em] = m;
    if (href) {
      const external = href.startsWith("http");
      nodes.push(
        <a
          key={idx}
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover"
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <em key={idx} className="font-serif italic">
          {em}
        </em>,
      );
    }
    last = idx + m[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length <= 1 ? nodes[0] : nodes;
}
