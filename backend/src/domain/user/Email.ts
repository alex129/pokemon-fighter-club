import { z } from 'zod';
import InvalidEmailError from './errors/InvalidEmailError';

export default class Email {
  private readonly value: string;

  constructor(email: string) {
    if (!this.isValidEmail(email)) {
      throw new InvalidEmailError();
    }

    this.value = email;
  }

  getValue() {
    return this.value;
  }

  private isValidEmail(email: string) {
    const emailSchema = z.string().email();

    return emailSchema.safeParse(email).success;
  }
}
