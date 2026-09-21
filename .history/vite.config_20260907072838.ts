import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// Source - https://stackoverflow.com/a/69628635
// Posted by flydev, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-07, License - CC BY-SA 4.0

function CustomHmr() {
    return {
      name: 'custom-hmr',
      enforce: 'post',
      // HMR
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.json')) {
          console.log('reloading json file...');
  
          server.ws.send({
            type: 'full-reload',          
            path: '*'
          });
        }
      },
    }
}


// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      CustomHmr(),
  ],
  server: {
    port: 8080,
    watch: {
      usePolling: true,
      interval: 100,
    }
  },
})