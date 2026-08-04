import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Structure changed on 28 July 2026: standalone socks and editions
      // now have their own sections, and each edition's story page is
      // also where it sells. These keep older links working.
      { source: "/shop", destination: "/socks", permanent: false },
      {
        source: "/collections/standalone-socks",
        destination: "/socks",
        permanent: false,
      },
      {
        source: "/collections/editions",
        destination: "/editions",
        permanent: false,
      },
      {
        source: "/products/color-your-steps",
        destination: "/editions/color-your-steps",
        permanent: false,
      },
      {
        source: "/products/healthy-shifts",
        destination: "/editions/healthy-shifts",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
