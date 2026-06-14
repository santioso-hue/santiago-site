import type { AboutContent } from "./types";

/** Long-form bio, education, trajectory, interests, and honors for /about. */
export const about: AboutContent = {
  currently:
    "modeling tDCS for Parkinson's at KTH in Stockholm; I recently graduated in biomedical engineering from CCNY",

  previously:
    "building high-capacity tDCS electrodes at CCNY, developing ML models to enhance microscopy at UC Berkeley, and leading electronics and software for a rodent pain-test capstone",

  photo: {
    src: "/images/graduation.jpg",
    alt: "Santiago Osorio Jurado in cap and gown at his City College of New York graduation, 2026.",
  },

  education: [
    {
      period: "May 2026",
      role: "B.E. Biomedical Engineering",
      org: "The City College of New York, CUNY",
      logo: { src: "/logos/ccny.png", alt: "The City College of New York" },
    },
  ],

  affiliations: [
    {
      name: "Tau Beta Pi",
      role: "Engineering Honor Society",
      logo: { src: "/logos/tau-beta-pi.png", alt: "Tau Beta Pi" },
    },
    {
      name: "Biomedical Engineering Society",
      role: "Chapter officer",
      logo: { src: "/logos/bmes.png", alt: "Biomedical Engineering Society" },
    },
  ],

  experience: [
    {
      period: "May 2026 – present",
      role: "Visiting Researcher",
      org: "KTH Royal Institute of Technology, Stockholm",
      detail: "Computational modeling of neurostimulation in Parkinson's disease patients.",
    },
    {
      period: "Jan 2025 – present",
      role: "Undergraduate Researcher",
      org: "CCNY Neural Engineering Group",
      detail: "High-capacity tDCS: electrode design, EIS, IRB human-subject validation at 6 mA.",
    },
    {
      period: "Jun – Dec 2025",
      role: "Research Intern",
      org: "Computational Imaging Lab, UC Berkeley",
      detail: "Deep learning (U-Net vs. CNN-transformer hybrids) for low-SNR darkfield microscopy.",
    },
    {
      period: "May – Sep 2024",
      role: "Research Intern",
      org: "KTH Royal Institute of Technology, Stockholm",
      detail: "Contrast-to-noise optimization on a Siemens NAEOTOM Alpha photon-counting CT.",
    },
  ],

  interests: [
    "Neural engineering",
    "Neuromodulation",
    "Transcranial electrical stimulation",
    "Computational imaging",
    "Medical imaging",
    "Signal processing",
    "Bioinstrumentation",
  ],

  honors: [
    {
      title: "Rukin Award for Academic and Professional Perseverance in Biomedical Engineering",
      detail: "Department of Biomedical Engineering, CCNY. 2026.",
    },
    {
      title: "Wallace H. Coulter Award for Academic Service in Biomedical Engineering",
      detail: "Department of Biomedical Engineering, CCNY. 2025 and 2026.",
    },
    {
      title: "Endowed Engineering Careers Scholarship",
      detail: "Grove School of Engineering, CCNY. 2025.",
    },
    {
      title: "Tau Beta Pi, Engineering Honor Society",
      detail:
        "New York Eta Chapter, CCNY. 2025. Inducted in the top eighth (12.5%) of the junior class.",
    },
    {
      title: "NIH U-RISE Scholar (NIGMS T34)",
      detail:
        "National Institutes of Health, at CCNY. 2025. Competitive NIH-funded undergraduate research training program preparing students for biomedical research PhDs.",
    },
    {
      title: "America Needs You Fellowship",
      detail:
        "2023. Two-year fellowship for first-generation college students: mentorship, internship support, and professional-development grants.",
    },
  ],

  personal: {
    quote: "All that I am, or hope to be, I owe to my angel, my mother.",
    photo: {
      src: "/images/mom.jpg",
      alt: "Santiago with his mother at an ice rink in New York, winter 2025.",
      caption: "New York, 2025.",
    },
  },
};
