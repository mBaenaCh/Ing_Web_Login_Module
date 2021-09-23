import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { decryptToken } from '../middlewares/token.middleware';

const router = Router();

router.get('/verifytoken', decryptToken, authController.verifyTokenController);
router.post('/signup/:employeeId', authController.signUp);
router.post('/signin', authController.signIn);
router.post('/generateguesttoken', authController.generateGuestToken);

export default router;
