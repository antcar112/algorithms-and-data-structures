const { PriorityQueue, WeightedGraph } = require('../../data-structures')

/**
 * Finds the shortest path between two vertices in a weighted graph.
 *
 * @param {WeightedGraph} graph The graph
 * @param {string} start The starting vertex
 * @param {string} finish The vertex to finish at
 * @returns {{path: string[], distance: number}} An array of vertice names that show the shortest path from start to finish, and the total distance
 */
const dijkstra = (graph, start, finish) => {
  const nodes = new PriorityQueue()
  const distances = {}
  const previous = {}
  const path = []

  // Initial objects
  graph.getVertices().forEach((vertex) => {
    const initialValue = vertex === start ? 0 : Infinity
    distances[vertex] = initialValue
    nodes.enqueue(vertex, initialValue)
    previous[vertex] = null
  })

  while (nodes.values.length) {
    const smallest = nodes.dequeue().val

    if (smallest === finish) {
      let currentVertex = smallest
      while (previous[currentVertex]) {
        path.push(currentVertex)
        currentVertex = previous[currentVertex]
      }
      break
    }

    if (smallest || distances[smallest] !== Infinity) {
      // for each neighbour vertex...
      graph.getEdges(smallest).forEach((edge) => {
        // calculate the distance to the neighbouring vertex
        const newDistance = distances[smallest] + edge.weight
        const neighbour = edge.vertex

        if (newDistance < distances[neighbour]) {
          // update distance and path if distance is smaller
          distances[neighbour] = newDistance
          previous[neighbour] = smallest
          nodes.enqueue(neighbour, newDistance)
        }
      })
    }
  }
  return { path: [start, ...path.reverse()], distance: distances[finish] }
}

module.exports = { dijkstra }
