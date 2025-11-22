import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Admin-Dashboard/',   // 👈 তোমার GitHub repo নাম
  plugins: [react()],
})
