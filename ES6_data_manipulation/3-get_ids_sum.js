export default function getStudentIdsSum(listStudents) {
  return Array.isArray(listStudents)
    ? listStudents.reduce(
      (sum, student) => sum + student.id, 0,
    )
    : 0;
}
