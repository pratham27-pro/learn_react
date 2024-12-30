import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust this if your app is hosted in a subdirectory
  build: {
    outDir: 'dist', // Ensure this matches your Render settings
  },
  plugins: [react()],
  server: {
    sourcemap: true, // Ensure source maps are enabled
  },
  build: {
    sourcemap: true, // Enable source maps for production if needed
  }
})
