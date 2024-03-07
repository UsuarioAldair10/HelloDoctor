import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssCustomProperties from 'postcss-custom-properties'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcssCustomProperties({
      preserve: true,
    }),
  ],
})


