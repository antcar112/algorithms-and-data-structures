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
}

const list = new SinglyLinkedList()
list.push('Its')
list.push('my')
list.push('linked')
list.push('LLLISSTTT')

const popped = list.pop()
list.push('list')

console.log(popped) // LLLISSTTT

console.log(list.shift()) // Its

list.unshift('is')
list.unshift('This')

console.log(list.head.val, list.head.next.val, list.length) // This is 5
