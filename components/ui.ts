/** Shared presentational primitives: class strings and link attributes used by
 *  more than one component, kept here so a single design decision has one home. */

/** Muted meta text (dates / periods) shown on rows and detail pages. */
export const metaText = "text-sm tabular-nums text-fg-subtle";

/** Minimum 44 px touch target for standalone links and buttons. */
export const tapTarget = "inline-flex min-h-11 items-center";

/** Attributes to open a link in a new tab without leaking the referrer. */
export const newTabProps = {
  target: "_blank",
  rel: "noreferrer noopener",
} as const;

/** New-tab attributes for external (http) links; empty for internal / mailto links. */
export function externalLinkProps(href: string) {
  return href.startsWith("http") ? newTabProps : {};
}
