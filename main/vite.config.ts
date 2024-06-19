import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    federation({
      name: 'main',
      remotes: {
        sidebar: 'http://localhost:3005/assets/remoteEntry.js',
        header: 'http://localhost:3006/assets/remoteEntry.js',
        // reactflow: 'http://localhost:3007/assets/remoteEntry.js',
      },
      shared: {
        react: {
          version: '^18.3.1',
          generate: true,
          import: true,
        },
        'react-dom': {
          version: '^18.3.1',
          generate: true,
          import: true,
        },
        'react-router-dom': {
          version: '^6.23.1',
          generate: true,
          import: true,
        }
      },
      mode: 'esm'
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3004,
    cors: true,
  }
});