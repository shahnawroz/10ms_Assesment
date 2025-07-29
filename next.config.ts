import type { NextConfig } from "next";

// Check if we are in a production environment and deploying to GitHub Pages (or any subpath)
const isGitHubPages = process.env.NEXT_PUBLIC_VERCEL_URL?.includes('github.io');

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/10ms_Assesment" : "",
  assetPrefix: isGitHubPages ? "/10ms_Assesment/" : "",
  images: {
    unoptimized: true,
    domains: ["cdn.10minuteschool.com"],
  },
};

export default nextConfig;
