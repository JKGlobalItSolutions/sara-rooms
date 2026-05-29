import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Use "/" for development, "/sara-rooms/" for production (GitHub Pages)
  base: process.env.NODE_ENV === "production" ? "/sara-rooms/" : "/",
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});