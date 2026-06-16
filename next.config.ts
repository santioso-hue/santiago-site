import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All pages are statically generated at build time (no server data fetching),
  // so this deploys to Vercel as a fast static site with next/image optimization intact.
  reactStrictMode: true,
  // The About content now lives on the home page; keep the old /about URL working.
  async redirects() {
    return [{ source: "/about", destination: "/", permanent: true }];
  },
};

export default nextConfig;
