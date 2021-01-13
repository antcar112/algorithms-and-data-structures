/**
 * Non-dynamic solution.
 *
 * Will calculate the same number multiple times. The bigger the number, the more times it's forced to calculate that same number.
 *
 * Has very, very bad performance, with a time complexity of O(2ᴺ) 😥.
 */
const nonDynamicFib = (num) => {
  if (num <= 2) return 1
  return nonDynamicFib(num - 1) + nonDynamicFib(num - 2)
}

/**
 * Dynamic solution, using memoization.
 *
 * This memoized solution has a time complexity of O(N) 🥳.
 */
const fibMemoed = (num, memo = []) => {
  if (memo[num] !== undefined) return memo[num]
  if (num <= 2) return 1
  const result = fibMemoed(num - 1, memo) + fibMemoed(num - 2, memo)
  memo[num] = result
  return result
}

/**
 * Dynamic solution, using tabulation.
 *
 * This tabulated solution also has a time complexity of O(N) 🎉.
 */
const fibTabulated = (num) => {
  if (num <= 2) return 1
  const fibNums = [0, 1, 1]
  for (let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums[num]
}

module.exports = { fibMemoed, fibTabulated, nonDynamicFib }
