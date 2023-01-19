/// <reference types="vitest" />
import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config
export default ({ mode }) => defineConfig({
  root: './app', // Run with `app` as root, so that files like `index.html` are by default referenced from there
  build: {
    outDir: '../docs',
  },
  publicDir: './public',
  
  plugins: [react()],
  
  resolve: {
    alias: {
      '@roche-sdk': path.resolve(__dirname, './src/sdk/roche'),
    },
  },
  
  define: {
    // Workaround for a library referencing `global`. Note: this seems to only be an issue in the dev server.
    ...(mode === 'development' ? { global: {} } : {}),
  },
  
  server: {
    proxy: {
      '/api': {
        target: 'https://sdkms.test.fortanix.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    }
  },
  
  test: {
    deps: {
      interopDefault: true, // CommonJS import interop
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
