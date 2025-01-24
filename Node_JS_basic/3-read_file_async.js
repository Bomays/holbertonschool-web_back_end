// Script that reads a file asynchronously

const fs = require('fs'); // filesystem

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter((line) => line.trim() !== '');
        const fields = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List:`);
            console.log(fields[field].join(', '));
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
