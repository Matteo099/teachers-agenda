import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/models/services/__tests__/scheduling-and-salary.spec.ts', 'src/models/__tests__/biweekly-lessons.spec.ts', 'src/models/__tests__/recital-pieces.spec.ts'],
    setupFiles: ['./src/plugins/firebase/vitest.core.setup.ts'],
  },
})
