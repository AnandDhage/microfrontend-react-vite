import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    federation({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: {
          requiredVersion: '^18.0.0',
          generate: true,
        },
        'react-dom': {
          requiredVersion: '^18.0.0',
          generate: true,
        },
        'react-router-dom': {
          requiredVersion: '^6.3.0',
          generate: true,
        }
      }
    })
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3006,
    cors: true,
  }
});