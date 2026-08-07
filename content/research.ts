import type { ResearchEntry } from "./types";

/**
 * Research entries, shown as cards on /research (newest first).
 * Add, remove, or reorder freely. Each needs a unique `id`.
 */
export const research: ResearchEntry[] = [
  {
    id: "pd-neurostim",
    title: "Using diffusion MRI to personalize tDCS in Parkinson's",
    affiliation: "KTH Royal Institute of Technology (Prof. Rodrigo Moreno)",
    period: "May 2026 – Present",
    logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
    figures: [
      {
        src: "/images/research/tdcs-modeling-pipeline.jpg",
        alt: "Modeling pipeline: T1 and T2 structural scans plus DTI and MD-dMRI diffusion scans feed a charm head segmentation and a finite-element solver, which returns the cortical electric field for each conductivity model.",
        width: 1400,
        height: 1111,
        caption:
          "Overview of the modeling pipeline. For each participant, the structural and diffusion MR images feed a single head segmentation and finite-element mesh. The three conductivity models share that mesh and the same field solver, and differ only in the conductivity assigned to brain tissue.",
      },
      {
        src: "/images/research/tdcs-orientation.jpg",
        alt: "Left: a transverse brain slice colored by the angle between the two tensors' principal diffusion directions. Right: box plots of that angle per region across the cohort.",
        width: 1299,
        height: 685,
        caption:
          "Orientation divergence between the two anisotropic models: the acute angle between the principal diffusion direction of the single-shell DTI tensor and that of the QTI mean tensor. (A) Voxel-wise angle on a representative transverse slice, with opacity tracking fractional anisotropy. (B) Angles across the cohort (n = 29), one box per region, ordered by median.",
      },
    ],
    abstract: [
      "Transcranial direct current stimulation (tDCS) dose depends on how brain conductivity is modeled. White matter anisotropy is conventionally estimated from single-shell diffusion tensor imaging (DTI). Multidimensional diffusion MRI (MD-dMRI), specifically q-space trajectory imaging (QTI), instead gives a mean tensor expected to carry less kurtosis bias. Our primary question was whether replacing the conventional single-shell tensor with this mean tensor would change the predicted field.",
      "We built, to our knowledge, the first MD-dMRI tDCS conductivity model and compared it against DTI and isotropic models in 29 participants (12 with Parkinson's disease, 17 controls) across four montages, with the same mesh, electrodes, and solver. The three models agreed within a few percent. The two anisotropic models differed mainly in tensor orientation (about 21 degrees in white matter), with small differences in field magnitude. Field did not differ between patients and controls in any region or montage (which was an exploratory, underpowered comparison). Whole-brain electric field correlated with MR elastography stiffness (partial r = +0.58) but attenuated to non-significance once cerebrospinal fluid morphology was accounted for (r = +0.06 to +0.09).",
      "With no ground-truth field or conductivity available, the study establishes the feasibility of the MD-dMRI model and characterizes field sensitivity rather than improved dosimetry accuracy. The choice of diffusion tensor is second order for dose, which is primarily influenced by individual anatomy. For Parkinson's disease, modeling efforts should focus on cerebrospinal fluid- and atrophy-aware head models and dose normalization, rather than a more complex diffusion tensor.",
    ],
    visual: {
      src: "/images/research/tdcs-field-render.png",
      alt: "Finite-element tDCS simulation rendered on a translucent head: the cortical surface is colored by electric-field magnitude, with the red anode over the left motor cortex and the blue cathode above the right eye.",
      width: 439,
      height: 620,
    },
    detailPage: true,
    description:
      "Anisotropy in tDCS is conventionally derived from single-shell DTI. I built the first head model to derive it from multidimensional diffusion MRI, then compared the predicted electric fields against DTI and isotropic models across 29 participants and four montages.",
    tags: ["Parkinson's disease", "tDCS", "MD-dMRI", "SimNIBS", "Finite element modeling"],
  },
  {
    id: "hc-tdcs",
    title: "High-Capacity tDCS (HC-tDCS)",
    affiliation: "CCNY Neural Engineering Group (Prof. Marom Bikson)",
    period: "Jan 2025 – Present",
    logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
    figures: [
      {
        src: "/images/research/hc-tdcs-layers.jpg",
        alt: "Exploded view of the high-capacity electrode showing its stacked layers, including the redox layer and hydrogel interface.",
        width: 635,
        height: 283,
        caption:
          "Exploded view of the high-capacity electrode, showing the stacked layers and the hydrogel interface.",
      },
    ],
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
    figures: [
      {
        src: "/images/research/darkfield-reconstruction.jpg",
        alt: "Three darkfield microscopy panels: a nearly black short-exposure input, the model's reconstruction recovering cell structure, and the ground-truth image.",
        width: 592,
        height: 200,
        caption:
          "Short-exposure input, the model's reconstruction, and the ground-truth image.",
      },
    ],
    detailPage: true,
    description:
      "A controlled comparison of a U-Net against a CNN-transformer hybrid for denoising short-exposure, low-SNR darkfield microscopy. The U-Net preserved finer structure and recovered more detail at low photon counts.",
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
    affiliation: "KTH Royal Institute of Technology (Prof. Mats Persson)",
    period: "May – Sep 2024",
    logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
    figures: [
      {
        src: "/images/research/photon-ct-phantom.jpg",
        alt: "The Gammex multi-energy phantom beside a photon-counting CT scan of it, with circular regions of interest marked on the iodine inserts.",
        width: 640,
        height: 262,
        caption:
          "The Gammex multi-energy phantom and a photon-counting CT scan of it, with the regions of interest used for contrast-to-noise marked.",
      },
    ],
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
