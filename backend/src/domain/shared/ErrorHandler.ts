class ErrorHandler {
  public async handleError(error: Error): Promise<void> {
    console.log(error.message);
  }
}

export const handler = new ErrorHandler();
