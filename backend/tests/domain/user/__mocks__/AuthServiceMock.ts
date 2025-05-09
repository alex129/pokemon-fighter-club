import { AuthService } from '@/domain/user/contracts/AuthService';
import { vi } from 'vitest';
import { Nullable } from '@/domain/shared/Nullable';

export default class AuthServiceMock implements AuthService {
  loginMock = vi.fn();

  async login(email: string, password: string): Promise<Nullable<string>> {
    return this.loginMock(email, password);
  }
}
