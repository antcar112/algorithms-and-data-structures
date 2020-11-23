const { BinarySearchTree } = require('./index')

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.root.val)
console.log(tree.root.left.val, tree.root.right.val)

console.log(tree.find(10))
