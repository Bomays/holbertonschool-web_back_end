export default function getListStudents() {
  const id = 1;
  const firstName = 'Guillaume';
  const location = 'San Francisco';
  return [
    { id, firstName, location },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
