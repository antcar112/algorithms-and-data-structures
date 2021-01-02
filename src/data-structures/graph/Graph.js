/**
 * An undirected graph build using an adjacency list.
 */
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  /**
   * Addes new vertex to graph.
   *
   * @param {string} key The key of the vertex to add.
   */
  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = []
    }
  }

  /**
   * Addes new edge between two existing vertice.
   *
   * @param {string} vert1 The key of vertex 1.
   * @param {string} vert2 The key of vertex 2.
   */
  addEdge(vert1, vert2) {
    const edges1 = this.adjacencyList[vert1]
    const edges2 = this.adjacencyList[vert2]

    if (!(edges1 && edges2)) {
      if (!edges1.includes(vert2)) {
        edges1.push(vert2)
      }
      if (!edges2.includes(vert1)) {
        edges2.push(vert1)
      }
    }
  }

  /**
   * Adds all vertexs and edges into a formatted string.
   *
   * @returns {string} A string of Graph values
   */
  toString() {
    return this.adjacencyList
  }

  /**
   * Prints the graph values
   */
  print() {
    console.log(this.toString())
  }
}

module.exports = { Graph }
