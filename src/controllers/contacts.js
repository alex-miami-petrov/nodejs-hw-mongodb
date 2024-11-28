import contactService from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseContactFilterParams } from '../utils/parseFilterParams.js';

export const getContactsCtrl = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const { sortBy, sortOrder } = parseSortParams(req.query);

  const filter = parseContactFilterParams(req.query);

  const contacts = await contactService.getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdCtrl = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactService.getContactById(contactId);

  if (!contact) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactCtrl = async (req, res) => {
  const contactData = req.body;
  const newContact = await contactService.addContact(contactData);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

export const patchContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contactService.updateContact(
    contactId,
    req.body,
  );

  if (!updatedContact) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully patched contact with id ${contactId}!`,
    data: updatedContact,
  });
};

export const deleteContactCtrl = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactService.deleteContact(contactId);

  if (!contact) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.send({ status: 204, message: 'Contact successfully deleted' });
};
