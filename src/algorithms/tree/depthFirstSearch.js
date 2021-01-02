const { BinarySearchTree } = require('../../data-structures')

/**
 * Searches a tree data structure. Starts at the tree root and explores as deep as possible
 * before backtracking.
 *
 * PreOrder search adds values in the order that they are visited.
 *
 * @param {BinarySearchTree} tree The tree to search
 * @returns {T[]} An array of the data in the tree
 */
const preOrder = (tree) => {
  const data = []

  const traverseNode = ({ val, left, right }) => {
    data.push(val)

    if (left) {
      traverseNode(left)
    }
    if (right) {
      traverseNode(right)
    }
  }

  traverseNode(tree.root)
  return data
}

/**
 * Searches a tree data structure. Starts at the tree root and explores as deep as possible
 * before backtracking.
 *
 * InOrder search adds values after left children have been explored but before their right children
 * are explored. This will return all values in the tree in order.
 *
 * @param {BinarySearchTree} tree The tree to search
 * @returns {T[]} An array of the data in the tree
 */
const inOrder = (tree) => {
  const data = []

  const traverseNode = ({ val, left, right }) => {
    if (left) {
      traverseNode(left)
    }

    data.push(val)

    if (right) {
      traverseNode(right)
    }
  }

  traverseNode(tree.root)
  return data
}

/**
 * Searches a tree data structure. Starts at the tree root and explores as deep as possible
 * before backtracking.
 *
 * PostOrder search adds values in the order they are last visited by the algorithm. This means they are
 * only added after all their children have been explored.
 *
 * @param {BinarySearchTree} tree The tree to search
 * @returns {T[]} An array of the data in the tree
 */
const postOrder = (tree) => {
  const data = []

  const traverseNode = ({ val, left, right }) => {
    if (left) {
      traverseNode(left)
    }
    if (right) {
      traverseNode(right)
    }

    data.push(val)
  }

  traverseNode(tree.root)
  return data
}

module.exports = {
  depthFirstSearch: {
    preOrder,
    inOrder,
    postOrder,
  },
}
