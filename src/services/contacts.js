import Contact from '../contact.js';

const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (error) {
    throw new Error('Error retrieving contacts');
  }
};

export default { getAllContacts };
