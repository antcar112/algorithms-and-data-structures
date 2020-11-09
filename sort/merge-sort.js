const merge = (arr1, arr2) => {
  const results = []
  let index1 = 0
  let index2 = 0

  while (index1 < arr1.length && index2 < arr2.length) {
    results.push(arr1[index1] < arr2[index2] ? arr1[index1++] : arr2[index2++])
  }

  return results.concat(arr1.slice(index1)).concat(arr2.slice(index2))
}

export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([1, 30, 2, -1, 5, 63, 7, 18]))
