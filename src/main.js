const { PriorityQueue } = require('./data-structures')

const queue = new PriorityQueue()

queue.enqueue('E', 5)
queue.enqueue('A', 1)
queue.enqueue('C', 3)
queue.enqueue('D', 4)
queue.enqueue('B', 2)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

// console.log(queue.values)
