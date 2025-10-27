import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import { visualizer } from 'rollup-plugin-visualizer'; // Optional: Install rollup-plugin-visualizer for bundle analysis

export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer for production (optional, comment out if not needed)
    // visualizer({ open: false, filename: 'dist/stats.html' })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production
    minify: 'terser',
    cssMinify: true,
    cssCodeSplit: true, // Enable CSS code splitting
    reportCompressedSize: true,
    terserOptions: {
      compress: {
        drop_console: false, // Keep console for error reporting
        drop_debugger: true,
        passes: 2, // Multiple passes for better compression
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    rollupOptions: {
      output: {
        // Optimize chunk naming for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Conservative code splitting to avoid dependency issues
        manualChunks: {
          // Keep React ecosystem together
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          // Router in separate chunk
          'router': ['react-router-dom'],
          // Icons can be lazy loaded
          'icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 500, // Lower threshold for mobile
    assetsInlineLimit: 2048, // Inline smaller assets only (2KB) for mobile
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'zustand'],
  },
});
