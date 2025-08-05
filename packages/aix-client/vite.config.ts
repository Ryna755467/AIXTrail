import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  server: {
    port: Number(process.env.SERVER_PORT) || 3000,
  },
});
