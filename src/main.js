const { dijkstra } = require('./algorithms')
const { WeightedGraph } = require('./data-structures')

const vertice = ['A', 'B', 'C', 'D', 'E', 'F']
const edges = [
  ['A', 'B', 4],
  ['A', 'C', 2],
  ['B', 'E', 3],
  ['C', 'D', 2],
  ['C', 'F', 4],
  ['D', 'E', 3],
  ['D', 'F', 1],
  ['E', 'F', 1],
]

const graph = new WeightedGraph(vertice, edges)

console.log(dijkstra(graph, 'A', 'B')) // 4
console.log(dijkstra(graph, 'A', 'C')) // 2
console.log(dijkstra(graph, 'A', 'E')) // 6
console.log(dijkstra(graph, 'A', 'F')) // 5
