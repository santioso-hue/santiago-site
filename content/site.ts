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
    "I'm a biomedical engineer working on neural stimulation and computational imaging.",

  portrait: {
    src: "/images/presenting.jpg",
    alt: "Santiago Osorio Jurado presenting his senior design project at City College of New York.",
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
