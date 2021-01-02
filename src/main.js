// const { Graph } = require('./data-structures')

// const graph = new Graph()

// graph.addVertex('San Francisco')
// graph.addVertex('Tokyo')
// graph.addVertex('Dallas')
// graph.addVertex('Hong Kong')

// graph.addEdge('San Francisco', 'Dallas')
// graph.addEdge('Tokyo', 'San Francisco')
// graph.addEdge('Tokyo', 'San Francisco')

// graph.addVertex('San Francisco')

// graph.removeEdge('Tokyo', 'San Francisco')

// graph.addEdge('Tokyo', 'San Francisco')
// graph.addEdge('Hong Kong', 'San Francisco')
// graph.addEdge('Hong Kong', 'Tokyo')

// graph.print()

// graph.removeVertex('Hong Kong')
// graph.removeVertex('Aspen')

// graph.print()

const { mergeSort, bubbleSort, radixSort, depthFirstSearch } = require('./algorithms')
const { BinarySearchTree } = require('./data-structures')

const tree = new BinarySearchTree()

tree.insert(12)
tree.insert(10)
tree.insert(22)
tree.insert(32)
tree.insert(102)
tree.insert(1)

console.log(tree.find(12))
console.log(tree.find(132))

const arr = [11, 5, 22, 0, 109, 42]

console.log(bubbleSort(arr))
console.log(mergeSort(arr))
console.log(radixSort(arr))
