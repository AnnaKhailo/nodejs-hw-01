import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  const countOfContacts = await fs
    .readFile(PATH_DB, 'utf-8')
    .then((data) => [...JSON.parse(data)].length)
    .catch((error) => console.error('Error counting data in a file', error));
  return countOfContacts;
};

console.log(await countContacts());
