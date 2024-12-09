import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  registerUserCtrl,
  loginUserCtrl,
  refreshSessionCtrl,
  logoutUserCtrl,
  requestResetEmailCtrl,
  resetPasswordCtrl,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserCtrl),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserCtrl),
);

router.post('/refresh', ctrlWrapper(refreshSessionCtrl));

router.post('/logout', ctrlWrapper(logoutUserCtrl));

router.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailCtrl),
);

router.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordCtrl),
);

export default router;
