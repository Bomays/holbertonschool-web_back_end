export default function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents)) {
    return 0;
  }
  const sumSudentIds = (accumulator, student) => accumulator + student.id;
  return listStudents.reduce(sumSudentIds, 0);
}
