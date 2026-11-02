import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All pages are statically generated at build time (no server data fetching),
  // so this deploys to Vercel as a fast static site with next/image optimization intact.
  reactStrictMode: true,
  // Keep old URLs working: the site is one page now, and the CV PDF is
  // republished under a dated filename each time it is revised.
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/research", destination: "/#research", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/publications", destination: "/#publications", permanent: true },
      {
        source: "/Santiago-Osorio-Jurado-CV.pdf",
        destination: "/Santiago-Osorio-Jurado-CV-2026-11.pdf",
        permanent: false,
      },
      {
        source: "/Santiago-Osorio-Jurado-CV-2026-10.pdf",
        destination: "/Santiago-Osorio-Jurado-CV-2026-11.pdf",
        permanent: false,
      },
      {
        source: "/Santiago-Osorio-Jurado-CV-2026-08.pdf",
        destination: "/Santiago-Osorio-Jurado-CV-2026-11.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
