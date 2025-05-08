import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 24000000, // 24MB limit for Cloudflare Pages
    };
    return config;
  },
};

export default nextConfig;