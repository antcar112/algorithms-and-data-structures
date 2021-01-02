/**
 * Insertion sort
 *
 * @param {Array} arr An array to sort
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

// const arr1 = [4, 2, 6, 1, 9]
// const arr2 = [22, 19, 33, 1, 2, 40, 53, 6]
// const arr3 = [8, 1, 2, 3, 4, 5, 6, 7]

// console.log(insertionSort(arr1))
// console.log(insertionSort(arr2))
// console.log(insertionSort(arr3))

module.exports = { insertionSort }
