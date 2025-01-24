// Script that reads a file asynchronously

const fs = require('fs'); // filesystem

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter((line, index) => line.trim() !== '' && index > 0);
        const fields = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);

        Object.keys(fields).forEach((field) => {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
        resolve(fields);
      }
    });
  });
}

module.exports = countStudents;
