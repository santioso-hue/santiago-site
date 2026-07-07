/** Shared presentational primitives: class strings and link attributes used by
 *  more than one component, kept here so a single design decision has one home. */

/**
 * The interactive card surface — border, tinted fill, and a lift on hover. Shared
 * by the Project, Research, and Education/Experience cards; append per-card padding
 * (`p-5`, `sm:p-6`) or `overflow-hidden` at the call site.
 */
export const cardSurface =
  "rounded-lg border border-border bg-surface/40 transition-[border-color,box-shadow] duration-200 hover:border-accent/40 hover:shadow-md";

/** Muted monospace meta text (dates / periods) shown on cards and the timeline. */
export const metaMono = "font-mono text-[13px] text-fg-subtle";

/** Attributes to open a link in a new tab without leaking the referrer. */
export const newTabProps = {
  target: "_blank",
  rel: "noreferrer noopener",
} as const;

/** New-tab attributes for external (http) links; empty for internal / mailto links. */
export function externalLinkProps(href: string) {
  return href.startsWith("http") ? newTabProps : {};
}
