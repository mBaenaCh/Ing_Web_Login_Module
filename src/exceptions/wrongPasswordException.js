import BaseException from './baseException';

class WrongPasswordException extends BaseException {
  constructor(message) {
    super(message, 400);
  }
}

export default WrongPasswordException;
