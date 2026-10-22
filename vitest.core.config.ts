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
    include: ['src/models/services/__tests__/recovered-lesson-reset.spec.ts', 'src/models/services/__tests__/scheduling-and-salary.spec.ts', 'src/models/services/__tests__/student-absence-summary.spec.ts', 'src/models/services/__tests__/student-archiving.spec.ts', 'src/models/services/__tests__/orphaned-lessons.spec.ts', 'src/models/__tests__/biweekly-lessons.spec.ts', 'src/models/__tests__/recital-pieces.spec.ts', 'src/models/__tests__/month-period.spec.ts', 'src/models/__tests__/student-lesson-history.spec.ts'],
    setupFiles: ['./src/plugins/firebase/vitest.core.setup.ts'],
  },
})
