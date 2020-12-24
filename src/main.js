const { MaxBinaryHeap } = require('./data-structures')

const heap = new MaxBinaryHeap()

heap.insert(55)
heap.insert(66)
heap.insert(77)
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.values)
