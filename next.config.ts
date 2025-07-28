import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "10ms_Assesment"; // Replace with your GitHub repo name

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    domains: ["cdn.10minuteschool.com"],
  },
};

export default nextConfig;
