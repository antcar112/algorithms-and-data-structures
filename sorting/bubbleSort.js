const { swap } = require('./helpers.js')

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

module.exports = bubbleSort
