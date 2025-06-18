import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,      // Optional: specify the port
  },
   build: {
    rollupOptions: {
      external: ['lottie-web']
    },
     output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lottie: ['lottie-web'],
          vendor: ['react-router-dom', 'styled-components']
        }
      }
  }
})
