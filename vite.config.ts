import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/vite-project/' : '/', // В dev-режиме base = '/'
}));