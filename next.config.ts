import type { NextConfig } from "next";

/** Fly app host — dashboard + APIs are served here; www proxies these paths. */
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
        source: "/api/:path*",
        destination: `${emulateCloudOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
