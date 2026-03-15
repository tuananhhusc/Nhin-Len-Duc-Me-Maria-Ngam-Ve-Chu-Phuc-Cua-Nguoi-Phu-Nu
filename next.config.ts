import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/Nhin-Len-Duc-Me-Maria-Ngam-Ve-Chu-Phuc-Cua-Nguoi-Phu-Nu',
};

export default nextConfig;
