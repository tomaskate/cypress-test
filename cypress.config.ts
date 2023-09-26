import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        logToConsole(message) {
          console.log(message);
          return null;
        }
      });
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
        launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/2-advanced-examples"],
  },
});
