const { defineConfig } = require("cypress");

module.exports = defineConfig({
   
  e2e: {
    baseUrl: 'https://asset-management-system-one.vercel.app',
    setupNodeEvents(on, config) {
      // config.on('uncaught:exception', () => false);
       
    },
  },
});
