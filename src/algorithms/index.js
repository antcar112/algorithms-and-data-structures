const {
  breadthFirstTraversal,
  depthFirstTraversal,
  depthFirstTraversalIterative,
} = require('./graph')
const { fibonacci } = require('./math')
const { binarySearch, linearSearch, naiveStringSearch } = require('./search')
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
  // graph
  breadthFirstTraversal,
  depthFirstTraversal,
  depthFirstTraversalIterative,

  // math
  fibonacci,

  // search
  binarySearch,
  linearSearch,
  naiveStringSearch,

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
