/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    unoptimized: true,

    protcol: "https",
    domains: ["m-media-amazon.com"],
  },
};

module.exports = nextConfig;
