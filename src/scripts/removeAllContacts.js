import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      await writeContacts([]);
      console.log('Всі контакти були видалені.');
    } else {
      console.log('Файл вже порожній.');
    }
  } catch (error) {
    console.error("Couldn't remove contacts", error);
    throw new Error('Не вдалося видалити контакти');
  }
};

removeAllContacts()
  .then(() => {
    console.log('Операція завершена');
  })
  .catch((error) => {
    console.error(error);
  });
