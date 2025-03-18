/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable standalone output to avoid symlink issues
  output: undefined,
  webpack: (config) => {
    // Disable symlinks for all bundles
    config.resolve.symlinks = false;
    return config;
  },
}

module.exports = nextConfig 