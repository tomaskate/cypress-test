import { defineConfig } from "cypress";
export default defineConfig({
  projectId: "gbnma2",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200",
  },
});
