import { readContacts } from '../utils/readContacts.js';
import * as fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts.length;
  } catch (error) {
    console.error('Couldn`t count contacts', error);
    throw new Error('Не вдалось порахувати контакти');
  }
};

countContacts()
  .then((count) => {
    console.log(`Кількість контактів: ${count}`);
  })
  .catch((error) => {
    console.error(error);
  });
