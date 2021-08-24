import BaseException from './baseException';

class EmptyFieldException extends BaseException {
  constructor(message) {
    super(message, 400);
  }
}

export default EmptyFieldException;
