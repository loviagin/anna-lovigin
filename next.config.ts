import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Отключает проверку ESLint при сборке
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

