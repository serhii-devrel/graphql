import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    video: false,
    baseUrl: "http://localhost:8080",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
