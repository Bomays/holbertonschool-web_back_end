// Script that reads a file and prints the number of students and their names by field

const fs = require('fs'); // filesystem

function countStudents(path) {
  try {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error('Cannot load the database');
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        console.error('Cannot load the database');
        return;
      }
      const students = lines.slice(1);
      const fields = {};

      students.forEach((line) => {
        const parts = line.split(',');
        if (parts.length >= 4) {
          const [firstname, , , field] = parts;
          if (firstname && field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      });

      console.log(`Number of students: ${students.length}`);

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
