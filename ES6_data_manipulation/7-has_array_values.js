export default function hasValuesFromArray(set, array) {
  return Array.isArray(array)
    ? array.every((element) => set.has(element))
    : false;
}
