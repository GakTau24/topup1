/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: [
      "play-lh.googleusercontent.com",
      "downloadr2.apkmirror.com",
      "cdn1-production-images-kly.akamaized.net",
      "play.google.com",
      "yt3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
      "secure-media.hotstar.com",
      "about.netflix.com",
      "check-my-email.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false,
        tls: false,
      };
    }
    return config;
  },
};
