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
 * This memoized solutions has a time complexity of O(N) 🥳.
 */
const fibMemoed = (num, memo = []) => {
  if (memo[num] !== undefined) return memo[num]
  if (num <= 2) return 1
  const result = fibMemoed(num - 1, memo) + fibMemoed(num - 2, memo)
  memo[num] = result
  return result
}

module.exports = { fibMemoed, nonDynamicFib }
