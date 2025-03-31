import { AuthService } from '@/domain/user/contracts/AuthService';
import { vi } from 'vitest';

export default class AuthServiceMock implements AuthService {
  login = vi.fn();
}
