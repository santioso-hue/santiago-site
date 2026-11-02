import type { ResearchEntry } from "./types";

/**
 * Research entries, shown as rows on the home page.
 * Add, remove, or reorder freely. Each needs a unique `id`.
 */
export const research: ResearchEntry[] = [
  {
    id: "pd-neurostim",
    title: "Using diffusion MRI to personalize tDCS in Parkinson's",
    affiliation: "KTH Royal Institute of Technology (Prof. Rodrigo Moreno)",
    period: "Jun – Aug 2026",
    logo: { src: "/logos/kth-mark.png", alt: "KTH Royal Institute of Technology", lightInDark: true },
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
      "The multidimensional and DTI models predict electric fields that differ by 6.6 percent or less, even though the two anisotropic tensors point about 21 degrees apart in white matter. Whole-brain field also tracked MR elastography stiffness, until cerebrospinal fluid volume was accounted for and the correlation vanished.",
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
        label: "Paper (Frontiers in Human Neuroscience)",
        short: "Paper",
        href: "https://doi.org/10.3389/fnhum.2026.1972676",
        note: "Osorio Jurado et al., 2026, Frontiers in Human Neuroscience",
      },
      {
        label: "Poster",
        href: "/posters/mre-tdcs-pd-neuromodulation-2026.jpg",
        note: "NYC Neuromodulation Conference and Urban University Conference Series (UUC2026), KTH",
      },
    ],
    description:
      "Anisotropy in tDCS is conventionally derived from single-shell DTI. I built, to our knowledge, the first head model to derive it from multidimensional diffusion MRI, then compared the predicted electric fields against DTI and isotropic models across 29 participants and four montages.",
    summary:
      "I built, to our knowledge, **the first tDCS head model with anisotropy from multidimensional diffusion MRI**. In 29 participants, its predicted electric fields differed from the DTI model by 6.6 percent or less, and differences in anatomy between people changed the electric field more.",
    tags: ["Parkinson's disease", "tDCS", "MD-dMRI", "SimNIBS", "Finite element modeling"],
  },
  {
    id: "hc-tdcs",
    title: "High-capacity tDCS (HC-tDCS)",
    affiliation: "CCNY Neural Engineering Group (Prof. Marom Bikson)",
    period: "Jan 2025 – Present",
    logo: { src: "/logos/ccny-mark.png", alt: "The City College of New York" },
    photo: {
      src: "/images/research/hc-tdcs-electrodes.jpg",
      alt: "Santiago Osorio Jurado wearing two high-capacity tDCS electrodes on his forehead during a bench test at the CCNY Neural Engineering Group.",
      width: 900,
      height: 1125,
    },
    detailPage: true,
    body: [
      "Human tES dosing runs from 2 mA for tDCS to roughly 1 A for electroconvulsive therapy, with almost nothing explored between. The practical limit is the electrode-skin interface, which becomes painful above 2 mA, where peak brain electric fields are 1 V/m or less. HC-tDCS redesigns that interface with multilayer hydrogel electrodes. In 10 healthy volunteers, mean pain at 6 mA (17.2 on a 100 mm scale) was comparable to conventional sponges at 2 mA (18.3).",
      "That opens the door to tripling the dose in patients. Our electrodes supplied an external 6 mA depression trial at MUSC and I now make them for two ongoing trials at UT Southwestern, and a single-use carbon version has shown tolerability comparable to silver. Improving the design (potentially to the point where it runs off its own printed battery, with no external stimulator) and scaling up production are the next steps. I presented this work at ABRCMS 2025 and the 2026 Bioelectronic Medicine Summit.",
    ],
    figures: [
      {
        src: "/images/research/hc-tdcs-dosimetry.jpg",
        alt: "Manuscript dosimetry figure: anatomical head models for the F3-F4 and bifrontotemporal montages, simulated cortical fields for a 2 mA sponge and the hydrogel electrodes at 2 and 6 mA, and box plots of peak electric field magnitude across 1 to 6 mA.",
        width: 2048,
        height: 1198,
        caption:
          "Predicted cortical fields: a conventional 2 mA sponge montage beside the hydrogel electrodes at 2 and 6 mA, and peak field across doses. Across eight head models, peak electric fields reach 2.25 to 3.26 V/m at 6 mA, against 0.49 to 0.85 V/m for the 2 mA sponge montage.",
      },
    ],
    description:
      "High-capacity electrodes that deliver transcranial direct current stimulation at 6 mA, triple the conventional dose, with pain comparable to conventional 2 mA tDCS. We characterized the electrodes by impedance spectroscopy and tested tolerability in an IRB-approved study of 10 healthy volunteers. Skin redness increased with current.",
    summary:
      "Electrodes that deliver tDCS at **6 mA, triple the conventional dose**. In 10 healthy volunteers, pain was comparable to conventional 2 mA tDCS. I now make them for two ongoing trials at UT Southwestern.",
    tags: ["Electrode design", "EIS", "tDCS", "IRB / human subjects", "Electrochemistry"],
    links: [
      {
        label: "Paper (Brain Stimulation)",
        short: "Paper",
        href: "https://doi.org/10.1016/j.brs.2026.103233",
        note: "Donnery et al., 2026, Brain Stimulation",
      },
      {
        label: "NCT07226011",
        short: "Trial",
        href: "https://clinicaltrials.gov/study/NCT07226011",
        note: "MUSC Brain Stimulation Lab, accelerated 6 mA tDCS for depression",
      },
      {
        label: "Poster",
        href: "/posters/hc-tdcs-abrcms-2025.jpg",
        note: "ABRCMS, San Antonio, TX, 2025",
      },
    ],
  },
  {
    id: "darkfield-ml",
    title: "Machine learning for darkfield microscopy",
    affiliation: "UC Berkeley, Computational Imaging Lab (Prof. Laura Waller)",
    period: "Jun – Aug 2025",
    logo: {
      src: "/logos/berkeley-mark.png",
      alt: "University of California, Berkeley",
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
      "A benchmark of two deep-learning models, SID and SNR-Aware, on short-exposure darkfield microscopy. Trained from scratch on simulated and experimental image pairs, SID denoised better and preserved finer detail, with a peak signal-to-noise ratio of 37.7 dB against 24.5 dB on experimental phase targets.",
    body: [
      "Dynamic biological samples need short exposures to avoid motion blur, which leaves darkfield images with very low signal-to-noise, and pipelines that denoise and brighten separately compound their errors down there. I trained both models from scratch on identical splits, 768 simulated cell pairs and 720 experimental USAF-target pairs from an LED array microscope, and SID won on both datasets: better denoising and finer detail.",
      "The transformer-based SNR-Aware model likely needs larger and more diverse data than this study provided, and everything tested so far is static. Live dynamic samples are the next step.",
    ],
    summary:
      "I compared two deep-learning models, SID and SNR-Aware, for denoising short-exposure darkfield microscopy. SID scored higher on both datasets, reaching **37.7 dB against 24.5 dB** peak signal-to-noise ratio on experimental phase targets.",
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
    title: "Photon-counting CT optimization",
    affiliation: "KTH Royal Institute of Technology (Prof. Mats Persson)",
    period: "May – Sep 2024",
    logo: { src: "/logos/kth-mark.png", alt: "KTH Royal Institute of Technology", lightInDark: true },
    description:
      "I optimized iodine contrast-to-noise on a Siemens NAEOTOM Alpha photon-counting CT. At clinically relevant dose, 90 kVp with 40 keV virtual monoenergetic reconstruction was optimal.",
    tags: ["Photon-counting CT", "Image quality", "CNR optimization", "Medical imaging"],
    links: [
      {
        label: "Poster",
        href: "/posters/photon-counting-ct-cnr.jpg",
      },
    ],
  },
];
