import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

// Editorial serif for headings. Variable font with an optical-size axis, so large
// headings automatically get tighter, more refined letterforms. Italic is loaded for
// emphasis in prose. next/font self-hosts these: no external request, no layout shift.
export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

// Body sans with warmth and character (Hanken Grotesk) — a distinctive, human grotesque
// rather than a template default. Variable font; next/font self-hosts it.
export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

// Monospace "meta" voice — dates, tags, and source/year tags. A third typographic
// register (mono) alongside the serif display and grotesk body reads as lab precision.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});
