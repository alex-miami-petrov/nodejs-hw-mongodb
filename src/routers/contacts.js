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

const router = express.Router();
// const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsCtrl));
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdCtrl));
router.post('/', validateBody(contactSchema), ctrlWrapper(createContactCtrl));
router.patch('/:contactId', isValidId, ctrlWrapper(patchContactCtrl));
router.delete(
  '/:contactId',
  isValidId,
  validateBody(editContactSchema),
  ctrlWrapper(deleteContactCtrl),
);

export default router;
