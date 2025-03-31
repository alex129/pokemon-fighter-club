import { vi } from 'vitest';

beforeAll(() => {
  global.fetch = vi.fn().mockResolvedValue({});
});
