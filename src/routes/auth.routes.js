import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/signup/:employeeId', authController.signUp);
router.post('/signin', authController.signIn);

export default router;
