import contactService from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContacts = async (req, res) => {
  const contacts = await contactService.getAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res) => {
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
