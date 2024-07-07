import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  await fs
    .readFile(PATH_DB, 'utf-8')
    .then((data) => [...JSON.parse(data), newContact])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error('Error adding data to a file', error));
};

addOneContact();
