/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3050/api/:path*",
      },
    ];
  },
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
