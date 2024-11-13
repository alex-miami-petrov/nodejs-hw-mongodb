// import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

// export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Не вдалося записати контакти.');
  }
};
