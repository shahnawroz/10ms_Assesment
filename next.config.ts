import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/10ms_Assesment" : "",
  assetPrefix: isProd ? "/10ms_Assesment/" : "",
  images: {
    unoptimized: true,
    domains: ["cdn.10minuteschool.com"],
  },
};

export default nextConfig;
