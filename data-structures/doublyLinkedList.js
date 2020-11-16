class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Adds new node to the end of the list.
   *
   * @param {T} val The value to add
   * @returns {DoublyLinkedList} The updated linked list
   */
  push(val) {
    const node = new Node(val)

    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
      node.prev = this.tail
    }

    this.tail = node
    this.length++
    return this
  }

  /**
   * Adds all node values into a formatted string.
   *
   * @returns {string} A string of all node values
   */
  toString() {
    let str = ''
    let node = this.head
    while (node) {
      str += `${node.val}, `
      node = node.next
    }
    return str.slice(0, -2)
  }

  /**
   * Prints the link list values
   */
  print() {
    console.log(this.toString())
  }
}

module.exports = DoublyLinkedList

const list = new DoublyLinkedList()

list.push('hello')
list.push('there')
