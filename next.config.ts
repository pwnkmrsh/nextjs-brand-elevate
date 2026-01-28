import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: "/myapp",
  assetPrefix: "/myapp/",

  images: {
    unoptimized: true, // 🔥 REQUIRED for static export
  },
};

export default nextConfig;
