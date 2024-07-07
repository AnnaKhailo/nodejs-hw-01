import * as fs from 'node:fs/promises';
import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  await fs
    .readFile(PATH_DB, 'utf-8')
    .then((data) => [...JSON.parse(data), ...newContacts])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error('Error adding data to a file', error));
};

generateContacts(5);
