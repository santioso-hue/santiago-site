const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Render a plain string, turning inline `[label](href)` markdown links into <a> elements.
 * Keeps typed content as strings while supporting the occasional inline link in a description.
 */
export function richText(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;

  for (const m of text.matchAll(LINK)) {
    const idx = m.index ?? 0;
    if (idx > last) nodes.push(text.slice(last, idx));
    const [, label, href] = m;
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
    last = idx + m[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length <= 1 ? nodes[0] : nodes;
}
