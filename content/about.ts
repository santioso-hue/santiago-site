import type { AboutContent } from "./types";

/** Long-form bio, education, trajectory, interests, and honors for /about. */
export const about: AboutContent = {
  bio: [
    "I am a biomedical engineer who completed my B.E. at the City College of New York, where I worked on neural engineering and neuromodulation. My through-line is instrumentation: building and characterizing the hardware and computation that turn a physiological idea into a measurement you can trust.",
    "My current work, at KTH Royal Institute of Technology in Stockholm, is the computational modeling of neurostimulation in Parkinson's disease patients. Before that, my high-capacity tDCS work at the CCNY Neural Engineering Group covered electrode design, impedance characterization, and the IRB-approved human studies needed to deliver high-dose stimulation safely. I have also built machine-learning pipelines for low-SNR microscopy at the Waller Lab at UC Berkeley, and optimized photon-counting CT image quality at KTH in Stockholm.",
    "I care about reproducibility and about closing the loop between a model and a validated device. I am drawn to problems where careful measurement, signal processing, and a bit of hardware come together.",
  ],

  education: [
    {
      period: "May 2026",
      role: "B.E. Biomedical Engineering",
      org: "The City College of New York, CUNY",
      detail: "Tau Beta Pi honor society, chapter officer.",
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
    "Rukin Award for Academic and Professional Perseverance in Biomedical Engineering. Department of Biomedical Engineering, CCNY. 2026.",
    "Wallace H. Coulter Award for Academic Service in Biomedical Engineering. Department of Biomedical Engineering, CCNY. 2025 and 2026. Recognized for outstanding academic service to the biomedical engineering community.",
    "Endowed Engineering Careers Scholarship. Grove School of Engineering, CCNY. May 2025.",
    "Tau Beta Pi, Engineering Honor Society. New York Eta Chapter, CCNY. April 2025. Inducted in the top eighth (12.5%) of the junior class.",
    "NIH U-RISE Scholar (NIGMS T34). National Institutes of Health, at CCNY. January 2025. Competitive NIH-funded undergraduate research training program preparing students for biomedical research PhDs.",
    "America Needs You Fellowship. America Needs You. January 2023. Two-year fellowship for first-generation college students: mentorship, internship support, and professional-development grants.",
    "Dean's List, City College of New York.",
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
