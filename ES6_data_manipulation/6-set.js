export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return Array.from(new Set(array));
}
