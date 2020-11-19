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
   * Removes the node at the end of the list.
   *
   * @returns {T} The value of the removed node
   */
  pop() {
    if (!this.head) {
      return undefined
    }
    const removedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removedNode.prev
      removedNode.prev = null
      this.tail.next = null
    }

    this.length--
    return removedNode.val
  }

  /**
   * Adds new node to the start of the list.
   *
   * @param {T} val The value to add
   * @returns {DoublyLinkedList} The updated linked list
   */
  unshift(val) {
    const newNode = new Node(val)

    if (!this.length) {
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
    }
    this.head = newNode
    this.length++
    return this
  }

  /**
   * Removes the node at the start of the list.
   *
   * @returns {T} The value of the removed node
   */
  shift() {
    if (!this.head) {
      return undefined
    }
    const removedNode = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = removedNode.next
      this.head.prev = null
      removedNode.next = null
    }
    this.length--
    return removedNode.val
  }

  /**
   * Retrieves the node at the specified index.
   *
   * @param {number} index The index of the node to get
   * @returns {Node} The node at the given index.
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }

    let current

    if (index <= this.length / 2) {
      current = this.head
      for (let count = 0; count !== index; count++) {
        current = current.next
      }
    } else {
      current = this.tail
      for (let count = this.length - 1; count !== index; count--) {
        current = current.prev
      }
    }

    return current
  }

  /**
   * Changes the value in the node at the specified index.
   *
   * @param {number} index The index of the node to set
   * @param {T} val The new value
   * @returns {boolean} If the node was successfully updated
   */
  set(index, val) {
    const node = this.get(index)
    if (!node) {
      return false
    }
    node.val = val
    return true
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
    return `[ ${str.slice(0, -2)} ]`
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
list.push('friendo')

// list.print()

const popped = list.pop()
// console.log(popped)
// list.print()

const shifted = list.shift()
// console.log(shifted)

list.unshift('HELLO')
list.unshift('GO!')
list.unshift('Set...')
list.unshift('ready..')
list.push('final')
// list.print()

const setted = list.set(0, 'Anthony')
// list.print()
