export class AppError extends Error {
  public readonly name: string;
  public readonly description: string;
  public readonly httpCode: number;

  constructor(name: string, httpCode: number, description: string = '') {
    super(name);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.description = description;
    this.httpCode = httpCode;
  }
}
