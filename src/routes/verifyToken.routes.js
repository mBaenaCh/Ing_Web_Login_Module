import { Router } from 'express';
import { decryptToken } from '../middlewares/token.middleware';
import { verifyTokenController } from '../controllers/verifyToken.controller';

const router = Router();

router.get('/', decryptToken, verifyTokenController);

export default router;
