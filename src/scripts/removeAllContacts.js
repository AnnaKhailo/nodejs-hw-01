import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  await fs
    .writeFile(PATH_DB, '[]', 'utf-8')
    .then(console.log('Contacts are deleted'))
    .catch((error) => console.error('Error deleting data from a file', error));
};

removeAllContacts();
