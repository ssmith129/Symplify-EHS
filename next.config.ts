import type { NextConfig } from "next";

const basePath = "/nextjs/template";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,   // ← REQUIRED for Turbopack (fixes 404 & missing assets)
  trailingSlash: false,
};

export default nextConfig;
