import type { ProjectEntry } from "./types";

/**
 * Projects, shown as cards on /projects (most relevant first).
 * Add, remove, or reorder freely. Each needs a unique `id`.
 */
export const projects: ProjectEntry[] = [
  {
    id: "thermal-stimulator",
    title: "Thermal Stimulator for Automated Rodent Pain Testing",
    period: "Aug 2025 – May 2026",
    affiliation: "Senior Design Capstone · CCNY · Sponsored by Tactorum Inc.",
    description:
      "A modular thermal-stimulus add-on for Tactorum's Automated Reproducible Mechano-Stimulator (ARM), delivering reproducible rodent thermal pain testing from 30–60 °C. I designed and validated the embedded control system: a closed-loop PID controller (PWM drive, K-type thermocouple feedback) with constant-temperature and 1 °C/s ramp modes, holding ±0.5 °C in constant mode and 0.91–1.07 °C/s on the ramp after diagnosing and fixing an integral-reset ramp undershoot. The team device, selected from 8 concepts with a Pugh matrix, adds a Peltier air-cooling chamber that cut cooldown (50 to 30 °C) from 417 s to 66 s in a sub-1 kg unit. Sponsored by Dr. Justin Burdge (Tactorum Inc.).",
    tags: ["Embedded systems", "PID control", "Arduino", "Thermocouples", "Capstone"],
    image: {
      src: "/images/thermal-stimulator.jpg",
      alt: "Labeled CAD breakdown of the thermal stimulator: probe assembly with ceramic heater and soldering-iron tip, K-type thermocouple, waterproof magnetic-mount housing, Peltier air-cooling chamber, and Arduino control-stack housing.",
    },
  },
  {
    id: "tdcs-head-model",
    title: "Patient-Specific Head Model & tDCS E-Field Simulation",
    affiliation: "Independent project",
    description:
      "An end-to-end, open pipeline that builds a subject-specific finite-element head model from a single structural MRI and simulates tDCS electric fields, applied to my own T1 scan with SimNIBS 4.6 and FSL. SimNIBS charm generates a 5-tissue model (scalp, skull, CSF, gray and white matter); an independent FSL pipeline (BET, FAST) cross-checks the segmentation. A C3/Fp2 motor-cortex montage at 2 mA yields a peak gray-matter field of 0.41 V/m (99.9th percentile), consistent with the published 0.2–0.5 V/m range. Full pipeline, configs, and QC figures released publicly for reproducibility.",
    tags: ["Python", "SimNIBS", "FSL", "FEM", "tDCS", "Neuroimaging"],
    image: {
      src: "/images/tdcs-headmodel.jpg",
      alt: "Cortical electric-field magnitude from a finite-element tDCS simulation of a C3/Fp2 montage at 2 mA, peaking at 0.41 V/m under the motor-cortex electrode.",
    },
    links: [
      { label: "Code", href: "https://github.com/santioso-hue/tDCS-head-model" },
    ],
  },
  {
    id: "relief-sleeve",
    title: "Relief Sleeve: Wearable for Restless Leg Syndrome",
    period: "2024",
    affiliation: "Biodesign Hackathon · CCNY (team project)",
    description:
      "A low-cost wearable that eases Restless Leg Syndrome (RLS) without the side effects of medication. A triaxial accelerometer on an Arduino Nano detects involuntary leg movements and triggers vibration motors in a compression sleeve, with both manual and automatic modes, at an estimated $9.52 unit cost versus $70–80 for existing devices. Built with a seven-person team at CCNY's Biodesign Hackathon (Blackstone LaunchPad · ZAHN Innovation Center).",
    tags: ["Medical devices", "Wearables", "Arduino", "Embedded systems", "Biodesign"],
    image: {
      src: "/images/relief-sleeve.jpg",
      alt: "Breadboard prototype of the Relief Sleeve: an Arduino Nano driving vibration motors, with a triaxial accelerometer for detecting leg movement.",
    },
  },
  {
    id: "this-website",
    title: "This Website",
    description:
      "This site, built from scratch with Next.js 16, React 19, and Tailwind v4. All copy lives in typed content files, so it ships as fast, crawlable HTML, with light/dark theming and no template.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/santioso-hue/santiago-site" },
    ],
  },
];
