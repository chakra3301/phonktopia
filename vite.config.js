import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'assets',
  base: '/Phonkweb-2/',
  server: {
    port: 3000,
    open: true
  }
}); 