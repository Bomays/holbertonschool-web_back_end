// More complex HTTP server using Express

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const database = process.argv[2]; // Path to the CSV file containing student data

const message = 'This is the list of our students\n';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const students = await countStudents(database);
    let output = message;

    const totalStudents = Object.values(students).flat().length;
    output += `Number of students: ${totalStudents}\n`;

    Object.keys(students).forEach((field) => {
      output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
    });
    res.status(200).send(output);
  } catch (err) {
    console.error(err);
    res.status(500).send(`${message}${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
