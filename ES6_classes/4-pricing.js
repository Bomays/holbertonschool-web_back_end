import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter code
  get amount() {
    return this._amount;
  }

  // setter code
  set amount(value) {
    if (typeof value === "number") {
      this._amount = value;
    } else {
      throw new TypeError("Amount must be a string");
    }
  }

  // getter name
  get currency() {
    return this._currency;
  }

  // setter name
  set currency(value) {
    if (currency instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError("Currency must be an instance of Currency class");
    }
  }

  // displayFullPrice method
  displayFullPrice() {
    return `{this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  //static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
