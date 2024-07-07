import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parsedData = JSON.parse(data);
    if (parsedData.length > 0) {
      parsedData.pop();
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(parsedData, undefined, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error deleting data from a file', error);
  }
};

removeLastContact();
