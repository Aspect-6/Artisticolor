import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "zv6cm1",

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
