const Heap = require('./Heap')
class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

/**
 * Priority Queue implemented using a MinBinaryHeap, meaning lower priority values will be dealt with first.
 */
class PriorityQueue extends Heap {
  constructor() {
    super()
  }

  /**
   * Adds a new node to the queue.
   *
   * @param {T} val The value to add
   * @param {number?} priority The priority of this value
   */
  enqueue(val, priority = 1) {
    const newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  /**
   * Sorts heap by moving value at the end of the array up to its correct position based on priority.
   */
  bubbleUp() {
    let index = this.values.length - 1
    const node = this.values[index]

    let parentIndex = this.getParentIndex(index)
    let parentNode = this.getParent(index)

    while (index > 0 && node.priority < parentNode.priority) {
      this.values[parentIndex] = node
      this.values[index] = parentNode
      index = parentIndex

      parentIndex = this.getParentIndex(index)
      parentNode = this.values[parentIndex]
    }
  }

  /**
   * Removes and returns the lowest priority in the heap (at the top of the heap).
   *
   * @return {T} The lowest priority node in the heap
   */
  dequeue() {
    const [maxNode] = this.values
    const lastNode = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = lastNode
      this.sinkDown()
    }

    return maxNode
  }

  /**
   * Sorts heap by moving value at the start of the array down to its correct position based on priority.
   */
  sinkDown() {
    let index = 0
    const [node] = this.values

    while (true) {
      const swapIndex = this.getSwapDownIndex(index)
      if (!swapIndex) {
        break
      }

      this.values[index] = this.values[swapIndex]
      this.values[swapIndex] = node
      index = swapIndex
    }
  }

  /**
   * Determines next index to swap to when sinking value down. Returns undefined if should no longer sink down.
   *
   * @returns {number || undefined} Returns next index to swap to, or undefined if should stop swapping.
   */
  getSwapDownIndex(index) {
    const { priority } = this.values[index]
    const [leftChild, rightChild] = this.getChildren(index)

    return leftChild &&
      leftChild.priority < priority &&
      (!rightChild || leftChild.priority < rightChild.priority)
      ? this.getLeftChildIndex(index)
      : rightChild && rightChild.priority < priority && rightChild.priority < leftChild.priority
      ? this.getRightChildIndex(index)
      : undefined
  }
}

module.exports = PriorityQueue
