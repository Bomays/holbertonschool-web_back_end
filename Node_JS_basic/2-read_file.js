// Script that reads a file and prints the number of students and their names by field

const fs = requires ('fs'); // filesystem node module

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      console.error('Cannot load the database');
      return;
    }

    const students = lines.slice(1).filter((line) => line.trim() !== '');

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
  } catch (error) {
    console.error(error.message);
    throw new Error('Cannot load the database');
  }
}

export default countStudents;
