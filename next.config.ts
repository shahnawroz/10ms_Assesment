import type { NextConfig } from "next";

// Check if we are in production and deploying to GitHub Pages
const isGitHubPages = process.env.GITHUB_REPOSITORY && process.env.VERCEL === undefined;

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