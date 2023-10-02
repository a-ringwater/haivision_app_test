/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/haivision_app_test",
  assetPrefix: "/haivision_app_test/",
  images: {
    domains: ['rickandmortyapi.com'],
  },
}

module.exports = nextConfig
