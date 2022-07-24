import { defineConfig } from "vite";

const BUILD_FILES = {
  es: "aioli.mjs",
  umd: "aioli.js"
};

export default defineConfig({
  build: {
    lib: {
      name: "Aioli",
      formats: ["es", "umd"],
      fileName: format => BUILD_FILES[format],
      entry: "src/main.js"
    }
  }
});
