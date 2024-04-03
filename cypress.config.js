const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
   
  // Additional configurations or event listeners can be added here
  e2e: {
    baseUrl: 'https://asset-management-system-one.vercel.app',
    // viewportHeight: 1200,
    // viewportWidth: 800 , 
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
      // For example, you can use this hook to listen to events during test runs
    },
  },
  
});


 