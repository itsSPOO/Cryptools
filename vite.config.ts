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
        // Aggressive code splitting for better mobile performance
        manualChunks: (id) => {
          // React core - critical
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react';
          }
          // Router - load on demand
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router';
          }
          // Lucide icons - lazy load
          if (id.includes('node_modules/lucide-react/')) {
            return 'icons';
          }
          // Other vendor libraries
          if (id.includes('node_modules/zustand/') || id.includes('node_modules/react-helmet-async/')) {
            return 'vendor';
          }
          // Split each tool component into its own chunk for lazy loading
          if (id.includes('src/components/tools/') && !id.includes('node_modules')) {
            const toolName = id.split('src/components/tools/')[1]?.split('/')[0];
            if (toolName) {
              return `tool-${toolName}`;
            }
          }
          // Other node_modules into vendor-misc
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
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
