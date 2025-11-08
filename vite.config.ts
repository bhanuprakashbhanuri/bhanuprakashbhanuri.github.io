import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",        // <- IMPORTANT for GitHub Pages: use a relative base
  plugins: [react()],
  // keep any other existing options you have here
});

