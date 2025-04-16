import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [viteCompression(), react()],
  build: {
    sourcemap: false,
    target: "es2017",
    minify: "esbuild",
  },
  optimizeDeps: {
    include: ["lodash-es"],
  },
  server: {
    watch: {
      ignored: ["**/node_modules/**", "**/public/images/**"],
    },
  },
});
