import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{allowedHosts:["5173-gokul005-bit-sample-repo-0vt7crocya.app.codeanywhere.com"]},
  plugins: [react(), tailwindcss(),],
})
//5173-gokul005-bit-sample-repo-0vt7crocya.app.codeanywhere.com