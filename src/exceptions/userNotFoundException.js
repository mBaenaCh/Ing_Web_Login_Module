import BaseException from './baseException';

class UserNotFoundException extends BaseException {
  constructor(message) {
    super(message, 400);
  }
}

export default UserNotFoundException;
