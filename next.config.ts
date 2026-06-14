import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All pages are statically generated at build time (no server data fetching),
  // so this deploys to Vercel as a fast static site with next/image optimization intact.
  reactStrictMode: true,
};

export default nextConfig;
