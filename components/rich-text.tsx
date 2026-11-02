import { externalLinkProps } from "./ui";

const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

/**
 * Render a plain string, turning inline `[label](href)` markdown links into <a> elements,
 * `**key facts**` into strong text, and `*emphasis*` into italics. Keeps typed content as
 * plain strings while supporting the occasional inline link or emphasis.
 */
/** The same string with its link and emphasis markup removed, for metadata. */
export function plainText(text: string): string {
  return text.replace(TOKEN, (_, label, __, strong, em) => label ?? strong ?? em);
}

export function richText(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;

  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) nodes.push(text.slice(last, idx));
    const [, label, href, strong, em] = m;
    if (href) {
      nodes.push(
        <a
          key={idx}
          href={href}
          {...externalLinkProps(href)}
          className="underline decoration-fg-subtle underline-offset-2 hover:decoration-fg"
        >
          {label}
        </a>,
      );
    } else if (strong) {
      nodes.push(
        <strong key={idx} className="font-semibold text-fg">
          {strong}
        </strong>,
      );
    } else {
      nodes.push(
        <em key={idx}>{em}</em>,
      );
    }
    last = idx + m[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length <= 1 ? nodes[0] : nodes;
}
