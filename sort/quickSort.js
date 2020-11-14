const { swap } = require('./utils')

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
 * @param {Array} arr An array to sort
 * @param {number=} left The index to start sort from
 * @param {number=} right The index to sort to
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1) // left subarray
    quickSort(arr, pivotIndex + 1, right) // right subarray
  }
  return arr
}

// const arr1 = [4, 2, 6, 1]
// const arr2 = [1, 30, 2, 99, 5, 63, 7, 18]
// const arr3 = [8, 1, 16, 3, 9, 5, 6, 7]

// console.log(quickSort(arr1))
// console.log(quickSort(arr2))
// console.log(quickSort(arr3))

module.exports = quickSort
