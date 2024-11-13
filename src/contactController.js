import contactService from './contact.js';

const getContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Failed to retrieve contacts',
    });
  }
};

export default { getContacts };
