// Students controller classes

import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const { students, fields } = data;
        res.write('This is the list of our students\n');
        fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        fields.forEach((field) => {
          const studentsInField = students.filter((student) => student.field === field)
            .map((student) => student.firstname);
          res.write(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`);
        });
        res.status(200).end();
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const { students } = data;
        const { major } = req.params;
        if (!['CS', 'SWE'].includes(major)) {
          res.status(500).send('Major parameter must be CS or SWE');
          return;
        }
        const studentsByMajor = students.filter((student) => student.field === major)
          .map((student) => student.firstname);
        res.status(200).send(`List: ${studentsByMajor.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
