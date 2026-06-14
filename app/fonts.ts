import { Newsreader, Inter } from "next/font/google";

// Editorial serif for headings. Variable font with an optical-size axis, so large
// headings automatically get tighter, more refined letterforms. Italic is loaded for
// emphasis in prose. next/font self-hosts these: no external request, no layout shift.
export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

// Clean, highly legible body sans (requested in the spec). Variable font.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
