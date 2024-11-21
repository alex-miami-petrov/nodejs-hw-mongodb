import Contact from '../models/contact.js';

const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (error) {
    throw new Error('Error retrieving contacts');
  }
};

const getContactById = async (contactId) => {
  try {
    const contact = await Contact.findById(contactId);
    return contact;
  } catch (error) {
    throw new Error('Error retrieving contact');
  }
};

const addContact = async (contactData) => {
  try {
    const newContact = await Contact.create(contactData);
    return newContact;
  } catch (error) {
    throw new Error('Error creating contact');
  }
};

const updateContact = async (contactId, payload, options = {}) => {
  const updatedContact = await Contact.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      runValidators: true,
      ...options,
    },
  );

  if (!updatedContact) return null;

  return {
    contact: updatedContact,
  };
};

export default { getAllContacts, getContactById, addContact, updateContact };
