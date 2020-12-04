/**
 * Returns the nth number in the fibonacci sequence (1, 1, 2, 3, 5, 8, ...).
 *
 * ex: num = 2, return 1
 * ex: num = 6, return 8
 *
 * @param {number} n position of number in sequence to return
 */
const fibonacci = (n) => {
  if (n <= 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(2)) // 1
// console.log(fibonacci(6)) // 8
// console.log(fibonacci(22)) // 17711
