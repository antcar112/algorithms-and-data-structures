const { swap } = require('./helpers.js')

const pivot = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  let swapIndex = startIndex

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[startIndex] > arr[i]) {
      swap(arr, ++swapIndex, i)
    }
  }

  swap(arr, swapIndex, startIndex)
  return swapIndex
}

/**
 * Quick sort
 *
 * Time complexity: O(n log n) (best, avg) - O(n²) (worst)
 * Space complexity: O(n log n)
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1) // left subarray
    quickSort(arr, pivotIndex + 1, right) // right subarray
  }
  return arr
}

module.exports = quickSort
