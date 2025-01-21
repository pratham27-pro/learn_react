import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust this if your app is hosted in a subdirectory
  build: {
    outDir: 'dist', 
    sourcemap: true,
  },
  plugins: [react()],
  server: {
    sourcemap: true, // Ensure source maps are enabled for the deployment
    target: process.env.NODE_ENV === 'production' 
          ? 'https://eazypg-backend.onrender.com'  // Deployed backend URL on Render
          : 'http://localhost:8000',  
  }
})
