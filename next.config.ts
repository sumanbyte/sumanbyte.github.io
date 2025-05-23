import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/nextjs-portfolio" : "",
  assetPrefix: isProd ? "/nextjs-portfolio" : "",
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
