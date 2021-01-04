const { Graph, Stack } = require('../../data-structures')

/**
 * Traverses a graph. Starts at the given root and explores as deep as possible
 * before backtracking.
 *
 * This solution uses recursion.
 *
 * @param {Graph} graph The graph to traverse
 * @param {string} root The key of the vertex to use as the root
 * @returns {string[]} An array of the data in the graph
 */
const depthFirstTraversal = (graph, root) => {
  const results = []
  const visited = {}

  const visitVertex = (vertex) => {
    if (!vertex) {
      return null
    }
    results.push(vertex)
    visited[vertex] = true

    graph.adjacencyList[vertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        return visitVertex(neighbour)
      }
    })
  }

  visitVertex(root)

  return results
}

/**
 * Traverses a graph. Starts at the given root and explores as deep as possible
 * before backtracking.
 *
 * This solution uses an iterative approach.
 *
 * @param {Graph} graph The graph to traverse
 * @param {string} root The key of the vertex to use as the root
 * @returns {string[]} An array of the data in the graph
 */
const depthFirstTraversalIterative = (graph, root) => {
  const toVisit = new Stack(root)
  const results = []
  const visited = { [root]: true }

  while (toVisit.size) {
    const currentVertex = toVisit.pop()
    results.push(currentVertex)

    graph.adjacencyList[currentVertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true
        toVisit.push(neighbour)
      }
    })
  }

  return results
}

module.exports = { depthFirstTraversal, depthFirstTraversalIterative }
