// script to read the database

import { promises as fs } from 'fs'; // filesystem module

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n'); // split the data into lines
    const fields = lines[0].split(','); // get the fields
    const students = lines.slice(1).map((line) => { // get the students
      const [firstname, field] = line.split(','); // split the line into firstname and field
      return { firstname, field };
    });
    return { students, fields };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
