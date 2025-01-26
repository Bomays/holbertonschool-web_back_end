// HTTP server using Express

import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const router = express.Router();

// app controller
router.get('/', AppController.getHomepage);

// students controller
router.get('/students', StudentController.getAllStudents);

// major controller filter
router.get('/students/:major', StudentController.getAllStudentsByMajor);

export default router;
