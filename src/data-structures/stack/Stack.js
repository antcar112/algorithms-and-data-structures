const { Node } = require('./Node')

class Stack {
  /**
   * @param {T[]?} values Adds any passed in values to the stack
   */
  constructor(...values) {
    this.first = null
    this.last = null
    this.size = 0

    if (values) {
      values.forEach((value) => this.push(value))
    }
  }

  /**
   * Adds a new node to the top of the stack.
   *
   * @param {T} val The value to add
   * @returns {number} The size of the stack
   */
  push(val) {
    const newNode = new Node(val)

    if (!this.first) {
      this.last = newNode
    } else {
      newNode.next = this.first
    }
    this.first = newNode
    return ++this.size
  }

  /**
   * Removes the node at the top of the stack.
   *
   * @returns {T} The value of the removed node
   */
  pop() {
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
      str += `${node.val},\n`
      node = node.next
    }
    return str.slice(0, -2)
  }

  /**
   * Prints the stack values
   */
  print() {
    console.log(this.toString())
  }
}

module.exports = { Stack }
