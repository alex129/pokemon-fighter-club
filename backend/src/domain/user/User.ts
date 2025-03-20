import Serializable from '../shared/Serializable';
import Email from './Email';

export default class User implements Serializable {
  readonly emailValue: Email;
  password: string;

  constructor(email: string, password: string) {
    this.emailValue = new Email(email);
    this.password = password;
  }

  get email() {
    return this.emailValue.getValue();
  }

  json(): unknown {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
