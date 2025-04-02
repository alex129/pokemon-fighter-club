import { LoginUser } from '@/application/auth/LoginUser';
import { Config } from '@/config';
import { AuthService } from '@/domain/user/contracts/AuthService';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export class LoginController {
  private readonly loginUser: LoginUser;

  constructor(authService: AuthService) {
    this.loginUser = new LoginUser(authService);
  }

  run = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const token = await this.loginUser.run(email, password);

      const isProduction = Config.NODE_ENV === 'production';
      const secure = isProduction;

      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure,
          domain: Config.COOKIE_DOMAIN,
          sameSite: 'lax',
          maxAge: 3600 * 1000,
        })
        .status(httpStatus.OK)
        .json({ message: 'Logged in successfully 😊 👌' });
    } catch (error) {
      next(error);
    }
  };
}
