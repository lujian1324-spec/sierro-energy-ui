import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

const cdn = {
  react: "https://esm.sh/react@19.2.8",
  "react-dom": "https://esm.sh/react-dom@19.2.8",
  "react-dom/client": "https://esm.sh/react-dom@19.2.8/client",
  "react-router": "https://esm.sh/react-router@7.18.3",
  "react-router/dom": "https://esm.sh/react-router@7.18.3/dom",
  "react-router-dom": "https://esm.sh/react-router-dom@7.18.3",
}

export default defineConfig({
  base: "/sierro-energy-ui/",
  build: {
    rollupOptions: {
      external: Object.keys(cdn),
      output: { paths: cdn },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Sierro Energy",
        short_name: "Sierro",
        description: "Sierro Energy device management",
        theme_color: "#141414",
        background_color: "#141414",
        display: "standalone",
        start_url: "./",
        scope: "/sierro-energy-ui/",
        icons: [
          { src: "favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
          { src: "favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,svg,webmanifest}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/esm\.sh\/.*/,
            handler: "CacheFirst",
            options: {
              cacheName: "esm-cdn",
              expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
})
