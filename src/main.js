const { dijkstra, depthFirstTraversalIterative, depthFirstTraversal } = require('./algorithms')
const { WeightedGraph } = require('./data-structures')

dijkstra()
const vertice = ['A', 'B', 'C', 'D', 'E', 'F']
const edges = [
  ['A', 'B', 10],
  ['A', 'C', 6],
  ['B', 'D', 6],
  ['C', 'E', 6],
  ['D', 'E', 6],
  ['D', 'F', 6],
  ['E', 'F', 6],
]

const graph = new WeightedGraph(vertice, edges)

// graph.removeVertex('A')

graph.print()

console.log(depthFirstTraversal(graph, 'A'))
