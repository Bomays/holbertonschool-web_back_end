export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter code
  get code() {
    return this._code;
  }

  // setter code
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // getter name
  get name() {
    return this._name;
  }

  // setter name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // displayFullCurrency method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
