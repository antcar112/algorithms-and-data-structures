class Heap {
  constructor() {
    this.values = []
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getLeftChildIndex(index) {
    return 2 * index + 1
  }

  getRightChildIndex(index) {
    return 2 * index + 2
  }

  isValidIndex(index) {
    return index >= 0 && index < this.values.length
  }

  getParent(index) {
    const parentIndex = this.getParentIndex(index)
    return this.isValidIndex(parentIndex) ? this.values[parentIndex] : undefined
  }

  getLeftChild(index) {
    const childIndex = this.getLeftChildIndex(index)
    return this.isValidIndex(childIndex) ? this.values[childIndex] : undefined
  }

  getRightChild(index) {
    const childIndex = this.getRightChildIndex(index)
    return this.isValidIndex(childIndex) ? this.values[childIndex] : undefined
  }

  getChildren(index) {
    return [this.getLeftChild(index), this.getRightChild(index)]
  }

  /**
   * Adds all values into a formatted string.
   *
   * @returns {string} A string of all node values
   */
  toString() {
    if (!this.values.length) {
      return 'Empty Heap'
    }

    let valuesPerLine = 1
    let valuesOnLine = 0

    return (
      this.values
        .reduce((acc, curr) => {
          console.log(curr)
          acc += curr.val && curr.priority !== undefined ? `${curr.val} (${curr.priority})` : curr

          if (++valuesOnLine >= valuesPerLine) {
            valuesOnLine = 0
            valuesPerLine *= 2
            return acc + '\n'
          }
          return acc + '  '
        }, '')
        .slice(0, -1) + '\n'
    )
  }

  /**
   * Prints the heap values
   */
  print() {
    console.log(this.toString())
  }
}

module.exports = { Heap }
