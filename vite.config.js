import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

// Simulate __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "lucide-react": "lucide-react", // Keeping this as per your request
      "@images": path.resolve(__dirname, "src/assets/Candidate/images"), // Fixed relative path
    },
  },
});
