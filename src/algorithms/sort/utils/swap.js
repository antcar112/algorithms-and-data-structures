/**
 * Swap two elements in an array using ES6 syntax
 */
const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

/**
 * Swap two elements in an array using traditional method
 */
// const swapOld = (arr, idx1, idx2) => {
//   const temp = arr[idx1]
//   arr[idx1] = arr[idx2]
//   arr[idx2] = temp
// }

module.exports = swap
