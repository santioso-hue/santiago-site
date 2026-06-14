# Design — About-page personal section, SUPERB talk embed, and accuracy polish

**Date:** 2026-06-14
**Project:** santiago-site (Next.js 16 / React 19 / Tailwind v4 personal website)
**Status:** Approved design, pending spec review → implementation plan

## Goal

Add a personal closing section to the About page (in the spirit of
aidanandrews.info), embed Santiago's SUPERB 2025 research talk on the darkfield
research card, surface a real scientific figure, and make a small set of
accuracy/credibility fixes — without disturbing the existing design system
(content/component split, warm-paper palette, Newsreader + Inter, light/dark
theming).

## Decisions (made with the user)

- **Closing phrase:** direction set — a short serif-italic pull-quote in his own
  voice. Exact wording under refinement (2026-06-14) toward more concrete,
  restrained language; final line pending one true detail about his mother's
  sacrifice. Draft A is the fallback.
- **BCI framing:** soften — the site currently headlines "brain-computer
  interfaces," but the actual work is transcranial stimulation, imaging, and ML.
  Reframe to neural engineering + neuromodulation, which the work fully supports.
- **Preprint:** already present in `content/publications.ts` (HC-tDCS, DOI
  `10.1101/2025.06.11.659142`). No work needed beyond verifying it renders.
- **Video placement:** on the `darkfield-ml` research card (its natural home),
  as an inline click-to-play embed.
- **Email (corrected 2026-06-14):** the canonical public contact is
  `santiagojurado15@hotmail.com` (the résumé was right). Update `site.ts` `email`
  from the current gmail to this. Gmail is his account/login email, not the contact.

## In scope

### 1. Personal closing section (`/about`)

**Type** — extend `AboutContent` in `content/types.ts`:

```ts
/** Optional personal closing note: a short phrase and one photo. */
personal?: {
  heading?: string;                 // defaults to "Family"
  phrase: string[];                 // 1-2 lines, rendered as a serif-italic pull-quote
  note?: string;                    // optional smaller supporting line
  photo: { src: string; alt: string; caption?: string };
};
```

**Content** — add to `content/about.ts`:

```ts
personal: {
  heading: "Family",
  phrase: [
    "My mother traded her own dreams for my opportunities. Everything I build, I build to make her proud.",
  ],
  note: "She left everything she knew so that I could have a chance here. This is part of keeping that promise.",
  photo: {
    src: "/images/mom.jpg",
    alt: "Santiago with his mother at an ice rink in New York, winter 2025.",
    caption: "With my mom — New York, winter 2025.",
  },
},
```

**Component** — a `Personal` block rendered last in `app/about/page.tsx`
(after the CV `Section`), guarded by `{about.personal ? <Personal .../> : null}`.
Layout: desktop two-column (phrase left, photo right) collapsing to stacked on
mobile, matching the reference. Specifics:

- Reuse the in-file `Section` eyebrow ("Family").
- Phrase: Newsreader **italic**, ~`text-2xl`, `text-fg`, `leading-snug` — the
  site's serif, not the reference's rounded sans (faithful to *this* site).
- Optional `note`: small `text-fg-muted`.
- Photo: `figure` with a `relative aspect-[4/5] overflow-hidden rounded-xl border
  border-border bg-surface` box, `next/image` `fill` + `object-cover` +
  `dark:brightness-90` (mirrors the hero portrait), `sizes` set for the column
  width; optional `figcaption` in `text-fg-subtle`.

### 2. SUPERB 2025 talk embed (`darkfield-ml` research card)

Video: *"SUPERB 2025 Presentation"*, YouTube id `NfUxkJLmI1U`, 10:44, on
Santiago's channel — his darkfield-ML talk.

**Type** — extend `ResearchEntry` in `content/types.ts`:

```ts
/** Optional inline presentation video (lazy, click-to-play). */
video?: { youtubeId: string; title: string };
```

**Content** — on the `darkfield-ml` entry in `content/research.ts`: add
`video: { youtubeId: "NfUxkJLmI1U", title: "SUPERB 2025 Presentation" }` and
**remove** the now-redundant `{ label: "Video", href: "TODO_YOUTUBE_URL" }` link.

