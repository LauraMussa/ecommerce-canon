import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/**")],
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
