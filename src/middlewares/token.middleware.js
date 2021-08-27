import expressJwt from 'express-jwt';
import { JWT_SECRET } from '../config';

export const decryptToken = expressJwt({
  secret: 'nursery_pet-api',
  algorithms: ['HS256'],
  userProperty: 'auth',
});
