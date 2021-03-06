/**
 * An undirected graph build using an adjacency list.
 */
class Graph {
  /**
   * @param {{string[]?}} vertice The keys of the vertice to add to graph.
   * @param {Array<[string, string]>?} edges The keys of the vertice to add to graph.
   */
  constructor(vertice, edges) {
    this.adjacencyList = {}

    if (vertice) {
      vertice.forEach((vertex) => this.addVertex(vertex))
    }
    if (edges) {
      edges.forEach((edge) => this.addEdge(...edge))
    }
  }

  /**
   * Adds new vertex to graph.
   *
   * @param {string} vertex The key of the vertex to add.
   */
  addVertex(vertex) {
    if (!this._hasVertices(vertex)) {
      this.adjacencyList[vertex] = []
    }
  }

  /**
   * Adds new edge between two existing vertices.
   *
   * @param {string} vertex1 The key of vertex 1.
   * @param {string} vertex2 The key of vertex 2.
   */
  addEdge(vertex1, vertex2) {
    if (vertex1 === vertex2 || !this._hasVertices(vertex1, vertex2)) {
      return
    }
    if (!this._vertexHasEdge(vertex1, vertex2)) {
      this.adjacencyList[vertex1].push(vertex2)
    }
    if (!this._vertexHasEdge(vertex2, vertex1)) {
      this.adjacencyList[vertex2].push(vertex1)
    }
  }

  /**
   * Removes an existing edge between two existing vertices.
   *
   * @param {string} vertex1 The key of vertex 1.
   * @param {string} vertex2 The key of vertex 2.
   */
  removeEdge(vertex1, vertex2) {
    if (this._hasVertices(vertex1, vertex2)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((edge) => edge !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((edge) => edge !== vertex1)
    }
  }

  /**
   * Removes existing vertex and all it's existing edges from the graph.
   *
   * @param {string} vertex The key of the vertex to remove.
   */
  removeVertex(vertex) {
    if (!this._hasVertices(vertex)) {
      return
    }
    this.adjacencyList[vertex].forEach((edge) => this.removeEdge(vertex, edge))
    delete this.adjacencyList[vertex]
  }

  /**
   * Returns all vertices in the graph.
   *
   * @returns {string[]} Vertices in graph
   */
  getVertices() {
    return Object.keys(this.adjacencyList)
  }

  /**
   * Returns the edges of a vertex
   *
   * @param {string} vertex The vertex name
   * @returns {Array<>} Edges of that vertex
   */
  getEdges(vertex) {
    return this.adjacencyList[vertex]
  }

  /**
   * Determines if graph contains vertices for all passed in keys.
   *
   * @param {string[]} keys The vertex names to check
   * @returns {boolean} if all vertice names exist
   */
  _hasVertices(...keys) {
    const existingVertices = this.getVertices()
    return keys.every((key) => existingVertices.includes(key))
  }

  /**
   * Determines if a vertex has an edge to another vertex.
   *
   * @param {string} vertex The vertex to check
   * @param {string} edgeTo The existing edge to look for
   * @returns {boolean} if the edge exists
   */
  _vertexHasEdge(vertex, edgeTo) {
    return this.adjacencyList[vertex].includes(edgeTo)
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
