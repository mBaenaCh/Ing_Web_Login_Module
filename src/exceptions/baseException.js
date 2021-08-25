class BaseException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  getErrorMessage = () => this.message;

  getStatusCode = () => this.statusCode;
}

export default BaseException;
