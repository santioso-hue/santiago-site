import type { Publication } from "./types";

/**
 * Publications, shown as a citation list on /publications (newest first).
 * Mark your own name with `isMe: true` so it renders in bold. Provide a `doi`
 * (without the https://doi.org/ prefix) to render a "doi.org/..." link.
 */
export const publications: Publication[] = [
  {
    id: "hc-tdcs-2025",
    authors: [
      { name: "K. Donnery" },
      { name: "M. FallahRad" },
      { name: "N. Khadka" },
      { name: "M. Saw" },
      { name: "B. Babaev" },
      { name: "S. Osorio", isMe: true },
      { name: "M. Belali Koochesfahani" },
      { name: "R. Bhuiyan" },
      { name: "J. M. Elwassif" },
      { name: "M. Bikson" },
    ],
    title: "High-Capacity transcranial Direct Current Stimulation (HC-tDCS)",
    venue: "bioRxiv",
    year: 2025,
    type: "preprint",
    doi: "10.1101/2025.06.11.659142",
  },
];
