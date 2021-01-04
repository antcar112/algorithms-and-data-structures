const {
  depthFirstTraversal,
  breadthFirstTraversal,
  depthFirstTraversalIterative,
} = require('./algorithms')
const { Graph, LinkedList, DoublyLinkedList } = require('./data-structures')

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

const a = new DoublyLinkedList(1)
const b = new DoublyLinkedList(1, 2, 3)
const c = new DoublyLinkedList()

a.print()
b.print()
c.print()

c.push('apple')
console.log(c.get(0))
