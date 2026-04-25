import { defineConfig } from "oxfmt";

export default defineConfig({
  jsdoc: true,
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  sortTailwindcss: true,
});
