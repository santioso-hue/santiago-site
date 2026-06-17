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
      detail: "Graduated with honors",
      logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
    },
  ],

  affiliations: [
    {
      name: "Tau Beta Pi",
      role: "Engineering Honor Society · top 12.5%",
      logo: { src: "/logos/tau-beta-pi-blue.png", alt: "Tau Beta Pi" },
    },
    {
      name: "Biomedical Engineering Society",
      role: "Chapter officer",
      logo: { src: "/logos/bmes-blue.png", alt: "Biomedical Engineering Society" },
    },
  ],

  experience: [
    {
      period: "May 2026 – present",
      role: "Visiting Researcher",
      org: "KTH Royal Institute of Technology, Stockholm",
      logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
      detail: "Computational modeling of neurostimulation in Parkinson's disease patients.",
      professors: [
        { name: "Prof. Rodrigo Moreno", href: "https://www.kth.se/profile/rodmore?l=en" },
      ],
    },
    {
      period: "Jan 2025 – present",
      role: "Neuroengineering Researcher",
      org: "CCNY Neural Engineering Group",
      logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
      detail: "High-capacity tDCS: electrode design, EIS, IRB human-subject validation at 6 mA.",
      professors: [
        { name: "Prof. Marom Bikson", href: "https://www.neuralengr.org/bikson" },
      ],
    },
    {
      period: "Jun – Dec 2025",
      role: "Machine Learning Researcher",
      org: "Computational Imaging Lab, UC Berkeley",
      logo: { src: "/logos/uc-berkeley-seal.png", alt: "University of California, Berkeley" },
      detail: "Deep learning (U-Net vs. CNN-transformer hybrids) for low-SNR darkfield microscopy.",
      professors: [
        { name: "Prof. Laura Waller", href: "https://www.laurawaller.com/" },
      ],
    },
    {
      period: "May – Sep 2024",
      role: "Medical Imaging Researcher",
      org: "KTH Royal Institute of Technology, Stockholm",
      logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
      detail: "Contrast-to-noise optimization on a Siemens NAEOTOM Alpha photon-counting CT.",
      professors: [
        { name: "Prof. Mats Persson", href: "https://www.kth.se/profile/persson6?l=en" },
      ],
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
      detail: "CCNY BME · 2026",
    },
    {
      title: "Wallace H. Coulter Award for Academic Service in Biomedical Engineering",
      detail: "CCNY BME · 2025, 2026",
    },
    {
      title: "Endowed Engineering Careers Scholarship",
      href: "https://www.ccny.cuny.edu/news/1m-gift-grove-school-establishes-scholarship-fund-undergrads",
      detail: "Grove School · 2025",
    },
    {
      title: "NIH U-RISE Scholar (NIGMS T34)",
      href: "https://www.ccny.cuny.edu/urise",
      detail: "NIH · 2025",
    },
    {
      title: "America Needs You Fellowship",
      href: "https://americaneedsyou.org/",
      detail: "2023",
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
