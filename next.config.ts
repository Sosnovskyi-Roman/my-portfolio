const nextConfig = {
  sassOptions: {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
