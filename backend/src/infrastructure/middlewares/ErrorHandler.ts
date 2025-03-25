import { handler } from '@/domain/shared/ErrorHandler';
import { AppError } from '@/domain/shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const errorHandler = (err: AppError, _req: Request, res: Response, next: NextFunction) => {
  handler.handleError(err);
  if (!err) {
    return next();
  }

  res.status(err.httpCode ?? httpStatus.SERVICE_UNAVAILABLE).send({ name: err.name, message: err.description });
};

export default errorHandler;
