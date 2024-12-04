import express from 'express';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  patchContactCtrl,
  deleteContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { contactSchema, editContactSchema } from '../validation/contact.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();
router.use(authenticate);
// const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsCtrl));
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdCtrl));
router.post(
  '/register',
  validateBody(contactSchema),
  ctrlWrapper(createContactCtrl),
);
router.patch(
  '/:contactId',
  isValidId,
  validateBody(editContactSchema),
  ctrlWrapper(patchContactCtrl),
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactCtrl));

export default router;
