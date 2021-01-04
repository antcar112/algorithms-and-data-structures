const { Node } = require('./Node')

class Queue {
  /**
   * @param {T[]?} values Adds any passed in valuesues to the queue
   */
  constructor(...values) {
    this.first = null
    this.last = null
    this.size = 0

    if (values) {
      values.forEach((value) => this.enqueue(value))
    }
  }

  /**
   * Adds a new node to the back of the queue.
   *
   * @param {T} val The value to add
   * @returns {number} The size of the queue
   */
  enqueue(val) {
    const node = new Node(val)

    if (!this.first) {
      this.first = node
    } else {
      this.last.next = node
    }
    this.last = node

    return ++this.size
  }

  /**
   * Removes the node at the front of the queue.
   *
   * @returns {T} The value of the removed node
   */
  dequeue() {
    if (!this.first) {
      return null
    }
    const temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    temp.next = null
    this.size--

    return temp.val
  }

  /**
   * Adds all node values into a formatted string.
   *
   * @returns {string} A string of all node values
   */
  toString() {
    let str = ''
    let node = this.first
    while (node) {
      str += `${node.val}, `
      node = node.next
    }
    return `[ ${str.slice(0, -2)} ]`
  }

  /**
   * Prints the stack values
   */
  print() {
    console.log(this.toString())
  }
}

module.exports = { Queue }
