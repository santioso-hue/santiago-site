import type { ProjectEntry } from "./types";

/**
 * Projects, shown as cards on /projects (dated entries newest first; undated
 * entries keep their slot). Add, remove, or reorder freely. Each needs a unique `id`.
 */
export const projects: ProjectEntry[] = [
  {
    id: "thermal-stimulator",
    title: "Thermal Stimulator for Automated Rodent Pain Testing",
    period: "Aug 2025 – May 2026",
    affiliation: "Senior Design Capstone · CCNY",
    description:
      "A modular thermal-stimulus add-on for Tactorum's [Automated Reproducible Mechano-Stimulator (ARM)](https://tactorum.com), delivering reproducible rodent thermal pain testing from 30–60 °C. I designed and validated the embedded control system: a closed-loop PID controller with constant-temperature and 1 °C/s ramp modes, and ±0.5 °C accuracy. The device features a Peltier air-cooling chamber that cuts cooldown (50 to 30 °C) from 417 s to 66 s.",
    tags: ["Embedded systems", "PID control", "Arduino", "Control systems"],
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
      "An open pipeline that builds a subject-specific finite-element head model from a single MRI and simulates tDCS electric fields, applied to my own T1 scan with SimNIBS and FSL. A C3/Fp2 montage at 2 mA gives a peak gray-matter field of 0.41 V/m, within the published range.",
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
    id: "helmet-mechanics",
    title: "Mechanical Analysis of Motorcycle Helmets",
    period: "2025",
    description:
      "A biomechanical analysis of how motorcycle helmets protect against traumatic brain injury. We dissected the mechanical design of helmets and identified flaws in current testing standards and metrics used to predict injury. These metrics fail to account for rotational acceleration, which is believed to be the primary cause of several injuries. Finally, we propose design improvements to enhance helmet safety.",
    tags: ["Biomechanics", "Traumatic brain injury", "Impact mechanics", "Mechanical design"],
    links: [
      { label: "Poster", href: "/posters/motorcycle-helmet-mechanics.jpg" },
    ],
  },
  {
    id: "relief-sleeve",
    title: "Relief Sleeve: Wearable for Restless Leg Syndrome",
    period: "2024",
    affiliation: "Biodesign Hackathon · CCNY (team project)",
    description:
      "A wearable that eases Restless Leg Syndrome (RLS) without the side effects of medication. A triaxial accelerometer on an Arduino Nano detects involuntary leg movements and triggers vibration motors in a compression sleeve, with both manual and automatic modes.",
    tags: ["Medical devices", "Wearables", "Arduino", "Embedded systems", "Sensors"],
    image: {
      src: "/images/relief-sleeve.jpg",
      alt: "Breadboard prototype of the Relief Sleeve: an Arduino Nano driving vibration motors, with a triaxial accelerometer for detecting leg movement.",
    },
  },
  {
    id: "this-website",
    title: "This Website",
    description:
      "This site, built with Next.js 16, React 19, and Tailwind v4. All copy lives in typed content files, and every page is statically generated, with light and dark theming.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/santioso-hue/santiago-site" },
    ],
  },
];
