/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/next-js-app',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig