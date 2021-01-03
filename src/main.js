const { binarySearch, linearSearch, naiveStringSearch } = require('./algorithms')
const { Graph } = require('./data-structures')

// const graph = new Graph()

// graph.addVertex('San Francisco')
// graph.addVertex('Tokyo')
// graph.addVertex('Dallas')
// graph.addVertex('Hong Kong')

// graph.addEdge('San Francisco', 'Dallas')
// graph.addEdge('Tokyo', 'San Francisco')
// graph.addEdge('Tokyo', 'San Francisco')

// graph.addVertex('San Francisco')

// graph.removeEdge('Tokyo', 'San Francisco')

// graph.addEdge('Tokyo', 'San Francisco')
// graph.addEdge('Hong Kong', 'San Francisco')
// graph.addEdge('Hong Kong', 'Tokyo')

// graph.print()

// graph.removeVertex('Hong Kong')
// graph.removeVertex('Aspen')

// graph.print()

const sortedArr = [-3, 2, 6, 13, 55, 72, 101]

// console.log(binarySearch(sortedArr, -3)) // 0
// console.log(binarySearch(sortedArr, 13)) // 3
// console.log(binarySearch(sortedArr, 101)) // 6
// console.log(binarySearch(sortedArr, 66)) // -1

const str = 'hi hello howdy hell yeah helicopter hey'

console.log(naiveStringSearch(str, 'hell')) // 2
console.log(naiveStringSearch(str, 'hel')) // 3
console.log(naiveStringSearch(str, 'he')) // 4
console.log(naiveStringSearch(str, 'goodbye')) // 0
console.log(naiveStringSearch(str, ' ')) // 6
