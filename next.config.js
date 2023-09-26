/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
