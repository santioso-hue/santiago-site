import type { Publication } from "./types";

/**
 * Publications, shown as a citation list on the home page (newest first).
 * Mark your own name with `isMe: true` so it renders in bold. Provide a `doi`
 * (without the https://doi.org/ prefix) to render a Paper pill.
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
    venue: "Frontiers in Human Neuroscience, 20, 1972676",
    year: 2026,
    type: "journal",
    doi: "10.3389/fnhum.2026.1972676",
    bibtex: `@article{osorio2026anisotropic,
  title   = {Anisotropic conductivity modeling for tDCS in Parkinson's disease
             using multidimensional diffusion MRI},
  author  = {Osorio Jurado, Santiago and Skorpil, Mikael and Svenningsson, Per
             and Moreno, Rodrigo and Olsson, Christoffer},
  journal = {Frontiers in Human Neuroscience},
  volume  = {20},
  pages   = {1972676},
  year    = {2026},
  doi     = {10.3389/fnhum.2026.1972676}
}`,
  },
  {
    id: "hc-tdcs-2025",
    authors: [
      { name: "K. Donnery" },
      { name: "M. FallahRad" },
      { name: "S. Osorio", isMe: true },
      { name: "M. Belali Koochesfahani" },
      { name: "N. Khadka" },
      { name: "M. Saw" },
      { name: "J. Mo" },
      { name: "B. Babaev" },
      { name: "R. Bhuiyan" },
      { name: "J. M. Elwassif" },
      { name: "M. Bikson" },
    ],
    title: "High-Capacity transcranial Direct Current Stimulation (HC-tDCS)",
    venue: "Brain Stimulation, Article 103233",
    year: 2026,
    type: "journal",
    doi: "10.1016/j.brs.2026.103233",
  },
];

/** Manuscripts in preparation, listed apart from published work. */
export const inPreparation: Publication[] = [
  {
    id: "tp-review",
    authors: [
      { name: "S. Osorio Jurado", isMe: true },
      { name: "B. Wang" },
      { name: "M. Bikson" },
    ],
    title: "Transverse polarization in neuromodulation",
    summary:
      "A review of transverse polarization: the change in electrical charge across a neuron's diameter rather than along its length, which cable models neglect.",
    year: 2026,
    type: "in-preparation",
  },
  {
    id: "msa-cerebellar-trial",
    authors: [
      { name: "Y. E. Huh†" },
      { name: "S. Oh†" },
      { name: "J. Ahn" },
      { name: "S.-H. You" },
      { name: "S. Osorio Jurado", isMe: true },
      { name: "M. Belali Koochesfahani" },
      { name: "M. Bikson" },
      { name: "H. Park" },
      { name: "J. Youn" },
      { name: "J. W. Cho" },
    ],
    title:
      "Home-based cerebellar transcranial direct current stimulation for cerebellar variant of multiple system atrophy: A randomized controlled trial",
    summary:
      "I build each participant's head model to test whether the electric field in the cerebellum relates to improvement.",
    venue: "†Equal contribution",
    year: 2026,
    type: "in-preparation",
  },
];
