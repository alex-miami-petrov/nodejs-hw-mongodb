import { readContacts } from '../utils/readContacts.js';
import * as fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts;
  } catch (error) {
    console.error('Помилка при читанні контакту з файлу:', error);
    throw new Error('Не вдалося отримати контакти');
  }
};

console.log(await getAllContacts());
