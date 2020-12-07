const { breadthFirstSearch, depthFirstSearch } = require('./algorithms')
const { BinarySearchTree } = require('./data-structures')

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.root.val)
console.log(tree.root.left.val, tree.root.right.val)

console.log(breadthFirstSearch(tree))

const { preOrder, postOrder, inOrder } = depthFirstSearch

console.log(preOrder(tree))
console.log(postOrder(tree))
console.log(inOrder(tree))
