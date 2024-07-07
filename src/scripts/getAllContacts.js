import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const allContacts = await fs
    .readFile(PATH_DB, 'utf-8')
    .then((data) => [...JSON.parse(data)])
    .catch((error) => console.error('Error receiving data from a file', error));
  return allContacts;
};

console.log(await getAllContacts());
