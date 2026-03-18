import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, '')
  const port = Number(env.VITE_PORT || 5173)
  const shouldOpen = env.VITE_OPEN === 'true'
  const isProd = mode === 'production'
  const apiTarget = env.VITE_API_BASE_URL || 'http://localhost:3000'
  const shouldAnalyze = env.VITE_VISUALIZER === 'true'

  return {
    plugins: [
      react(),
      viteCompression({
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      shouldAnalyze &&
        visualizer({
          filename: 'dist/stats.html',
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(rootDir, 'src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    server: {
      host: '0.0.0.0',
      port,
      open: shouldOpen,
      strictPort: false,
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      host: '0.0.0.0',
      port: port + 1,
    },
    css: {
      devSourcemap: !isProd,
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "@/styles/variables.less";\n@import "@/styles/mixins.less";`,
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'axios', 'zustand'],
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
    },
    build: {
      target: 'es2018',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: !isProd,
      minify: 'esbuild',
      cssCodeSplit: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (!name) return 'assets/[name]-[hash][extname]'

            if (/\.(png|jpe?g|svg|gif|webp|ico)$/i.test(name)) {
              return 'assets/images/[name]-[hash][extname]'
            }

            if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) {
              return 'assets/fonts/[name]-[hash][extname]'
            }

            if (/\.(css|less)$/i.test(name)) {
              return 'assets/styles/[name]-[hash][extname]'
            }

            return 'assets/[name]-[hash][extname]'
          },
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined
            if (id.includes('@tanstack/react-query')) return 'query'
            if (id.includes('axios')) return 'axios'
            return 'vendor'
          },
        },
      },
    },
  }
})
