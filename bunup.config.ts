import { defineConfig } from "bunup";
import type { DefineConfigItem } from "bunup";
import { copy } from "bunup/plugins";

import base from "./src/bunup.config.ts";

export default defineConfig({
  ...base,
  entry: ["./src/*.config.ts"],
  packages: "external",
  plugins: [copy("./src/tsconfig.json")],
  exports: {
    customExports(): Record<string, string> {
      return {
        "./tsconfig": "./dist/tsconfig.json",
      };
    },
  },
}) as DefineConfigItem;
