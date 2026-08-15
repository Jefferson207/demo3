import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'prensachalaca.com' },
    { protocol: 'https', hostname: 'mir-s3-cdn-cf.behance.net' },
    { protocol: 'https', hostname: 'www.civitatis.com' },
    { protocol: 'https', hostname: 'www.peru.travel' },
    { protocol: 'https', hostname: 'www.blueprinttravelers.com' },
    { protocol: 'https', hostname: 'cibercartel.com' },
  ] },
};

export default nextConfig;
