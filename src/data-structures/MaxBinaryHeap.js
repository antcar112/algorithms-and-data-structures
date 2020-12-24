class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  getParentIndex = (index) => Math.floor((index - 1) / 2)

  getLeftChildIndex = (index) => 2 * index + 1

  getRightChildIndex = (index) => 2 * index + 2

  isValidIndex = (index) => index >= 0 && index < this.values.length - 1

  getParent = (index) => {
    const parentIndex = this.getParentIndex(index)
    return this.isValidIndex(parentIndex) ? this.values[parentIndex] : undefined
  }

  getLeftChild = (index) => {
    const childIndex = this.getLeftChildIndex(index)
    return this.isValidIndex(childIndex) ? this.values[childIndex] : undefined
  }

  getRightChild = (index) => {
    const childIndex = this.getRightChildIndex(index)
    return this.isValidIndex(childIndex) ? this.values[childIndex] : undefined
  }

  getChildren = (index) => [this.getLeftChild(index), this.getRightChild(index)]

  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

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

  extractMax() {
    const [maxValue] = this.values
    const lastValue = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = lastValue
      this.sinkDown()
    }

    return maxValue
  }

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

  getSwapDownIndex(index) {
    const value = this.values[index]
    const [leftChild, rightChild] = this.getChildren(index)

    return leftChild > value && leftChild > rightChild
      ? this.getLeftChildIndex(index)
      : rightChild > value && rightChild > leftChild
      ? this.getRightChildIndex(index)
      : undefined
  }
}

module.exports = MaxBinaryHeap
