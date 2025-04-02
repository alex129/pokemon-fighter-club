import { defineConfig } from 'vitest/config';
import path from 'path';
import fs from 'fs';

const getPathsFromTsconfig = () => {
  const tsconfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'tsconfig.json'), 'utf-8')) as {
    compilerOptions?: {
      paths?: Record<string, string[]>;
      baseUrl?: string;
    };
  };

  const aliases = tsconfig.compilerOptions?.paths || {};
  const baseUrl = tsconfig.compilerOptions?.baseUrl || '.';

  return Object.fromEntries(
    Object.entries(aliases).map(([key, values]) => {
      const value = values[0];
      return [key.replace('/*', ''), path.resolve(__dirname, baseUrl, value.replace('/*', ''))];
    }),
  );
};

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['dotenv/config', './tests/vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['src/test', 'src/infrastructure/services'],
    },
    env: {
      PORT: '0',
      AWS_BUCKET_DOCUMENTS_DIR: 'documents',
    },
  },
  resolve: {
    alias: getPathsFromTsconfig(),
  },
});
