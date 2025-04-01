import { LoginUser } from '@/application/auth/LoginUser';
import { AppError } from '@/domain/shared/errors/AppError';
import AuthServiceMock from '@tests/domain/user/__mocks__/AuthServiceMock';

describe('LoginUser', () => {
  let authService: AuthServiceMock;
  let loginUser: LoginUser;

  beforeEach(() => {
    authService = new AuthServiceMock();
  });

  test('should throw an error if email is not provided', async () => {
    loginUser = new LoginUser(authService);
    await expect(loginUser.run('', 'password')).rejects.toThrowError(AppError);
  });

  test('should throw an error if password is not provided', async () => {
    loginUser = new LoginUser(authService);
    await expect(loginUser.run('email@email.com', '')).rejects.toThrowError(AppError);
  });

  test('should throw an error if token returned is not valid', async () => {
    authService.loginMock.mockResolvedValue(null);
    loginUser = new LoginUser(authService);
    await expect(loginUser.run('valid_email', 'valid_password')).rejects.toThrowError(AppError);
  });

  test('should return a token if credentials are valid', async () => {
    authService.loginMock.mockResolvedValue('valid_token');
    loginUser = new LoginUser(authService);
    const token = await loginUser.run('valid_email', 'valid_password');
    expect(token).toBe('valid_token');
  });
});
