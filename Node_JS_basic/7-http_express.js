// More complex HTTP server using Express

const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const database = process.argv[2]; // Path to the CSV file containing student data
const message = 'This is the list of our students\n';

if (!database) {
  console.error('Error: No database file provided. Please specify the path to the database file.');
  process.exit(1);
}

if (!fs.existsSync(database)) {
  console.error(`Error: Database file not found at path: ${database}`);
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(database);
    let output = message;

    const totalStudents = Object.values(students).flat().length;
    output += `Number of students : ${totalStudents}\n`;

    Object.keys(students).forEach((field) => {
      output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
    });
    res.satus(200).send(output);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send(`${message}${err.message}`);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
