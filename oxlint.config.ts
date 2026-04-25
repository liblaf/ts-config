import { defineConfig } from "oxlint";

import base from "./src/oxlint.config.ts";

export default defineConfig({
  extends: [base],
  options: {
    reportUnusedDisableDirectives: "warn",
    typeAware: true,
    typeCheck: true,
  },
});
