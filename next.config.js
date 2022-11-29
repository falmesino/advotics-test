/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles', 'components/**/*')]
  }
}

module.exports = nextConfig
