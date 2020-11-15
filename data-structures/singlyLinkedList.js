class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Adds new node to the end of the list.
   *
   * @param {T} val The value to add
   * @returns {SinglyLinkedList} The updated linked list
   */
  push(val) {
    const node = new Node(val)

    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
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

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    if (!this.length) {
      this.head = null
      this.tail = null
    }

    return current.val
  }

  /**
   * Adds new node to the start of the list.
   *
   * @param {T} val The value to add
   * @returns {SinglyLinkedList} The updated linked list
   */
  unshift(val) {
    const node = new Node(val)

    if (!this.head) {
      this.tail = node
    } else {
      node.next = this.head
    }

    this.head = node
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

    const currentHead = this.head
    this.head = currentHead.next
    this.length--

    if (!this.length) {
      this.tail = null
    }

    return currentHead.val
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

    let current = this.head

    for (let count = 0; count !== index; count++) {
      current = current.next
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
   * Adds a new node at the specified index.
   *
   * @param {number} index The index the new node
   * @param {T} val The value of the new node
   * @returns {boolean} If the node was successfully inserted
   */
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return !!this.unshift(val)
    }
    if (index === this.length) {
      return !!this.push(val)
    }

    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
    return true
  }

  /**
   * Removes the node at the specified index.
   *
   * @param {number} index The index of the node to set
   * @returns {Node} The value of the removed node
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }

    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--
    return removedNode
  }

  /**
   * Reverses the linked list.
   *
   * @returns {SinglyLinkedList} The updated linked list
   */
  reverse() {
    let node = this.head
    // Swap head and tail
    this.head = this.tail
    this.tail = node

    let prev = null
    let next

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
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

module.exports = singlyLinkedList

// Make new list
const list = new SinglyLinkedList()

// .push() tests
list.push('Its')
list.push('my')
list.push('linked')
list.push('LLLISSTTT')
list.print()

// .pop() tests
const popped = list.pop()
list.push('list')
// console.log(popped) // LLLISSTTT

// .shift() tests
const shifted = list.shift()
// console.log(shifted) // Its

// .unshift() tests
list.unshift('is')
list.unshift('This')
// console.log(list.head.val, list.head.next.val, list.length) // This is 5

// List = This, is, my, linked, list

// .get() tests
// console.log(list.get(-1)) // null
// console.log(list.get(0).val) // This
// console.log(list.get(3).val) // linked
// console.log(list.get(5)) // null

// .set() tests
const setFail = list.set(-1, 'Fail')
const setPass = list.set(2, 'a')
// console.log(setFail, setPass, list.get(2).val) // false, true, a

// List = This, is, a, linked, list

// .insert() tests
const insertA = list.insert(3, 'really')
const insertB = list.insert(4, 'cool')
const insertFail = list.insert(66, 'fail')
// console.log(insertA, insertB, insertFail) // true, true, false
// list.print()

// List = This, is, a, really, cool, linked, list

// .remove() tests
const removeA = list.remove(3)
const removeFail = list.remove(list.length)
// console.log(removeA.val, removeFail) // really, undefined
// console.log(list.length) // 6

// List = This, is, a, cool, linked, list

// .reverse() tests
// list.print()
list.reverse()
// list.print()

// .toString() tests
// console.log(list.toString())
