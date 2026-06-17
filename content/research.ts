import type { ResearchEntry } from "./types";

/**
 * Research entries, shown as cards on /research (newest first).
 * Add, remove, or reorder freely. Each needs a unique `id`.
 */
export const research: ResearchEntry[] = [
  {
    id: "pd-neurostim",
    title: "Using diffusion MRI to personalize tDCS in Parkinson's",
    affiliation: "KTH Royal Institute of Technology · Stockholm",
    period: "May 2026 – present",
    logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
    description:
      "A pipeline for patient-specific tDCS head models in Parkinson's disease, where standard models assign one fixed conductivity per tissue and ignore disease-related changes in brain microstructure. Building on the diffusion-MRI dataset of Olsson et al. (2025), covering 12 patients and 17 controls, I map mean diffusivity to electrical conductivity, build subject-specific finite-element models in SimNIBS, and compare the induced electric fields between patients and controls.",
    tags: ["Parkinson's disease", "tDCS", "MD-dMRI", "SimNIBS", "Finite element modeling"],
  },
  {
    id: "hc-tdcs",
    title: "High-Capacity tDCS (HC-tDCS)",
    affiliation: "CCNY Neural Engineering Group (Prof. Marom Bikson)",
    period: "Jan 2025 – present",
    logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
    description:
      "Design and validation of high-capacity electrodes that deliver transcranial direct-current stimulation at currents up to 6 mA without skin irritation. The work pairs electrochemical impedance spectroscopy (EIS) characterization of the electrode-skin interface with an IRB-approved human-subject study establishing safety and tolerability at high dose.",
    tags: ["Electrode design", "EIS", "tDCS", "IRB / human subjects", "Electrochemistry"],
    links: [
      {
        label: "Preprint (bioRxiv)",
        href: "https://www.biorxiv.org/content/10.1101/2025.06.11.659142v1",
      },
    ],
  },
  {
    id: "darkfield-ml",
    title: "Machine Learning for Darkfield Microscopy",
    affiliation: "UC Berkeley · Computational Imaging Lab (Prof. Laura Waller)",
    period: "Jun – Dec 2025",
    logo: { src: "/logos/uc-berkeley-seal.png", alt: "University of California, Berkeley" },
    description:
      "A head-to-head benchmark of a U-Net-based model and a CNN-transformer hybrid for enhancing short-exposure, low-SNR darkfield microscopy. Trained and evaluated on simulated and phase-target datasets, the U-Net gave better denoising and preserved finer structure, recovering detail from photon-starved frames for label-free live-cell imaging.",
    tags: ["Deep learning", "U-Net", "Vision transformers", "Computational imaging", "PyTorch"],
    video: { youtubeId: "NfUxkJLmI1U", title: "SUPERB 2025 Presentation" },
    links: [
      {
        label: "Poster",
        href: "/posters/darkfield-microscopy-superb-2025.jpg",
      },
    ],
  },
  {
    id: "photon-counting-ct",
    title: "Photon-Counting CT Optimization",
    affiliation: "KTH Royal Institute of Technology · Stockholm",
    period: "May – Sep 2024",
    logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
    description:
      "Optimization of contrast-to-noise ratio on a Siemens NAEOTOM Alpha photon-counting CT scanner, tuning tube voltage and reconstruction parameters across iodine phantoms to improve image quality at clinically relevant radiation doses.",
    tags: ["Photon-counting CT", "Image quality", "CNR optimization", "Medical imaging"],
    links: [
      {
        label: "Poster",
        href: "/posters/photon-counting-ct-cnr.jpg",
      },
    ],
  },
];
