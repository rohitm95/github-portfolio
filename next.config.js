const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com',
      },
      {
        protocol: 'https',
        hostname: 'stardev.io',
      },
      {
        protocol: 'http',
        hostname: 'github-profile-summary-cards.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'github-profile-trophy.vercel.app',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment'
  },
};
