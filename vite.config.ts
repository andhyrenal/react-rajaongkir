import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "",
  server: {
    proxy: {
      "/api": {
        target: "https://rajaongkir.komerce.id/api/v1/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  }
})
