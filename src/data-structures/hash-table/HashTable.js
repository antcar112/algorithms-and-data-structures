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
    const pairs = this.keyMap[index]

    this.keyMap[index] = pairs ? pairs.filter(([currKey]) => currKey !== key) : []
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
    const pairs = this.keyMap[index]

    if (Array.isArray(pairs)) {
      for (const [pairKey, value] of pairs) {
        if (key === pairKey) {
          return value
        }
      }
    }
    return undefined
  }

  /**
   * Returns an array of all key-value pairs in the hash table as tuples.
   *
   * @returns {[string, any][]} All key-value currently in the hash table.
   */
  entries() {
    return this.keyMap.flatMap((entry) => entry)
  }

  /**
   * Returns an array of all keys in the hash table.
   *
   * @returns {string[]} All keys currently in the hash table.
   */
  keys() {
    return this.entries().map(([key]) => key)
  }

  /**
   * Returns an array of all values in the hash table. Duplicate values are filtered out.
   *
   * @returns {any[]} All values currently in the hash table.
   */
  values() {
    const values = this.entries().map(([, value]) => value)
    return [...new Set(values)]
  }

  /**
   * Hashes a given key to determine its correct index.
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

module.exports = { HashTable }
