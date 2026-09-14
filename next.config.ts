import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only. Vinext will prerender every route
  // into HTML when this Next-compatible export mode is enabled.
  output: "export",
};

export default nextConfig;
