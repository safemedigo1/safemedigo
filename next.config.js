/! REMOVE THE Ionc configation!/;
const { i18n } = require("./next-i18next.config");

const withTm = require("next-transpile-modules")([
  "@ionic/react",
  "@ionic/core",
  "@stencil/core",
  "ionicons",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //   unoptimized: true,
    domains: ["safemedigocpv2-001-site1.atempurl.com"],
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  distDir: "build",
  i18n,
};

module.exports = withTm(nextConfig);
