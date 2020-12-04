const { Queue } = require('../../data-structures')

/**
 * Searches a tree data structure. Starts at the tree root and explores all of the neighboring nodes before
 * moving to the next depth level.
 *
 * @param {BinarySearchTree} tree The tree to search
 * @returns {T} An array of the data in the tree
 */
const breathFirstSearch = (tree) => {
  const data = []
  const queue = new Queue()

  queue.enqueue(tree.root)

  while (queue.size) {
    let node = queue.dequeue()
    data.push(node.val)

    if (node.left) {
      queue.enqueue(node.left)
    }
    if (node.right) {
      queue.enqueue(node.right)
    }
  }

  return data
}

module.exports = breathFirstSearch
