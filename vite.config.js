import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base ("./") makes the built site work both at a domain root
// (Vercel) and under a repo subpath (GitHub Pages) without extra config.
export default defineConfig({
  plugins: [react()],
  base: './',
})
