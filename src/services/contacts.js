import Contact from '../models/contact.js';

const getAllContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

const addContact = async (contactData) => {
  const newContact = await Contact.create(contactData);
  return newContact;
};

const updateContact = async (contactId, payload) => {
  const updatedContact = await Contact.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      runValidators: true,
    },
  );

  return updatedContact;
};

const deleteContact = async (contactId) => {
  const contact = await Contact.findOneAndDelete({ _id: contactId });
  return contact;
};

export default {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
};
