import type { SiteConfig } from "./types";

/**
 * Global site config: identity, contact, social links, and primary navigation.
 * This is the first file to edit when making the site your own.
 */
export const site: SiteConfig = {
  name: "Santiago Osorio Jurado",
  // TODO: set your real domain (or override with NEXT_PUBLIC_SITE_URL on Vercel).
  url: "https://your-domain.com",
  shortName: "S. Osorio Jurado",
  title: "Biomedical engineer. Neural engineering and neuromodulation.",
  email: "santiagojurado15@hotmail.com",

  statement: [
    "I am a biomedical engineer working at the intersection of neural engineering and neuromodulation. My work spans stimulation hardware, computational imaging, and patient-specific electric-field modeling.",
    "I build rigorous, reproducible tools that carry a method from the bench to validated human use: from high-capacity tDCS electrodes characterized by impedance spectroscopy to machine-learning pipelines for low-SNR imaging.",
  ],

  portrait: {
    src: "/images/headshot.jpg",
    alt: "Portrait of Santiago Osorio Jurado",
  },

  // Add Google Scholar / ORCID here later; their icons are already defined in components/icons.tsx.
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
    { label: "About", href: "/about" },
  ],

  cvHref: "/cv.pdf",
};
