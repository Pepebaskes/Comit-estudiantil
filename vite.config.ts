import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  // 👇 nombre EXACTO del repo en GitHub
  base: '/Comit-estudiantil/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',   // 👈 debe coincidir con el script de deploy
  },
  server: {
    port: 3000,
    open: true,
  },
});
