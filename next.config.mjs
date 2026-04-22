/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  distDir: "dist",
  images: {
    remotePatterns: [{ hostname: "fakestoreapi.com" }],
  },
};

export default nextConfig;
