/**
 * Returns the nth number in the fibonacci sequence (1, 1, 2, 3, 5, 8, ...).
 *
 * ex: num = 2, return 1
 * ex: num = 6, return 8
 *
 * @param {number} n position of number in sequence to return
 */
const fib = (n) => {
  if (n <= 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

// console.log(fib(2)) // 1
// console.log(fib(6)) // 8
// console.log(fib(22)) // 17711
