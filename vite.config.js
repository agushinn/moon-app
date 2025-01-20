import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { speedInsights } from '@vercel/speed-insights/plugin'

// https://vitejs.dev/config/
export default defineConfig({
      plugins: [react(), speedInsights()],

  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@store": "/src/store",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
});
