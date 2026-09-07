import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    components: "src/components/index.ts",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["preact", "@quartz-community/types", "@quartz-community/utils"],
})
