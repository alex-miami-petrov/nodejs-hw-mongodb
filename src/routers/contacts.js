import express from 'express';
import {
  getContactsCtrl,
  getContactByIdCtrl,
  createContactCtrl,
  patchContactCtrl,
  deleteContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();
// const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsCtrl));
router.get('/:contactId', ctrlWrapper(getContactByIdCtrl));
router.post('/', ctrlWrapper(createContactCtrl));
router.patch('/:contactId', ctrlWrapper(patchContactCtrl));
router.delete('/:contactId', ctrlWrapper(deleteContactCtrl));

export default router;
