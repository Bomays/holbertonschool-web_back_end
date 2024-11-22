export default function getStudentsByLocation(ListStudentsByLocation) {
  return Array.isArray(ListStudentsByLocation)
    ? ListStudentsByLocation.filter(
      (student) => student.location === 'San Francisco',
    )
    : [];
}
