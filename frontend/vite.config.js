import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust this if your app is hosted in a subdirectory
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API calls during development
      '/api': {
        target: process.env.NODE_ENV === 'production'
          ? 'https://eazypg-backend.onrender.com' // Deployed backend URL
          : 'http://localhost:8000', // Local backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
