import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'assets',
  base: '/phonktopia/',
  server: {
    port: 3000,
    open: true
  }
}); 