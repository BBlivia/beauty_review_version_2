import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 
  server: {
    proxy: {
      "/api/v2/user":  "http://localhost:2021/"
     
       
      
      
    },
  },
  plugins: [react()]
})
