// Script that reads a file and prints the number of students and their names by field

const fs = require('fs'); // filesystem

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.split('\n').filter((line, index) => line.trim() !== '' && index > 0);

    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (firstname && field) {
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

module.exports = countStudents;
