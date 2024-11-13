import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      contacts.pop();

      await writeContacts(contacts);

      console.log('Останній контакт був успішно видалений.');
    } else {
      console.log('Масив контактів порожній.');
    }
  } catch (error) {
    console.error("Couldn't delete last contact", error);
    throw new Error('Не вдалося видалити останній контакт');
  }
};

removeLastContact();
