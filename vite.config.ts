import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    VitePWA({
      includeAssets: [
        'favicon.ico',
        'img/icons/apple-touch-icon.png',
        'img/icons/android-chrome-192x192.png',
        'img/icons/android-chrome-512x512.png'
      ],
      manifest: {
        name: "Teacher's Agenda Progressive Web App",
        short_name: "Teacher's Agenda",
        description: "Installable app to manage teacher's agenda",
        theme_color: '#333c4d',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: 'img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  base: "/teachers-agenda",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
