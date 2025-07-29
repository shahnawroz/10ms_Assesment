import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  images: {
    unoptimized: true,
    domains: ["cdn.10minuteschool.com"],
  },
};

export default nextConfig;
