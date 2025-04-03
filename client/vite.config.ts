import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      scopeBehaviour: "local",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@styles": resolve(__dirname, "./src/common/styles"),
      "@navbar": resolve(__dirname, "./src/modules/navbar"),
      "@items-list": resolve(__dirname, "./src/modules/items-list"),
      "@item-detail": resolve(__dirname, "./src/modules/item-detail"),
      "@not-found": resolve(__dirname, "./src/modules/not-found"),
    },
  },
  test: {
    environment: "node",
    exclude: [...configDefaults.exclude, "e2e/*"],
    globals: true,
  },
});
