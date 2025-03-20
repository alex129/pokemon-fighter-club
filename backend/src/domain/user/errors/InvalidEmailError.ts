import { AppError } from '@/domain/shared/errors/AppError';
import httpStatus from 'http-status';

export default class InvalidEmailError extends AppError {
  constructor() {
    super('Invalid email', httpStatus.BAD_REQUEST);
  }
}
