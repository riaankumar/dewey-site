import type { NextConfig } from "next";

/** Fly app host — dashboard, admin, and APIs are served here; www proxies these paths. */
const emulateCloudOrigin = "https://share.useemulate.com";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: `${emulateCloudOrigin}/dashboard`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${emulateCloudOrigin}/dashboard/:path*`,
      },
      {
        source: "/admin",
        destination: `${emulateCloudOrigin}/admin`,
      },
      {
        source: "/admin/:path*",
        destination: `${emulateCloudOrigin}/admin/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${emulateCloudOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
