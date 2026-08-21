import type { Publication } from "./types";

/**
 * Publications, shown as a citation list on /publications (newest first).
 * Mark your own name with `isMe: true` so it renders in bold. Provide a `doi`
 * (without the https://doi.org/ prefix) to render a "doi.org/..." link.
 */
export const publications: Publication[] = [
  {
    id: "md-dmri-tdcs-pd",
    authors: [
      { name: "S. Osorio Jurado", isMe: true },
      { name: "M. Skorpil" },
      { name: "P. Svenningsson" },
      { name: "R. Moreno" },
      { name: "C. Olsson" },
    ],
    title:
      "Anisotropic conductivity modeling for tDCS in Parkinson's disease using multidimensional diffusion MRI",
    venue: "bioRxiv · Target: Frontiers in Human Neuroscience",
    year: 2026,
    type: "preprint",
    doi: "10.64898/2026.08.02.742293",
  },
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

/**
 * Conference talks and posters, shown below the publications list (newest first).
 * `url` links the poster itself where one is available in /public/posters.
 */
export const talks: Publication[] = [
  {
    id: "nyc-neuromodulation-2026",
    authors: [
      { name: "S. Osorio Jurado", isMe: true },
      { name: "R. Moreno" },
      { name: "C. Olsson" },
    ],
    title:
      "Anisotropic conductivity modeling for tDCS in Parkinson's disease using multidimensional diffusion MRI",
    venue: "NYC Neuromodulation Conference, New York, NY",
    year: 2026,
    type: "poster",
    url: "/posters/mre-tdcs-pd-neuromodulation-2026.jpg",
  },
  {
    id: "uuc-kth-2026",
    authors: [
      { name: "S. Osorio Jurado", isMe: true },
      { name: "R. Moreno" },
      { name: "C. Olsson" },
    ],
    title:
      "Anisotropic conductivity modeling for tDCS in Parkinson's disease using multidimensional diffusion MRI",
    venue:
      "Urban University Conference Series (UUC2026), KTH Royal Institute of Technology, Stockholm",
    year: 2026,
    type: "poster",
  },
  {
    id: "abrcms-2025",
    authors: [
      { name: "S. Osorio", isMe: true },
      { name: "K. Donnery" },
      { name: "M. FallahRad" },
      { name: "et al." },
    ],
    title: "High-Capacity transcranial Direct Current Stimulation (HC-tDCS)",
    venue: "ABRCMS, San Antonio, TX",
    year: 2025,
    type: "poster",
    url: "/posters/hc-tdcs-abrcms-2025.jpg",
  },
  {
    id: "superb-2025",
    authors: [{ name: "S. Osorio", isMe: true }],
    title:
      "Deep-learning denoising for extreme short-exposure darkfield microscopy",
    venue: "SUPERB Summer Research Symposium, UC Berkeley",
    year: 2025,
    type: "talk",
    url: "/posters/darkfield-microscopy-superb-2025.jpg",
  },
  {
    id: "ires-2024",
    authors: [{ name: "S. Osorio", isMe: true }],
    title:
      "Optimal tube-voltage selection in photon-counting CT for iodine contrast imaging",
    venue: "IRES Research Symposium, KTH and CCNY",
    year: 2024,
    type: "poster",
    url: "/posters/photon-counting-ct-cnr.jpg",
  },
];
