/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['*.run.app', 'localhost:3000'],
};

export default nextConfig;


