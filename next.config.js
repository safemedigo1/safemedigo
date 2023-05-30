/! REMOVE THE Ionc configation!/;
const { i18n } = require("./next-i18next.config");

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
      "https://api.safemedigo.com",
      "http://safemedigo1-001-site4.itempurl.com//",
      "safemedigo.com",
      "safemedigo.vercel.app",
      "cp1.safemedigo.com",
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: "build",
  i18n,
  staticPageGenerationTimeout: 120,
  generateTimeout: 600000,
};

// module.exports = withTm(nextConfig);
module.exports = nextConfig;
