import { defineConfig } from "cypress";

export default defineConfig({
  "watchForFileChanges": false,
  "defaultCommandTimeout":1000,

  e2e: {
    setupNodeEvents(on, config) {   
    },
  },
});
