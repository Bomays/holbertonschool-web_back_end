export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('The "name" must be a string');
    }
  }

  // length getter
  get length() {
    return this._name;
  }

  // length setter
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('The "length" must be a number');
    }
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(value) {
    if (typeof Array.value === 'string') {
      this._students = value;
    } else {
      throw new TypeError('The "students" must be  an array of strings');
    }
  }
}
