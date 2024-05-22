import { Router } from 'express';
import { register, login, logout } from '../../controllers/auth.controller';
import { body } from 'express-validator';

const router = Router();

router.post(
  '/register',
  body('username').isString(),
  body('password').isLength({ min: 6 }),
  register
);

router.post(
  '/login',
  body('username').isString(),
  body('password').isString(),
  login
);

router.post('/logout', logout);
export default router;
