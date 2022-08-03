import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://kaushalluffa.github.io/trivia",
  plugins: [react()]
})
