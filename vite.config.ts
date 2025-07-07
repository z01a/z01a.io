import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import pkg from './package.json'
import { execSync } from 'node:child_process'

// https://vite.dev/config/
export default defineConfig(() => {
  const appVersion = pkg.version || "0.0.0";
  const commitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim() || "unknown";

  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    define: {
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(appVersion),
      'import.meta.env.VITE_COMMIT_HASH': JSON.stringify(commitHash)
    },
  }
})
