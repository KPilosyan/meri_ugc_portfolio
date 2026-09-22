import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rrxt4mgceuhmmfet.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;