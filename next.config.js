const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const isProduction = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
    domains: [
      {
        domain: "72nomesdedeus.com.br",
        defaultLocale: "pt-BR",
      },
    ],
  },
  pwa: {
    disable: !isProduction,
    dest: "pwa",
    sw: "/pwa",
    runtimeCaching,
  },
});
