/**
 * GitHub contribution chart via the ghchart.rshah.org image service (zero JS,
 * crawlable). The whole block links to the profile. White panel keeps the chart
 * legible in both light and dark themes.
 */
export function GithubChart({ username }: { username: string }) {
  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${username} on GitHub`}
      className="block rounded-lg border border-border bg-white p-4 transition-colors hover:border-border-strong"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://ghchart.rshah.org/3a5a78/${username}`}
        alt={`GitHub contribution chart for ${username}`}
        className="w-full"
        loading="lazy"
      />
    </a>
  );
}
