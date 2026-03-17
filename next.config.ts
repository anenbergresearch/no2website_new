import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Enables static HTML export
  output: 'export',
  
  // Necessary if your repo name is something like 'NO2website' and not a user/org page.
  basePath: isProd ? '/no2website_new' : '',
  assetPrefix: isProd ? '/no2website_new/' : '',

  // Optional: Disable image optimization if you are relying on standard <img> tags
  images: {
    unoptimized: true,
  },
};
export default nextConfig;