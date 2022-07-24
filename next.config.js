/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ["storage.googleapis.com", "media.autochek.africa"],
  },
};

module.exports = nextConfig;
