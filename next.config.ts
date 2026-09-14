import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/expertise",
        destination: "/interventions",
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
