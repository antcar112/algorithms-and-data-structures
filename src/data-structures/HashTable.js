class HashTable {
  constructor() {}

  /**
   * Detemines the index for a given key.
   *
   * @param {string} key The key to store a value by
   * @param {number?} arrayLen How big the array should be (ideally should be a prime number)
   * @returns {number} The index to store the value at
   */
  static hash(key, arrayLen = 101) {
    const PRIME = 31

    let total = 0
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      const value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % arrayLen
    }
    return total
  }
}

module.exports = HashTable
