import type { ProjectEntry } from "./types";

/**
 * Projects, shown as rows on the home page (dated entries newest first; undated
 * entries keep their slot). Add, remove, or reorder freely. Each needs a unique `id`.
 */
export const projects: ProjectEntry[] = [
  {
    id: "thermal-stimulator",
    title: "Thermal stimulator for automated rodent pain testing",
    period: "Aug 2025 – May 2026",
    affiliation: "Senior Design Capstone, CCNY",
    description:
      "A thermal-stimulus add-on for Tactorum's [Automated Reproducible Mechano-Stimulator](https://tactorum.com) for rodent pain tests from 30 to 60 °C. I designed and validated its closed-loop PID control, which holds ±0.5 °C.",
    body: [
      "A modular thermal-stimulus add-on for Tactorum's [Automated Reproducible Mechano-Stimulator (ARM)](https://tactorum.com) that runs reproducible rodent thermal pain tests from 30–60 °C. I designed and validated the embedded control system: a closed-loop PID controller with constant-temperature and 1 °C/s ramp modes, holding ±0.5 °C. A Peltier air-cooling chamber cuts the 50 to 30 °C cooldown from 417 s to 66 s.",
    ],
    tags: ["Embedded systems", "PID control", "Arduino", "Control systems"],
    image: {
      src: "/images/thermal-stimulator.jpg",
      alt: "Labeled CAD breakdown of the thermal stimulator: probe assembly with ceramic heater and soldering-iron tip, K-type thermocouple, waterproof magnetic-mount housing, Peltier air-cooling chamber, and Arduino control-stack housing.",
      width: 1600,
      height: 678,
    },
  },
  {
    id: "worldcup-predictor",
    title: "World Cup 2026 predictor",
    period: "2026",
    description:
      "Win probabilities for the 2026 World Cup, updated after every match using Elo ratings, a Dixon-Coles goal model, and a Monte Carlo simulation of the remaining bracket.",
    body: [
      "Win probabilities for the 2026 World Cup, recomputed after every match. Elo ratings fitted on the full history of international matches set team strength, a Dixon-Coles model turns those into goal distributions, and a Monte Carlo simulation plays out whatever is left of the bracket.",
    ],
    tags: [
      "Python",
      "Statistical modeling",
      "Monte Carlo simulation",
      "Data pipelines",
      "Streamlit",
    ],
    image: {
      src: "/images/worldcup-probabilities.jpg",
      alt: "Bar chart from the predictor on July 3, 2026: championship probability for the top seven teams, led by France at 24.7 percent, Argentina at 17.4 percent, and Spain at 16.8 percent.",
      width: 800,
      height: 740,
    },
    links: [
      {
        label: "Code",
        href: "https://github.com/santioso-hue/worldcup2026-predictor",
      },
    ],
  },
  {
    id: "tdcs-head-model",
    title: "Patient-specific head model and tDCS electric-field simulation",
    affiliation: "Independent project",
    description:
      "A pipeline that builds a finite-element head model from one MRI and simulates the tDCS electric field. On my own T1 scan, a C3/Fp2 montage at 2 mA gives a peak gray-matter electric field of 0.41 V/m.",
    body: [
      "A pipeline that builds a subject-specific finite-element head model from a single MRI and simulates the tDCS electric field. I ran it on my own T1 scan with SimNIBS and FSL: a C3/Fp2 montage at 2 mA gives a peak gray-matter field of 0.41 V/m, within the published range.",
    ],
    tags: ["Python", "SimNIBS", "FSL", "FEM", "tDCS", "Neuroimaging"],
    image: {
      src: "/images/tdcs-headmodel.jpg",
      alt: "Cortical electric-field magnitude from a finite-element tDCS simulation of a C3/Fp2 montage at 2 mA, peaking at 0.41 V/m under the motor-cortex electrode.",
      width: 1100,
      height: 883,
    },
    links: [
      { label: "Code", href: "https://github.com/santioso-hue/tDCS-head-model" },
    ],
  },
  {
    id: "helmet-mechanics",
    title: "Mechanical analysis of motorcycle helmets",
    period: "2025",
    description:
      "We analyzed how motorcycle helmets protect against traumatic brain injury. Testing standards largely ignore rotational acceleration, which drives many of these injuries.",
    body: [
      "A biomechanical analysis of how motorcycle helmets protect against traumatic brain injury. We took apart their mechanical design and found gaps in the testing standards and injury metrics currently in use: they largely ignore rotational acceleration, which drives many of the injuries helmets are meant to prevent. We propose design changes that would account for it.",
    ],
    tags: ["Biomechanics", "Traumatic brain injury", "Impact mechanics", "Mechanical design"],
    image: {
      src: "/posters/motorcycle-helmet-mechanics.jpg",
      alt: "Poster titled Mechanical Analysis of Motorcycle Helmets.",
      width: 2200,
      height: 2000,
    },
    links: [
      { label: "Poster", href: "/posters/motorcycle-helmet-mechanics.jpg" },
    ],
  },
  {
    id: "relief-sleeve",
    title: "Relief Sleeve: a wearable for restless legs syndrome",
    period: "2024",
    affiliation: "Biodesign Hackathon, CCNY (team project)",
    description:
      "A hackathon wearable for restless legs syndrome. An accelerometer detects involuntary leg movements, and a compression sleeve responds with vibration.",
    tags: ["Medical devices", "Wearables", "Arduino", "Embedded systems", "Sensors"],
    image: {
      src: "/images/relief-sleeve.jpg",
      alt: "Breadboard wiring diagram of the Relief Sleeve: an Arduino Micro driving two vibration motors through a transistor, with a triaxial accelerometer breakout for detecting leg movement.",
      width: 1400,
      height: 716,
    },
  },
];
