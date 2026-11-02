import type { AboutContent } from "./types";

/** Long-form bio, education, trajectory, interests, and honors for /about. */
export const about: AboutContent = {
  currently:
    "a research engineer in Dr. Marom Bikson's lab and applying to PhD programs for Fall 2027",

  previously:
    "at KTH Royal Institute of Technology, developing tDCS computational models for Parkinson's and writing my first-author paper, now published in Frontiers in Human Neuroscience, and finishing my B.E. in Biomedical Engineering at CCNY",

  photo: {
    src: "/images/graduation.jpg",
    alt: "Santiago Osorio Jurado in cap and gown at his City College of New York graduation, 2026.",
  },

  education: {
    period: "May 2026",
    role: "B.E. Biomedical Engineering",
    org: "The City College of New York, CUNY",
    detail: "Magna Cum Laude, Dean's List",
    logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
  },

  affiliations: [
    {
      name: "Tau Beta Pi",
      role: "Engineering Honor Society · top eighth of juniors",
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
      period: "Aug 2026 – Present",
      role: "Research Engineer",
      org: "CCNY Neural Engineering Group",
      logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
      detail:
        "Scaling up electrode manufacturing for two trials at UT Southwestern (late-life depression and addiction). Developed a single-use carbon version with tolerability comparable to silver (n = 10). Building cerebellar tDCS models for a randomized trial in multiple system atrophy.",
      professors: [
        { name: "Prof. Marom Bikson", href: "https://www.neuralengr.org/bikson" },
      ],
    },
    {
      period: "Jun – Aug 2026",
      role: "Visiting Researcher",
      org: "KTH Royal Institute of Technology, Stockholm",
      logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
      detail:
        "To our knowledge the first tDCS conductivity model derived from multidimensional diffusion MRI, evaluated in 29 Parkinson's patients and controls. First-author paper published in Frontiers in Human Neuroscience.",
      professors: [
        { name: "Prof. Rodrigo Moreno", href: "https://www.kth.se/profile/rodmore?l=en" },
      ],
    },
    {
      period: "Jan 2025 – May 2026",
      role: "Undergraduate Researcher",
      org: "CCNY Neural Engineering Group",
      logo: { src: "/logos/ccny-seal-purple.png", alt: "The City College of New York" },
      detail:
        "High-capacity tDCS: electrode design, EIS, and IRB human-subject validation at 6 mA, triple the conventional dose. Published in Brain Stimulation.",
      professors: [
        { name: "Prof. Marom Bikson", href: "https://www.neuralengr.org/bikson" },
      ],
    },
    {
      period: "Jun – Aug 2025",
      role: "Machine Learning Research Intern",
      org: "Computational Imaging Lab, UC Berkeley · SUPERB",
      logo: {
        src: "/logos/uc-berkeley-seal.png",
        alt: "University of California, Berkeley",
        keepColor: true,
      },
      detail:
        "Benchmarked SID against SNR-Aware for denoising low-SNR darkfield microscopy; SID achieved up to 13 dB higher PSNR.",
      professors: [
        { name: "Prof. Laura Waller", href: "https://www.laurawaller.com/" },
      ],
    },
    {
      period: "May – Sep 2024",
      role: "Medical Imaging Research Intern",
      org: "KTH Royal Institute of Technology, Stockholm · IRES",
      logo: { src: "/logos/kth.png", alt: "KTH Royal Institute of Technology" },
      detail:
        "Contrast-to-noise optimization on a Siemens NAEOTOM Alpha photon-counting CT; 90 kVp yielded the highest iodine CNR of the four tube voltages tested.",
      professors: [
        { name: "Prof. Mats Persson", href: "https://www.kth.se/profile/persson6?l=en" },
      ],
    },
  ],

  interests:
    "Neuromodulation for psychiatric disorders and for motor recovery after stroke and spinal cord injury, with the goal of therapies patients can use at home to restore function rather than only manage symptoms.",

  honors: [
    {
      title: "Rukin Award for Academic and Professional Perseverance in Biomedical Engineering",
      detail: "CCNY BME · 2026",
    },
    {
      title: "BMES Student Chapter Executive Board Award",
      detail: "CCNY BME · 2025, 2026",
    },
    {
      title: "Wallace H. Coulter Award for Academic Service in Biomedical Engineering",
      detail: "CCNY BME · 2025, 2026",
    },
    {
      title: "Endowed Scholarship to Support the Pursuit of Engineering Careers",
      href: "https://www.ccny.cuny.edu/news/1m-gift-grove-school-establishes-scholarship-fund-undergrads",
      detail: "Grove School · 2025",
    },
    {
      title: "NIH U-RISE Scholar (NIGMS T34)",
      href: "https://www.ccny.cuny.edu/urise",
      detail: "NIH · 2025–2026",
    },
    {
      title: "America Needs You Fellowship",
      href: "https://americaneedsyou.org/",
      detail: "2023–2024",
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
