const { swap } = require('./utils')

/**
 * Selection sort
 *
 * @param {Array} arr An array to sort
 */
const selectionSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, i, min)
    }
  }

  return arr
}

// const arr1 = [3, 6, 9, 22, 33, 88]
// const arr2 = [1, 2, 3, 7, 4, 9, 10]
// const arr3 = [10000, 9999, 88, -33, 22, 5432, 1337, 42]

// console.log(selectionSort(arr1))
// console.log(selectionSort(arr2))
// console.log(selectionSort(arr3))

module.exports = { selectionSort }
