/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "", // Leave empty if no specific port is used
        pathname: "/**", // Allows any path on the hostname
      },
    ],
  },
};

export default nextConfig;
