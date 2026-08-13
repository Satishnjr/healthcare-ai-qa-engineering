import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  cacheDir: ".tmp/vite-cache",
  build: {
    outDir: ".tmp/dist",
    emptyOutDir: true,
  },
  plugins: [react()],
});
