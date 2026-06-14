# Santiago Osorio Jurado — personal site

A clean, minimal, fast, research-forward personal website. Multi-page, statically
generated, with light / dark / system theming and an editorial serif + sans typographic
pairing. Built to be edited without touching component code: **all copy lives in the
`content/` folder.**

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first design tokens)
- **Fonts:** Newsreader (serif headings) + Inter (body), self-hosted via `next/font`
- **Theme:** light / dark / system via `next-themes` (defaults to system)
- **Deploy:** Vercel (zero config)

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Edits hot-reload.

Other scripts:

```bash
npm run build      # production build (static generation)
npm run start      # serve the production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

Requires Node 18.18+ (developed on Node 26).

---

## Edit the content

All text and data live in [`content/`](content/). You never need to open a component to
change copy. Types are defined in [`content/types.ts`](content/types.ts), so your editor
will flag a missing or mistyped field.

| File | What it controls |
|---|---|
| `content/site.ts` | Your name, title, affiliation, email, research statement, social links, nav, CV path |
| `content/research.ts` | The cards on **/research** (title, description, tags, links, thumbnail) |
| `content/publications.ts` | The list on **/publications** (authors, venue, year, DOI/URL) |
| `content/about.ts` | The **/about** page (bio paragraphs, education, experience, interests, honors) |

Notes:

- In `publications.ts`, mark your own name with `isMe: true` so it renders **bold** in
  each citation.
- Provide a publication `doi` (without the `https://doi.org/` prefix) and/or a `url`. The
  DOI link is preferred when both are present.
- Research/publication links that start with `http` open in a new tab automatically.

### Update social links

Edit the `socials` array in `content/site.ts`. Each entry has a `label`, an `href`, and an
`icon` (one of `github`, `scholar`, `orcid`, `linkedin`, `twitter`, `email`). The email
icon expects a `mailto:` href. To add a new icon type, add an SVG to
[`components/icons.tsx`](components/icons.tsx) and a key in `SocialIcon`
(`content/types.ts`).

---

## Add / replace images

Images live in [`public/images/`](public/images/) and are referenced by path in the
content files (e.g. `src: "/images/hctdcs.jpg"`).

1. Drop your image into `public/images/` (keep the same filename, or update the `src` in
   the matching content file).
2. Recommended: portrait ~600×600 (square), research thumbnails ~1200×750 (16:10).

The repo ships with neutral placeholder JPGs so nothing looks broken before you add real
images. To regenerate the placeholders:

```bash
node scripts/make-placeholders.mjs
# then convert the PNGs to JPG (macOS): sips -s format jpeg public/images/<name>.png --out public/images/<name>.jpg
```

### Replace the CV

Replace [`public/cv.pdf`](public/cv.pdf) with your real CV (keep the filename, or change
`cvHref` in `content/site.ts`). A valid placeholder PDF is included.

### Favicon

The favicon is [`app/icon.svg`](app/icon.svg) — edit the SVG or replace it with
`app/icon.png` / `app/favicon.ico`.

---

## Customize the look

Design tokens are CSS variables in [`app/globals.css`](app/globals.css), defined once for
light (`:root`) and once for dark (`.dark`). Change a value in both places to re-skin the
site.

```css
:root {
  --bg: #fbf9f5;        /* warm off-white background */
  --fg: #1a1916;        /* near-black text */
  --accent: #3a5a78;    /* the single accent color */
  /* ... */
}
.dark {
  --bg: #1a1916;
  --accent: #88abcb;    /* lighter accent for contrast on dark */
  /* ... */
}
```

- **Accent color:** change `--accent` / `--accent-hover` (and their dark variants).
- **Fonts:** swap the imports in [`app/fonts.ts`](app/fonts.ts) (any `next/font/google`
  family). The CSS variable names (`--font-inter`, `--font-newsreader`) are wired up in
  `app/globals.css` and `app/layout.tsx`.
- **Reading width / spacing:** the per-page max widths live on each page
  (`app/*/page.tsx`); the outer wrapper is in `app/layout.tsx`.

---

## Project structure

```
app/
  layout.tsx           Root layout: fonts, theme provider, nav, footer, SEO metadata
  globals.css          Tailwind import + design tokens + base styles + motion
  fonts.ts             next/font configuration
  page.tsx             Home (hero)
  research/page.tsx    Research cards
  publications/page.tsx Publications list
  about/page.tsx       Bio, education, experience, interests, honors
  icon.svg             Favicon
components/            Presentational + client components (nav, theme toggle, cards, ...)
content/               All editable copy and data (+ types)
public/                images/, cv.pdf
scripts/               One-off placeholder generators (not part of the build)
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repo. Vercel auto-detects Next.js —
   no settings needed. Click **Deploy**.
3. Set your canonical URL so Open Graph / social-share links are absolute. Either set
   `url` in `content/site.ts`, or (no code edit) add a `NEXT_PUBLIC_SITE_URL`
   environment variable in the Vercel project settings — it overrides `site.url`.

`vercel.json` is included with sensible security headers. The only (optional) environment
variable is `NEXT_PUBLIC_SITE_URL`; the site is otherwise fully static.

To deploy from the CLI instead:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

---

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main#main-content`, `footer`) and a
  skip-to-content link.
- One consistent `:focus-visible` ring; keyboard-navigable nav and theme toggle.
- `next/font` self-hosts fonts (no layout shift, no third-party request).
- `next/image` lazy-loads thumbnails; the hero portrait is `priority`.
- Motion (the hero entrance) is disabled under `prefers-reduced-motion`.
- Static generation means each page ships as real, crawlable HTML.
```
