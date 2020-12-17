class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getChildIndexes(index) {
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    return [leftIndex, rightIndex]
  }

  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.values.length - 1
    const value = this.values[index]

    let parentIndex = this.getParentIndex(index)
    let parentValue = this.values[parentIndex]

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
    const length = this.values.length
    const value = this.values[0]

    while (true) {
      const [leftChildIndex, rightChildIndex] = this.getChildIndexes(index)
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > value) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if ((swap === null && rightChild > value) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex
        }
      }

      if (swap === null) {
        break
      }
      this.values[index] = this.values[swap]
      this.values[swap] = value
      index = swap
    }
  }
}

module.exports = MaxBinaryHeap
