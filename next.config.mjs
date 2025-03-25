/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['ext.same-assets.com', 'same-assets.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'same-assets.com',
        pathname: '/**/*',
      },
    ],
  },
};

export default nextConfig;
