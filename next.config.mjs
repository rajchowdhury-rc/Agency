/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['*.run.app', 'localhost:3000'],
};

export default nextConfig;


