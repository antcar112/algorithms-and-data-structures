const { Graph } = require('./Graph')

class WeightedGraph extends Graph {
  /**
   * @param {{string[]?}} vertice The keys of the vertice to add to graph.
   * @param {Array<[string, string, number]>?} edges The keys of the vertice to add to graph.
   */
  constructor(vertice, edges) {
    super(vertice)

    if (edges) {
      edges.forEach((edge) => this.addEdge(...edge))
    }
  }

  /**
   * Adds new edge between two existing vertices.
   *
   * @param {string} vertex1 The key of vertex 1.
   * @param {string} vertex2 The key of vertex 2.
   * @param {number} weight The weight of the edge.
   */
  addEdge(vertex1, vertex2, weight) {
    if (vertex1 === vertex2 || !this._hasVertices(vertex1, vertex2)) {
      return
    }
    if (!this._vertexHasEdge(vertex1, vertex2)) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight })
    }
    if (!this._vertexHasEdge(vertex2, vertex1)) {
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight })
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
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (edge) => edge.vertex !== vertex2
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (edge) => edge.vertex !== vertex1
      )
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
    this.adjacencyList[vertex].forEach((edge) => this.removeEdge(vertex, edge.vertex))
    delete this.adjacencyList[vertex]
  }

  /**
   * Determines if a vertex has an edge to another vertex.
   *
   * @param {string} vertex The vertex to check
   * @param {string} edgeTo The existing edge to look for
   * @returns {boolean} if the edge exists
   */
  _vertexHasEdge(vertex, edgeTo) {
    const edges = this.adjacencyList[vertex].map((edge) => edge.vertex)
    return edges.includes(edgeTo)
  }
}

module.exports = { WeightedGraph }
