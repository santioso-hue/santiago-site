import { Hanken_Grotesk } from "next/font/google";

// The site's only typeface. Variable font; next/font self-hosts it, so there is no
// external request and no layout shift. Italic is loaded for journal names and emphasis.
export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
  style: ["normal", "italic"],
});
