const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://asset-management-system-one.vercel.app",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // config.on('uncaught:exception', () => false);
    },
    chromeWebSecurity: false,

  },
});
