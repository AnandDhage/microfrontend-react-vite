import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    federation({
      name: 'sidebar',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: {
          requiredVersion: '^18.3.1',
          generate: true,
          import: true,
        },
        'react-dom': {
          requiredVersion: '^18.3.1',
          generate: true,
          import: true,
        },
        'react-router-dom': {
          requiredVersion: '^6.23.1',
          generate: true,
          import: true,
        },
        'reactflow': {
          version: '^11.11.3',
          generate: true,
          import: true,
        }
      },
      mode: 'esm'
    })
  ],
  optimizeDeps: {
    include: ['reactflow']
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
        include: [/node_modules/],
        strictRequires: false,
        transformMixedEsModules: false,
    },
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  server: {
    port: 3005,
    cors: true,
  }
});