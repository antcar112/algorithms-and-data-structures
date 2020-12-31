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
}

module.exports = Heap
