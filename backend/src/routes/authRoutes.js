import express from 'express';
import { body } from 'express-validator';
import { authController } from '../controllers/authController.js';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('firstName').trim().notEmpty(),
    body('lastName').trim().notEmpty(),
    validateRequest
  ],
  authController.register
);

router.post('/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
    validateRequest
  ],
  authController.login
);

export default router;