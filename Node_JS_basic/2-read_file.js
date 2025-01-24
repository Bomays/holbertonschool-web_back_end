// Script that reads a file and prints the number of students and their names by field

import { readFileSync } from 'fs'; // filesystem node module

function countStudents(path) {
  try {
    const data = readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');;
    const students = lines.slice(1);

    const fields = {};
    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      if (field && field.trim()) {
        if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  });

    console.log(`Number of students: ${students.length}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default countStudents;
