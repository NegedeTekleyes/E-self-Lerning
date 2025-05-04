import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com'], // Add the domain here
  },
  
  eslint: {
    ignoreDuringBuilds: true, // <-- Now correctly placed inside nextConfig
  },
};


