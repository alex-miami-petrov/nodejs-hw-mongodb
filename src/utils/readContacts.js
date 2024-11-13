// import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

// export const PATH_DB = path.resolve('src', 'db', 'db.json');

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts', error);
    throw new Error('Не вдалося зчитати контакти');
  }
};
