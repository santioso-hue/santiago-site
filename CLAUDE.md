# santiago-site — notes for Claude

Personal research website. Next.js 16 (App Router) + React 19 + TS + Tailwind v4, statically generated, light/dark/system theme. Deploy: Vercel.

## The rule
- All copy/data lives in typed `content/*.ts` (site, about, research, publications). **Edit the data, not the components.** Types in `content/types.ts`.

## Verify before claiming done
- `npx tsc --noEmit` (types) · `npm run lint` (eslint) · `npm run build` (static gen) · `npm run dev` (→ :3000).

## Gotchas
- **Swapping a `public/images/*` file with the same name shows the stale image** — `next/image` caches optimized output. Fix: `rm -rf .next/cache/images` + hard-refresh (Cmd+Shift+R); the browser also caches the `/_next/image?...` URL.
- Optimize images with macOS `sips` (e.g. `sips -Z 1280 -s format jpeg -s formatOptions 82 in.jpeg --out out.jpg`).
- A flex item with `aspect-[16/10]` is stretched by the row's default `align-items: stretch` when a sibling is tall — add `self-start`.
- Plain `<img>` (external YouTube thumbnails, institution logos) needs `{/* eslint-disable-next-line @next/next/no-img-element */}`.
- YouTube embeds need no CSP change (`vercel.json` only sets `X-Frame-Options`). Use the `youtube-nocookie` click-to-play facade in `components/lite-youtube.tsx`.
- Institution logos (`public/logos/`) render on white tiles so navy/blue marks stay legible in dark mode.

## Design tokens
- `app/globals.css` `@theme inline` maps CSS vars → utilities (`--bg`→`bg-bg`, …). Warm-paper bg, single slate-blue accent. Newsreader serif (`font-serif`, and h1–h5) + Inter sans.
