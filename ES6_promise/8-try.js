export default function divideFunction(numerator, denominator) {
  const a = numerator;
  const b = denominator;

  if (b === 0) {
    throw new Error('cannot divide by 0');
  }
  return a / b;
}
