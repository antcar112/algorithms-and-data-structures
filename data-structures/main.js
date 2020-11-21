const { Queue } = require('./index')

const queue = new Queue()

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
queue.enqueue('e')

queue.print()

const a = queue.dequeue()
const b = queue.dequeue()
const c = queue.dequeue()

console.log({ a, b, c })
queue.print()
