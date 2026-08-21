import type { SiteConfig } from "./types";

/**
 * Global site config: identity, contact, social links, and primary navigation.
 * This is the first file to edit when making the site your own.
 */
export const site: SiteConfig = {
  name: "Santiago Osorio Jurado",
  // Canonical production URL (used for Open Graph / canonical metadata).
  url: "https://santiagoosoriojurado.vercel.app",
  shortName: "S. Osorio Jurado",
  title: "Biomedical engineer. Neural engineering and neuromodulation.",
  email: "santiagojurado15@hotmail.com",

  tagline:
    "I'm a biomedical engineer working on *neural stimulation* and computational imaging.",

  portrait: {
    src: "/images/portrait-neuromodulation-2026.jpg",
    alt: "Santiago Osorio Jurado beside his poster on anisotropic conductivity modeling for tDCS in Parkinson's disease at the 2026 NYC Neuromodulation Conference.",
    width: 1600,
    height: 1333,
  },

  socials: [
    { label: "GitHub", href: "https://github.com/santioso-hue", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santiago-osorio-302552220/",
      icon: "linkedin",
    },
  ],

  nav: [
    { label: "Research", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
  ],

  cvHref: "/Santiago-Osorio-Jurado-CV.pdf",
};
