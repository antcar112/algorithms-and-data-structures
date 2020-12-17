const { MaxBinaryHeap } = require('./data-structures')

const heap = new MaxBinaryHeap()
console.log(heap.values)
heap.insert(55)
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
