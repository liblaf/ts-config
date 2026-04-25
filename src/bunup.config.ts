import { defineConfig } from "bunup";
import type { DefineConfigItem } from "bunup";

const config = defineConfig({
  minify: true,
  dts: {
    splitting: true,
    minify: true,
    inferTypes: true,
  },
  sourcemap: "linked",
  onSuccess: "bun run fmt",
  shims: true,
  exports: true,
  unused: true,
}) as DefineConfigItem;

export default config;
