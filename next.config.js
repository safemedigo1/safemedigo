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
      "http://safemedigo1-001-site4.itempurl.com",
      "safemedigo.com",
      "safemedigo.vercel.app",
      "cp2.safemedigo.com",
      "https://api.safemedigo.com",
      "cp1.safemedigo.com",
    ],
  },

  source: "https://api2.safemedigo.com/api/v1/(.*)",
  headers: [
    {
      key: "Content-Type",
      value: "image/webp",
    },
  ],

  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: "build",
  i18n,
  staticPageGenerationTimeout: 1000,
};

// module.exports = withTm(nextConfig);
module.exports = nextConfig;
