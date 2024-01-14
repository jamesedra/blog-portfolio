/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/jamesedra/blog-portfolio/master/blog-images/**",
      },
    ],
  },
};

module.exports = nextConfig;
