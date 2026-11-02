import type { AboutContent } from "./types";

/** Long-form bio, education, trajectory, interests, and honors for the home page. */
export const about: AboutContent = {
  currently:
    "a research engineer in [Dr. Marom Bikson's lab](https://www.neuralengr.org/bikson) and applying to PhD programs for Fall 2027",

  previously:
    "at [KTH Royal Institute of Technology](https://www.kth.se/en), developing tDCS computational models for Parkinson's and writing my [first-author paper](https://doi.org/10.3389/fnhum.2026.1972676), now published in Frontiers in Human Neuroscience, and finishing my B.E. in Biomedical Engineering at [CCNY](https://www.ccny.cuny.edu/)",

  photo: {
    src: "/images/graduation.jpg",
    alt: "Santiago Osorio Jurado in cap and gown at his City College of New York graduation, 2026.",
    width: 1200,
    height: 900,
  },

  education: {
    period: "May 2026",
    role: "B.E. Biomedical Engineering",
    org: "The City College of New York, CUNY",
    detail: "Magna Cum Laude, Dean's List",
    logo: { src: "/logos/ccny-mark.png", alt: "The City College of New York" },
  },

  experience: [
    {
      period: "Aug 2026 – Present",
      role: "Research Engineer",
      org: "CCNY Neural Engineering Group",
      logo: { src: "/logos/ccny-mark.png", alt: "The City College of New York" },
      professors: [
        { name: "Prof. Marom Bikson", href: "https://www.neuralengr.org/bikson" },
      ],
    },
    {
      period: "Jun – Aug 2026",
      role: "Visiting Researcher",
      org: "KTH Royal Institute of Technology, Stockholm",
      logo: { src: "/logos/kth-mark.png", alt: "KTH Royal Institute of Technology", lightInDark: true },
      professors: [
        { name: "Prof. Rodrigo Moreno", href: "https://www.kth.se/profile/rodmore?l=en" },
      ],
    },
    {
      period: "Jan 2025 – May 2026",
      role: "Undergraduate Researcher",
      org: "CCNY Neural Engineering Group",
      logo: { src: "/logos/ccny-mark.png", alt: "The City College of New York" },
      professors: [
        { name: "Prof. Marom Bikson", href: "https://www.neuralengr.org/bikson" },
      ],
    },
    {
      period: "Jun – Aug 2025",
      role: "Machine Learning Research Intern",
      org: "Computational Imaging Lab, UC Berkeley (SUPERB)",
      logo: {
        src: "/logos/berkeley-mark.png",
        alt: "University of California, Berkeley",
      },
      professors: [
        { name: "Prof. Laura Waller", href: "https://www.laurawaller.com/" },
      ],
    },
    {
      period: "May – Sep 2024",
      role: "Medical Imaging Research Intern",
      org: "KTH Royal Institute of Technology, Stockholm (IRES)",
      logo: { src: "/logos/kth-mark.png", alt: "KTH Royal Institute of Technology", lightInDark: true },
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
      year: "2026",
    },
    {
      title: "BMES Student Chapter Executive Board Award, CCNY",
      year: "2025, 2026",
    },
    {
      title: "Wallace H. Coulter Award for Academic Service in Biomedical Engineering",
      year: "2025, 2026",
    },
    {
      title: "Endowed Scholarship to Support the Pursuit of Engineering Careers",
      href: "https://www.ccny.cuny.edu/news/1m-gift-grove-school-establishes-scholarship-fund-undergrads",
      year: "2025",
    },
    {
      title: "NIH U-RISE Scholar (NIGMS T34)",
      href: "https://www.ccny.cuny.edu/urise",
      year: "2025 – 2026",
    },
    {
      title: "America Needs You Fellowship",
      href: "https://americaneedsyou.org/",
      year: "2023 – 2024",
    },
  ],

  leadership: [
    {
      period: "2024 – 2026",
      role: "Chapter Officer (Secretary)",
      org: "Biomedical Engineering Society, CCNY Chapter",
      logo: { src: "/logos/bmes-mark.png", alt: "Biomedical Engineering Society", lightInDark: true },
      points: [
        "Co-organized the Biodesign Challenge (106 students, $7,000 in prizes) and led ResearchConnect, which placed eight undergraduates in their first lab positions.",
      ],
    },
    {
      period: "2025 – 2026",
      role: "Chapter Officer (Secretary)",
      org: "Tau Beta Pi Engineering Honor Society, New York Eta",
      logo: { src: "/logos/tau-beta-pi-mark.png", alt: "Tau Beta Pi", lightInDark: true },
      points: ["Top eighth of juniors."],
    },
  ],

  personal: {
    quote: "All that I am, or hope to be, I\u00a0owe to my angel, my mother.",
    photo: {
      src: "/images/mom.jpg",
      alt: "Santiago with his mother at an ice rink in New York, winter 2025.",
      width: 960,
      height: 1280,
      caption: "New York, 2025.",
    },
  },
};
