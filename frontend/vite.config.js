import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Don't forget to import path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Enables @/ imports
      '@data': path.resolve(__dirname, './src/data') // Specific data alias
    }
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})