import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginLinaria from 'vite-plugin-linaria'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginLinaria()]
})
