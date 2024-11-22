export default function createInt8TypedArray(length, position, value) {
  const Int8TypedArray = new Int8Array(length);
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  Int8TypedArray[position] = value;
  return Int8TypedArray;
}
