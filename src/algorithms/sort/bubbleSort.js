const { swap } = require('./utils')

/**
 * Bubble sort
 *
 * @param {Array} arr An array to sort
 */
const bubbleSort = (arr) => {
  let noSwaps = false

  for (let i = arr.length; i > 0 && !noSwaps; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
  }

  return arr
}

// const arr1 = [4, 2, 6, 1]
// const arr2 = [1, 30, 2, 99, 5, 63, 7, 18]
// const arr3 = [10000, 9999, 88, -33, 22, 5432, 1337, 42]

// console.log(bubbleSort(arr1))
// console.log(bubbleSort(arr2))
// console.log(bubbleSort(arr3))

module.exports = { bubbleSort }
