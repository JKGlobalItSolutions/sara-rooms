import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Use Vite's function form to reliably detect build vs serve
// "command" is "serve" for dev, "build" for production build
// "mode" is "development" for dev, "production" for build
export default defineConfig(({ command, mode }) => ({
  // For development: base = "/" (works on localhost:5173)
  // For production build: base = "/sara-rooms/" (works on GitHub Pages)
  base: command === "build" ? "/sara-rooms/" : "/",
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));