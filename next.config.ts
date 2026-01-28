import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: "/myapp",
  assetPrefix: "/myapp/",

  images: {
    unoptimized: true, // 🔥 REQUIRED for static export
    qualities: [75, 80, 85, 90, 95, 100],

  },
};

export default nextConfig;
