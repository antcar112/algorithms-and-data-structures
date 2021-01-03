/**
 * Searches an sorted array to find a specific value. The array MUST be sorted.
 *
 * @param {Array<T>} arr The sorted array to search
 * @param {T} val The value to find
 * @returns {number} The first index of the found value, or -1 if value is not found
 */
const binarySearch = (arr, val) => {
  let start = 0
  let end = arr.length - 1
  let mid = Math.ceil((start + end) / 2)

  while (arr[mid] !== val && start <= end) {
    if (arr[mid] > val) {
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.ceil((start + end) / 2)
  }

  return arr[mid] === val ? mid : -1
}

module.exports = { binarySearch }
