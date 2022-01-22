export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
//Code adapted from Ege Özcan: Sort array of objects by string property value.
// Available at: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
