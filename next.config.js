/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    domains: [
      'media.graphassets.com',
      'res.cloudinary.com',
      'media.dev.to',
      'media2.dev.to',
    ],
  },
};

module.exports = nextConfig;
