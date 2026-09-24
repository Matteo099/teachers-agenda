import { vi } from 'vitest'

vi.mock('vuefire', () => ({
  useCurrentUser: () => ({ value: { uid: 'test-user' } }),
  useFirestore: vi.fn(),
}))
