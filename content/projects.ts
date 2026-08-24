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
      "A modular thermal-stimulus add-on for Tactorum's [Automated Reproducible Mechano-Stimulator (ARM)](https://tactorum.com) that runs reproducible rodent thermal pain tests from 30–60 °C. I designed and validated the embedded control system: a closed-loop PID controller with constant-temperature and 1 °C/s ramp modes, holding ±0.5 °C. A Peltier air-cooling chamber cuts the 50 to 30 °C cooldown from 417 s to 66 s.",
    tags: ["Embedded systems", "PID control", "Arduino", "Control systems"],
    image: {
      src: "/images/thermal-stimulator.jpg",
      alt: "Labeled CAD breakdown of the thermal stimulator: probe assembly with ceramic heater and soldering-iron tip, K-type thermocouple, waterproof magnetic-mount housing, Peltier air-cooling chamber, and Arduino control-stack housing.",
    },
  },
  {
    id: "worldcup-predictor",
    title: "World Cup 2026 Predictor",
    period: "2026",
    description:
      "Win probabilities for the 2026 World Cup, recomputed after every match. Elo ratings fitted on the full history of international matches set team strength, a Dixon-Coles model turns those into goal distributions, and a Monte Carlo simulation plays out whatever is left of the bracket.",
    tags: [
      "Python",
      "Statistical modeling",
      "Monte Carlo simulation",
      "Data pipelines",
      "Streamlit",
    ],
    links: [
      {
        label: "Code",
        href: "https://github.com/santioso-hue/worldcup2026-predictor",
      },
    ],
  },
  {
    id: "tdcs-head-model",
    title: "Patient-Specific Head Model & tDCS E-Field Simulation",
    affiliation: "Independent project",
    description:
      "A pipeline that builds a subject-specific finite-element head model from a single MRI and simulates the tDCS electric field. I ran it on my own T1 scan with SimNIBS and FSL: a C3/Fp2 montage at 2 mA gives a peak gray-matter field of 0.41 V/m, within the published range.",
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
      "A biomechanical analysis of how motorcycle helmets protect against traumatic brain injury. We took apart their mechanical design and found gaps in the testing standards and injury metrics currently in use: they largely ignore rotational acceleration, which drives many of the injuries helmets are meant to prevent. We propose design changes that would account for it.",
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
      "A hackathon wearable for Restless Leg Syndrome: an accelerometer detects involuntary leg movements and answers them with vibration through a compression sleeve.",
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
      "Next.js 16, React 19, and Tailwind v4; statically generated, all copy in typed content files.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/santioso-hue/santiago-site" },
    ],
  },
];
