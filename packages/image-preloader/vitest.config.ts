import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "@febox/image-preloader",
    dir: "./src",
    watch: false,
    environment: "jsdom",
    globals: true,
    coverage: { provider: "v8" },
  },
});