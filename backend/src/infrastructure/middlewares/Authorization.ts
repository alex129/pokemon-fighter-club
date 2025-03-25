// import { Config } from '@/config';
// import { Nullable } from '@/domain/shared/Nullable';
// import User, { UserContract, UserRoles } from '@/domain/user/User';
// import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// import jwt from 'jsonwebtoken';

// const authorization =
//   (role: Nullable<UserRoles> = null) =>
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     const token = req.cookies.access_token;
//     if (!token) {
//       res.sendStatus(httpStatus.UNAUTHORIZED);
//     } else {
//       try {
//         const data = jwt.verify(token, Config.APP_KEY) as UserContract;

//         if (role && data.role !== role) {
//           res.sendStatus(httpStatus.UNAUTHORIZED);
//         } else {
//           res.locals.user = new User(data);
//           next();
//         }
//       } catch {
//         res.clearCookie('access_token').sendStatus(httpStatus.UNAUTHORIZED);
//       }
//     }
//   };

// export default authorization;
