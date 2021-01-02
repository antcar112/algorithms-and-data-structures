/**
 * Gets digit at specified position. Starts from end of num.
 * Ex. num = 1234, position = 0, returns 4
 * Ex. num = 1234, position = 2, returns 2
 *
 * @param {number} num entire number to search
 * @param {number} position postion to get digit from
 */
const getDigit = (num, position) => Math.floor(Math.abs(num) / Math.pow(10, position)) % 10

const digitCount = (num) => (num !== 0 ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1)

const mostDigits = (nums) => {
  let maxDigits = 0
  nums.forEach((digit) => (maxDigits = Math.max(maxDigits, digitCount(digit))))
  return maxDigits
}

/**
 * Radix sort
 *
 * @param {number[]} nums An array of numbers to sort
 */
const radixSort = (nums) => {
  const timesToSort = mostDigits(nums)
  for (let k = 0; k < timesToSort; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => [])

    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }

    nums = [].concat(...digitBuckets)
  }
  return nums
}

// const arr1 = [1, 33, 50505, 99, 12345, 3421, 220, 7]
// const arr2 = [360, 11, 77, 2, 444]
// const arr3 = [333, 1, 4444, 22]

// console.log(radixSort(arr1))
// console.log(radixSort(arr2))
// console.log(radixSort(arr3))

module.exports = { radixSort }
