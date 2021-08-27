import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { decryptToken } from '../middlewares/token.middleware';

const router = Router();

router.post('/signup/:employeeId', decryptToken, authController.signUp);
router.post('/signin', authController.signIn);

export default router;
