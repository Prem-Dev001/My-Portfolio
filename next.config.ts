import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ye line teri CSS ko block hone se rokegi
  allowedDevOrigins: ["10.24.127.101", "localhost:3000"],
};

export default nextConfig;