const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const isProduction = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: !isProduction,
    dest: "pwa",
    sw: "/pwa",
    runtimeCaching,
  },
});
