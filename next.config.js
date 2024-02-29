/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "books.google.com" },
      { hostname: "localhost" },
    ],
  },
};

module.exports = nextConfig;
