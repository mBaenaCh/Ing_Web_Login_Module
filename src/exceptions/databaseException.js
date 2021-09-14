import BaseException from './baseException';

class DatabaseException extends BaseException {
  constructor(message) {
    super(message, 500);
  }
}

export default DatabaseException;
