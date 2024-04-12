const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://asset-management-system-one.vercel.app",
    chromeWebSecurity: true,
    setupNodeEvents(on, config) {
      // config.on('uncaught:exception', () => false);
    },
  },
});
