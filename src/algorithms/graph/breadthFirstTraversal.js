const { Graph, Queue } = require('../../data-structures')

/**
 * Traverses a graph. Starts at the given root and visits all direct neighbours before moving any deeper
 *
 * @param {Graph} graph The graph to traverse
 * @param {string} root The key of the vertex to use as the root
 * @returns {string[]} An array of the data in the graph
 */
const breadthFirstTraversal = (graph, root) => {
  const toVisit = new Queue(root)
  const results = []
  const visited = { [root]: true }

  while (toVisit.size) {
    const currentVertex = toVisit.dequeue()
    results.push(currentVertex)

    graph.adjacencyList[currentVertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true
        toVisit.enqueue(neighbour)
      }
    })
  }

  return results
}

module.exports = { breadthFirstTraversal }
