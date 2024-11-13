import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Додано ${number} нових контактів.`);
  } catch (error) {
    console.error('Помилка при генеруванні контактів:', error);
    throw new Error('Не вдалося згенерувати контакти');
  }
};

generateContacts(5);
