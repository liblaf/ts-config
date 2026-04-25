import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    nursery: "error",
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "jsdoc", "node", "vitest"],
  rules: {
    "import/consistent-type-specifier-style": "error",
    "typescript/restrict-template-expressions": "off",
  },
  options: {
    // The `options.reportUnusedDisableDirectives` option is only supported in the root config
    // reportUnusedDisableDirectives: "warn",
    // The `options.typeAware` option is only supported in the root config
    // typeAware: true,
    // The `options.typeCheck` option is only supported in the root config
    // typeCheck: true,
  },
});
