/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      port: '',
      pathname: '/PokeAPI/sprites/master/sprites/pokemon/**'
    }]
  },
};

module.exports = nextConfig;
