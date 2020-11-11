/**
 * Insertion sort
 *
 * Time complexity: O(n) (best) - O(n²) (avg, worst)
 * Space complexity: O(1)
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i]

    let j = i - 1
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j--]
    }
    arr[j + 1] = currentValue
  }

  return arr
}

module.exports = insertionSort
