export default function createEmployeesObject(appendString, array) {
  const employeesObject = { [appendString]: array };

  return employeesObject;
}
