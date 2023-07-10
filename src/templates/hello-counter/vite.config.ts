import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format: string) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      outDir: './dist'
    },
    plugins: [qwikVite(), dts()],
  };
});
