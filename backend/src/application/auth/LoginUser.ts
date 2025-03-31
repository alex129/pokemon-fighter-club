import { AuthService } from '@/domain/user/contracts/AuthService';
import { Nullable } from '@/domain/shared/Nullable';
import { AppError } from '@/domain/shared/errors/AppError';
import httpStatus from 'http-status';

export class LoginUser {
  constructor(private readonly authService: AuthService) {}

  async run(email: string, password: string): Promise<Nullable<string>> {
    if (!email || !password) {
      throw new AppError('Email and password are required', httpStatus.BAD_REQUEST);
    }

    const token = await this.authService.login(email, password);

    if (!token) {
      throw new AppError('Invalid credentials', httpStatus.UNAUTHORIZED);
    }

    return token;
  }
}
