import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Ini yang benar
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
