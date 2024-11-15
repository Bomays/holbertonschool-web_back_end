export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /* prefered Symbol.toPrimitive single method than valueOf()
  and toString() for a better conversion control */

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }

    if (hint === 'string') {
      return this._location;
    }

    return this;
    // return object itself for other types
  }
}
