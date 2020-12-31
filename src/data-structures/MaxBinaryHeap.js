class MaxBinaryHeap {
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
   * Adds a new value to the heap.
   *
   * @param {T} val The value to add
   */
  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  /**
   * Sorts heap by moving value at the end of the array up to its correct position.
   */
  bubbleUp() {
    let index = this.values.length - 1
    const value = this.values[index]

    let parentIndex = this.getParentIndex(index)
    let parentValue = this.getParent(index)

    while (index > 0 && value > parentValue) {
      this.values[parentIndex] = value
      this.values[index] = parentValue
      index = parentIndex

      parentIndex = this.getParentIndex(index)
      parentValue = this.values[parentIndex]
    }
  }

  /**
   * Removes and returns the greatest value in the heap (at the top of the heap).
   *
   * @return {T} The greatest value in the heap
   */
  extractMax() {
    const [maxValue] = this.values
    const lastValue = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = lastValue
      this.sinkDown()
    }

    return maxValue
  }

  /**
   * Sorts heap by moving value at the start of the array down to its correct position.
   */
  sinkDown() {
    let index = 0
    const [value] = this.values

    while (true) {
      const swapIndex = this.getSwapDownIndex(index)
      if (!swapIndex) {
        break
      }

      this.values[index] = this.values[swapIndex]
      this.values[swapIndex] = value
      index = swapIndex
    }
  }

  /**
   * Determines next index to swap to when sinking value down. Returns undefined if should no longer since down.
   *
   * @returns {number || undefined} Returns next index to swap to, or undefined if should stop swapping.
   */
  getSwapDownIndex(index) {
    const value = this.values[index]
    const [leftChild, rightChild] = this.getChildren(index)

    return leftChild > value && (!rightChild || leftChild > rightChild)
      ? this.getLeftChildIndex(index)
      : rightChild > value && rightChild > leftChild
      ? this.getRightChildIndex(index)
      : undefined
  }
}

module.exports = MaxBinaryHeap