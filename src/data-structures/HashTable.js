class HashTable {
  static DEFAULT_SIZE = 53
  static HASH_PRIME = 31

  constructor(size = HashTable.DEFAULT_SIZE) {
    this.keyMap = new Array(size)
  }

  /**
   * Saves the passed in value at the given key.
   *
   * @param {string} key The key that will store the value
   * @param {any} value The value to store
   */
  set(key, value) {
    const index = this._hash(key)

    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }

    this.keyMap[index].push([key, value])
  }

  /**
   * Retrieves the value stored at a given key.
   *
   * @param {string} key The key of the value to retrieve.
   * @returns {any} The stored value
   */
  get(key) {
    const index = this._hash(key)
    const storedPairs = this.keyMap[index]

    if (Array.isArray(storedPairs)) {
      for (const [pairKey, value] of storedPairs) {
        if (key === pairKey) {
          return value
        }
      }
    }
    return undefined
  }

  /**
   * Detemines the index for a given key.
   *
   * @param {string} key The key to store a value by
   * @returns {number} The index to store the value at
   */
  _hash(key) {
    let total = 0
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      const value = char.charCodeAt(0) - 96
      total = (total * HashTable.HASH_PRIME + value) % this.keyMap.length
    }
    return total
  }
}

module.exports = HashTable
