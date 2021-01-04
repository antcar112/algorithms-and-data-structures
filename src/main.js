const {
  depthFirstTraversal,
  breadthFirstTraversal,
  depthFirstTraversalIterative,
} = require('./algorithms')
const { Graph } = require('./data-structures')

const vertice = ['A', 'B', 'C', 'D', 'E', 'F']
const edges = [
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'D'],
  ['C', 'E'],
  ['D', 'E'],
  ['D', 'F'],
  ['E', 'F'],
]

const graph = new Graph(vertice, edges)

// graph.print()

console.log(breadthFirstTraversal(graph, 'A'))
// console.log(depthFirstTraversalIterative(graph, 'A'))
