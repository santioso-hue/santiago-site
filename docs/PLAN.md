# Personal Site — Implementation Plan

**Goal:** A clean, minimal, fast, research-forward personal website for Santiago
Osorio Jurado (biomedical engineer), in the spirit of aidanandrews.info.

**Architecture:** Next.js (App Router) + TypeScript, statically generated. Multi-page
(`/`, `/research`, `/publications`, `/about`) with a persistent floating pill nav and a
three-state (light / dark / system) theme. All copy lives in a typed `content/` folder so
text can be edited without touching components. Tailwind CSS v4 (CSS-first `@theme`) with
design tokens as CSS variables. Newsreader (serif headings) + Inter (body) via `next/font`.

**Tech stack:** Next.js 15, React 19, TypeScript, Tailwind v4, next-themes, lucide-react.

---

## Why these choices (vs. the reference)

The reference (aidanandrews.info) is a Vite/React **client-only SPA** whose pages render
near-empty HTML and fetch content at runtime. We keep its *format and feel* but render at
**build time** with Next.js so publications ship as real, crawlable HTML — the right call
for an academic site. We also swap his system-font stack for the spec's Newsreader+Inter
pairing (self-hosted via `next/font`, no layout shift) and use a single slate-blue accent
with no decorative gradient.

## File structure

```
santiago-site/
├── app/
│   ├── layout.tsx            Root: fonts, ThemeProvider, Nav, skip link, footer, metadata
│   ├── globals.css           Tailwind import, @theme tokens, light/dark vars, prose, motion
│   ├── fonts.ts              next/font config (Newsreader + Inter -> CSS vars)
│   ├── page.tsx              Home / hero
│   ├── research/page.tsx     Research cards
│   ├── publications/page.tsx Publications list
│   └── about/page.tsx        Bio, education, interests, trajectory
├── components/
│   ├── theme-provider.tsx    next-themes wrapper (client)
│   ├── theme-toggle.tsx      3-state light/dark/system cycle (client)
│   ├── nav.tsx               Floating rounded-pill nav bar
│   ├── nav-link.tsx          Active-aware pill link (client, usePathname)
│   ├── hero.tsx              Home hero (name, statement, links, portrait)
│   ├── social-links.tsx      Icon row (GitHub, Scholar, ORCID, LinkedIn, email)
│   ├── research-card.tsx     One research entry
│   ├── publication-item.tsx  One citation row
│   ├── section-heading.tsx   Page H1 + optional lede
│   ├── tag.tsx               Tech-tag chip
│   └── skip-link.tsx         Skip-to-content a11y link
├── content/
│   ├── types.ts              Shared content types
│   ├── site.ts               Name, title, statement, email, social + nav config
│   ├── research.ts           Research entries
│   ├── publications.ts       Publication entries
│   └── about.ts              Bio paragraphs, education, interests, timeline
├── public/
│   ├── cv.pdf                Placeholder (replace with real CV)
│   └── images/               portrait + research thumbnails (placeholders)
├── package.json, tsconfig.json, next.config.ts, postcss.config.mjs
├── vercel.json, .gitignore, README.md
```

## Build order (each step ends with a working tree)

1. Config + toolchain: package.json, tsconfig, next.config, postcss, .gitignore, vercel.json.
2. Design system: globals.css tokens + fonts.ts.
3. Content layer: types.ts + the four content config files (real placeholder copy).
4. Primitives: tag, section-heading, social-links, skip-link.
5. Theme: theme-provider + theme-toggle.
6. Chrome: nav-link + nav, wired into layout with fonts + metadata.
7. Pages: hero + home, research, publications, about.
8. Assets: placeholder cv.pdf + image placeholders + README.

## Verification (the real "tests" for a static presentational site)

- `npm run lint` — no errors.
- `npx tsc --noEmit` — typechecks.
- `npm run build` — static generation succeeds for all four routes.
- Review pass across a11y (skip link, focus rings, alt text, keyboard nav, contrast),
  responsive (mobile pill-nav scroll, hero stacking), dark mode (no flash, all tokens
  swap), and design fidelity to the approved tokens; findings fixed before handoff.
