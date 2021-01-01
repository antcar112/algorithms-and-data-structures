class HashTable {
  static DEFAULT_SIZE = 53

  constructor(size = DEFAULT_SIZE) {
    this.keyMap = new Array(size)
  }

  /**
   * Detemines the index for a given key.
   *
   * @param {string} key The key to store a value by
   * @returns {number} The index to store the value at
   */
  _hash(key) {
    const PRIME = 31

    let total = 0
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      const value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }
}

module.exports = HashTable
