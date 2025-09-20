import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize bundle splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', '@radix-ui/react-separator', '@radix-ui/react-slot', '@radix-ui/react-toggle'],
          cal: ['@calcom/embed-react']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize asset compression
    minify: 'esbuild',
    target: 'es2015'
  },
  // Optimize dev server performance
  server: {
    hmr: {
      overlay: false
    }
  }
})