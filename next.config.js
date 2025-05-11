/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: [
      'media.graphassets.com',
      'res.cloudinary.com',
      'media.dev.to',
      'media2.dev.to',
    ],
  },
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio/' : '',
};

module.exports = nextConfig;
