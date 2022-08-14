const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v7m4x1",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000'
  },
});
