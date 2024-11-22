export default function getListStudentsIds(ListStudents) {
  return Array.isArray(ListStudents)
    ? ListStudents.map((student) => student.id)
    : [];
}
