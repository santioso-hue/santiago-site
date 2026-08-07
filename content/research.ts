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
    period: "May 2026 – Present",
    logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
    image: {
      src: "/images/research/tdcs-pipeline.jpg",
      alt: "Modeling pipeline: T1 and T2 structural scans plus DTI and MD-dMRI diffusion scans feed a charm head segmentation and a finite-element solver, which returns the cortical electric field for each conductivity model.",
      width: 1200,
      height: 961,
    },
    detailPage: true,
    description:
      "Conventional tDCS models assign a single fixed conductivity to each tissue, disregarding the microstructural changes Parkinson's disease produces. I derive conductivity from diffusion MRI and build subject-specific finite-element models in SimNIBS across 12 patients and 17 controls.",
    body: [
      "Building on the diffusion-MRI dataset of Olsson et al. (2025), the pipeline compares three conductivity models: isotropic literature values, single-shell DTI, and the multidimensional-diffusion mean tensor. It then reports the induced electric field across cortical, white-matter, and deep-brain regions, and tests whether the field differs between patients and controls.",
    ],
    tags: ["Parkinson's disease", "tDCS", "MD-dMRI", "SimNIBS", "Finite element modeling"],
  },
  {
    id: "hc-tdcs",
    title: "High-Capacity tDCS (HC-tDCS)",
    affiliation: "CCNY Neural Engineering Group (Prof. Marom Bikson)",
    period: "Jan 2025 – Present",
    logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
    image: {
      src: "/images/research/hc-tdcs-layers.jpg",
      alt: "Exploded view of the high-capacity electrode showing its stacked layers, including the redox layer and hydrogel interface.",
      width: 635,
      height: 283,
    },
    description:
      "High-capacity electrodes that deliver transcranial direct-current stimulation at 6 mA, triple the conventional dose, without skin irritation. I characterized the electrode-skin interface by impedance spectroscopy and validated safety and tolerability in an IRB-approved human-subject study.",
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
    logo: {
      src: "/logos/uc-berkeley-seal.png",
      alt: "University of California, Berkeley",
      keepColor: true,
    },
    image: {
      src: "/images/research/darkfield-reconstruction.jpg",
      alt: "Three darkfield microscopy panels: a nearly black short-exposure input, the model's reconstruction recovering cell structure, and the ground-truth image.",
      width: 592,
      height: 200,
    },
    detailPage: true,
    description:
      "A controlled comparison of a U-Net against a CNN-transformer hybrid for denoising short-exposure, low-SNR darkfield microscopy. The U-Net preserved finer structure and recovered detail from photon-starved frames.",
    body: [
      "Both models were trained and evaluated on simulated and phase-target datasets, scored on PSNR, SSIM, and error maps. The goal is label-free live-cell imaging at exposures short enough to avoid photodamage.",
    ],
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
    image: {
      src: "/images/research/photon-ct-phantom.jpg",
      alt: "The Gammex multi-energy phantom beside a photon-counting CT scan of it, with circular regions of interest marked on the iodine inserts.",
      width: 640,
      height: 262,
    },
    description:
      "Optimization of iodine contrast-to-noise on a Siemens NAEOTOM Alpha photon-counting CT by tuning tube voltage and reconstruction. 90 kVp with 40 keV virtual monoenergetic reconstruction was optimal at clinically relevant dose.",
    tags: ["Photon-counting CT", "Image quality", "CNR optimization", "Medical imaging"],
    links: [
      {
        label: "Poster",
        href: "/posters/photon-counting-ct-cnr.jpg",
      },
    ],
  },
];
