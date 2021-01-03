/**
 * Searches an array to find a specific value.
 *
 * @param {Array<T>} arr The array to search
 * @param {T} val The value to find
 * @returns {number} The first index of the found value, or -1 if value is not found
 */
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

module.exports = {
  linearSearch,
}
