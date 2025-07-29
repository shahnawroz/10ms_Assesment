/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/10ms_Assesment' : '',
  assetPrefix: isProd ? '/10ms_Assesment/' : '',
  images: {
    domains: ['cdn.10minuteschool.com'],
  },
};

export default nextConfig;