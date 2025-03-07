import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, "../../common/ui"),
      service: path.resolve(__dirname, "../../common/service"),
    },
  },
  server: {
    port: 3000,
  },
});
