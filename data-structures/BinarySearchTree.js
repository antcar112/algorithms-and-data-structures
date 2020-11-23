class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = !val ? null : new Node(val)
  }

  /**
   * Adds a new node into the tree.
   *
   * @param {T} val The value of the new node
   * @returns {BinarySearchTree} The updated tree
   */
  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (val === current.val) {
        return undefined
      }
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  /**
   * Searches the tree to see if it contains the passed in value.
   *
   * @param {T} val The value to find in the tree
   * @returns {Node} The node that contains the value
   */
  find(val) {
    if (!this.root) {
      return undefined
    }

    let current = this.root

    while (current) {
      if (val === current.val) {
        return current
      }
      current = val < current.val ? current.left : current.right
    }

    return undefined
  }
}

module.exports = BinarySearchTree