**Component** — `components/lite-youtube.tsx`, a small client component
(`"use client"`) implementing the facade pattern: render only the YouTube
thumbnail (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`) + a play button; on click,
swap in `https://www.youtube-nocookie.com/embed/<id>?autoplay=1`. A 16:9
`aspect-video` box, `rounded-md border border-border` to match thumbnails,
`loading="lazy"`, accessible `aria-label`/`title`. Rendered inside
`components/research-card.tsx` after the description/tags, guarded by
`{entry.video ? <LiteYouTube .../> : null}`. The card's static thumbnail and the
video can coexist.

**Security headers** — extend the CSP in `vercel.json`:
- `frame-src https://www.youtube-nocookie.com`
- add `https://i.ytimg.com` to `img-src`
(Rationale: facade thumbnail loads from `i.ytimg.com`; the player iframe loads
from the no-cookie domain. No `script-src` change needed.)

### 3. Real research figure (`pd-neurostim` card)

Source: `/Users/santi/Documents/MRE_tDCS_PD/tDCS-head-model/results/efield_C3_Fp2.png`
(SimNIBS E-field head render with C3/Fp2 pads). Copy into
`public/images/efield-pd.jpg` (resize to ~800×500, JPEG ~80%). Add an `image`
field to the `pd-neurostim` entry with a descriptive alt
("Patient-specific SimNIBS head model showing tDCS-induced electric-field
magnitude on the cortical surface."). `object-cover` handles the crop to 16:10.

### 4. Portrait swap

Replace the placeholder `public/images/portrait.jpg` with the user's real
headshot (square, ≥640×640, face centered). No code change — `site.portrait`
already points at `/images/portrait.jpg`.

### 5. Soften BCI framing

- `content/site.ts` `title`: change "Neural engineering and brain-computer
  interfaces." → "Neural engineering and neuromodulation." (or similar wording
  the user confirms).
- `content/about.ts` `interests`: replace "Brain-computer interfaces" with a
  supported term (e.g. "Neuromodulation"); keep the rest.
- `content/about.ts` `bio` / `site.statement`: scan for "brain-computer
  interface(s)" and reword to neuromodulation/stimulation. Do not invent new claims.

### 6. Small cleanups

- `darkfield-ml` description: "U-Net and transformer architectures" → "U-Net and
  CNN-transformer hybrid architectures," and note U-Net gave better noise removal
  (per the résumé). One-sentence accuracy fix.
- Remove dead links that currently render broken: `darkfield-ml` `Poster`
  (`TODO_POSTER_BERKELEY`) and `Code` (`TODO_GITHUB_BERKELEY`);
  `photon-counting-ct` `Poster` (`TODO_POSTER_KTH`). Re-add only when real URLs exist.
- `content/site.ts` `email`: change the gmail to `santiagojurado15@hotmail.com`
  (the `mailto:` social uses this).

## Prerequisites (user-supplied assets/inputs)

These do not block writing the components, but the section/cards look final only
once provided:

1. **Photo files on disk (still needed):** as of 2026-06-14 `public/images/` has
   only the placeholder portrait and no `mom.jpg` (the two recent Downloads JPEGs
   were the posters, not the photos). Drop the real headshot (`portrait.jpg`) and
   the rink photo (`mom.jpg`) into `public/images/`, or give their paths.
2. **Remaining figures — now largely sourced (2026-06-14):** the UC Berkeley
   darkfield poster (`~/Downloads/1769377599945.jpeg`) and the KTH photon-CT
   poster (`~/Downloads/1769377403229.jpeg`) are on disk; crop a reconstruction/
   PSNR panel (darkfield) and the CNR-vs-kVp plot (CT) for those two cards. The CT
   figure may extract at higher resolution from
   `~/Downloads/Fully3D_submission_Spectral_CT_abstract (1).pdf`. The `hc-tdcs`
   electrode/EIS figure comes from the preprint PDF (bioRxiv download may be
   bot-blocked; else Santiago provides it). Never substitute an unrelated figure.
3. **Canonical domain** (to set `site.url`) and a **real CV PDF**
   (`public/cv.pdf`) — needed for deploy, not for this change.

## Out of scope (future passes)

- Full résumé-metric enrichment of every card (Zn/AgCl chemistry, ≤600 Ω·cm,
  1.95–3.25 V/m, 5-volunteer trial, PSNR/SSIM, Gammex phantoms, etc.).
- Adding the Biology Lab Assistant role, BMES affiliation, or a Skills section.
- Deploy to Vercel, domain setup, initial git commit of the project.

## Accessibility & performance

- New images via `next/image` (`fill` + `object-cover` + descriptive alt); the
  mom photo is below the fold (no `priority`).
- Video uses the facade pattern: ~15 KB thumbnail until click, no third-party
  cookies until playback, no layout shift (fixed `aspect-video`).
- Phrase pull-quote uses the already-loaded Newsreader italic axis (no new font).
- Section is keyboard- and screen-reader-friendly (`figure`/`figcaption`,
  `aria-label` on the play button).

## Verification

- `npm run lint` — clean.
- `npx tsc --noEmit` — the new `personal` and `video` fields typecheck.
- `npm run build` — all four routes statically generate; `/about` and `/research`
  render the new blocks.
- Manual review: two-column → stacked responsive behavior; dark mode swaps all
  tokens (photo `dark:brightness-90`); video thumbnail loads and click swaps in
  the player; no broken `TODO_` links remain; E-field figure renders crisp.

## Open inputs needed from the user before/at implementation

1. Confirm the BCI replacement wording for the headline (suggested: "Neural
   engineering and neuromodulation").
2. Drop the two photo files into `public/images/` (or give their current paths).
3. Confirm gmail as the canonical contact email.
