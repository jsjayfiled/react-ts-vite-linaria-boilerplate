import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginLinaria from '@linaria/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginLinaria()]
})
