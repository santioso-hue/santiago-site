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
    period: "May – Aug 2026",
    logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
    figures: [
      {
        src: "/images/research/tdcs-fig1-pipeline.jpg",
        alt: "Two-panel figure. A: pipeline from structural and diffusion MRI through a shared head segmentation and mesh to the finite-element field solver. B: the four electrode montages rendered on a head, conventional pads and 4 x 1 high-definition rings over M1 and DLPFC, anode in red, cathodes in blue.",
        width: 1029,
        height: 1299,
        caption:
          "Overview of the modeling pipeline and the electrode montages. (A) Each participant's structural and diffusion MR images feed a single head segmentation and finite-element mesh; the three conductivity models share that mesh and solver, differing only in the conductivity assigned to brain tissue. (B) The four montages: conventional pads and 4 x 1 high-definition rings at the M1 and DLPFC targets, anode in red, cathodes in blue.",
      },
    ],
    body: [
      "The three conductivity models produce nearly identical fields: across the cortical surface they differ by a median of 1.8 percent, and the two anisotropic tensors point about 21 degrees apart in white matter without changing the predicted dose. Whole-brain field also tracked MR elastography stiffness, until cerebrospinal fluid volume was accounted for and the correlation vanished.",
      "For tDCS dosing, the tensor choice is second order; individual anatomy, cerebrospinal fluid, and atrophy govern the field, and that is where personalization effort should go. Presented at the 2026 NYC Neuromodulation Conference and the Urban University Conference at KTH.",
    ],
    visual: {
      src: "/images/research/tdcs-field-render.png",
      alt: "Finite-element tDCS simulation rendered on a translucent head: the cortical surface is colored by electric-field magnitude, with the red anode over the left motor cortex and the blue cathode above the right eye.",
      width: 439,
      height: 620,
    },
    detailPage: true,
    links: [
      {
        label: "Preprint (bioRxiv)",
        href: "https://doi.org/10.64898/2026.08.02.742293",
        note: "Osorio Jurado et al., 2026 \u00b7 under review at Frontiers in Human Neuroscience",
      },
    ],
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
    photo: {
      src: "/images/research/hc-tdcs-electrodes.jpg",
      alt: "Santiago Osorio Jurado wearing two high-capacity tDCS electrodes on his forehead during a bench test at the CCNY Neural Engineering Group.",
    },
    detailPage: true,
    body: [
      "Human tES dosing runs from 2 mA for tDCS to roughly 1 A for electroconvulsive therapy, with almost nothing explored between. The ceiling is not physiology but the electrode-skin interface, which turns painful past 2 mA, right where cortical fields still sit under the 1 V/m engagement threshold. HC-tDCS redesigns that interface with multi-layer hydrogel electrodes: subjects report the same pain at 6 mA as conventional sponges at 2 mA.",
      "That opens the door to tripling the dose in patients, and our electrodes now supply external 6 mA depression trials. Improving the design (potentially to the point where it runs off its own printed battery, with no external stimulator) and scaling up production are the next steps.",
    ],
    figures: [
      {
        src: "/images/research/hc-tdcs-dosimetry.jpg",
        alt: "Manuscript dosimetry figure: anatomical head models for the F3-F4 and bifrontotemporal montages, simulated cortical fields for a 2 mA sponge and the hydrogel electrodes at 2 and 6 mA, and box plots of peak electric field magnitude across 1 to 6 mA.",
        width: 2048,
        height: 1198,
        caption:
          "Predicted cortical fields: a conventional 2 mA sponge montage beside the hydrogel electrodes at 2 and 6 mA, and peak field across doses. At 6 mA, frontal fields reach 1.95 to 3.25 V/m, against 0.49 to 0.95 V/m for the sponge.",
      },
    ],
    description:
      "High-capacity electrodes that deliver transcranial direct current stimulation at 6 mA, triple the conventional dose, without skin irritation. We characterized the electrode-skin interface by impedance spectroscopy and validated safety and tolerability in an IRB-approved human-subject study.",
    tags: ["Electrode design", "EIS", "tDCS", "IRB / human subjects", "Electrochemistry"],
    links: [
      {
        label: "Preprint (bioRxiv)",
        href: "https://www.biorxiv.org/content/10.1101/2025.06.11.659142v1",
        note: "Donnery et al., 2025 · under review at Brain Stimulation",
      },
      {
        label: "NCT07226011",
        href: "https://clinicaltrials.gov/study/NCT07226011",
        note: "MUSC Brain Stimulation Lab \u00b7 accelerated 6 mA tDCS for depression",
      },
      {
        label: "NCT07657234",
        href: "https://clinicaltrials.gov/study/NCT07657234",
        note: "University of S\u00e3o Paulo \u00b7 6 mA tDCS for late-life depression",
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
        src: "/images/research/darkfield-cells.jpg",
        alt: "Six darkfield microscopy panels of cells in two rows, one per model, each showing the short-exposure input, the model's reconstruction, and the long-exposure ground truth.",
        width: 1400,
        height: 886,
        caption:
          "Short-exposure input, reconstruction, and long-exposure ground truth for SID (top) and SNR-Aware (bottom). Both models visibly improve the input; SID denoises better while preserving finer detail.",
      },
    ],
    detailPage: true,
    description:
      "A benchmark of two deep-learning models, SID and SNR-Aware, on short-exposure darkfield microscopy. Trained from scratch on simulated and experimental image pairs, SID denoised better and preserved finer detail, at 0.6 percent mean reconstruction error against 1.7 percent.",
    body: [
      "Dynamic biological samples need short exposures to avoid motion blur, which leaves darkfield images with very low signal-to-noise, and pipelines that denoise and brighten separately compound their errors down there. I trained both models from scratch on identical splits, 768 simulated cell pairs and 720 experimental USAF-target pairs from an LED array microscope, and SID won on both datasets: better denoising, finer detail, shorter training time.",
      "The transformer-based SNR-Aware model likely needs larger and more diverse data than this study provided, and everything tested so far is static. Live dynamic samples are the next step.",
    ],
    tags: ["Deep learning", "PyTorch", "Computational imaging", "Image restoration", "Vision transformers"],
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
