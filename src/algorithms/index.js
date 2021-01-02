const { fibonacci } = require('./math')
const {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
  selectionSort,
} = require('./sort')
const { removeConsecChars } = require('./string')
const { breadthFirstSearch, depthFirstSearch } = require('./tree')

module.exports = {
  // math
  fibonacci,

  // sort
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
  selectionSort,

  // string
  removeConsecChars,

  // tree
  breadthFirstSearch,
  depthFirstSearch,
}
