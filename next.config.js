/! REMOVE THE Ionc configation!/;
const { i18n } = require("./next-i18next.config");
const withImages = require("next-images");

// const withTm = require("next-transpile-modules")([
//   "@ionic/react",
//   "@ionic/core",
//   "@stencil/core",
//   "ionicons",
// ]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  runtime: "experimental-edge",

  images: {
    //   unoptimized: true,
    domains: [
      "https://api2.safemedigo.com",
      "http://safemedigo1-001-site4.itempurl.com//",
      "safemedigo.com",
      "safemedigo.vercel.app",
      "cp1.safemedigo.com",
      "https://api.safemedigo.com",
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: "build",
  i18n,
  staticPageGenerationTimeout: 1000,
};

// module.exports = withTm(nextConfig);
module.exports = nextConfig;
