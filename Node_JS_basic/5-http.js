// Script to create an HTTP server

// student list file import
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2]; // Path to the CSV file containing student data
    if (!database) {
      res.end('CSV file path not provided');
      return;
    }

    const message = 'This is the list of our students\n';
    countStudents(database) // call async func
      .then((fields) => {
        let output = message;
        let totalStudents = 0;

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            totalStudents += fields[field].length;
            output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }

        output = `Number of students: ${totalStudents}\n` + output;
        res.end(output);
      })
      .catch((err) => {
        res.end(`${message}${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
