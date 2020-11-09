import { swap } from './helpers'

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

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
