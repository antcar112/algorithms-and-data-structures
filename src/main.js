const { Graph } = require('./data-structures')

const graph = new Graph()

graph.addVertex('San Francisco')
graph.addVertex('Tokyo')
graph.addVertex('Dallas')

graph.addEdge('San Francisco', 'Dallas')
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Tokyo', 'Dallas')

graph.addVertex('San Francisco')

graph.print()
