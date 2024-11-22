export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return Array.isArray(listStudents)
    ? listStudents.filter((student) => student.location === city)
      .map((student) => {
        const gradeValue = newGrades.find((grade) => grade.studentId === student.id);
        return { ...student, grade: gradeValue ? gradeValue.grade : 'N/A' };
      }) : [];
}
