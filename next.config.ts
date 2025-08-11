// next.config.ts

import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Enable analyzer only when ANALYZE=true
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Next.js config
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force non‑www canonical
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.calculadoraciclosdesueno.com" }],
        destination: "https://calculadoraciclosdesueno.com/:path*",
        permanent: true,
      },
      // Collapse /index to /
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
  // Do NOT enable trailingSlash to avoid / vs / duplicates
  // trailingSlash: false, // (default)
};

export default withAnalyzer(nextConfig);
