const { MaxBinaryHeap, PriorityQueue } = require('./data-structures')

const m = new MaxBinaryHeap()
const q = new PriorityQueue()

q.enqueue('hi', 5)
q.enqueue('hel', 1)
q.enqueue('hee', 4)
q.enqueue('heyy', 2)

q.print()
q.dequeue()
q.print()
q.dequeue()
q.print()

m.insert(11)
m.insert(3)
m.insert(20)
m.insert(18)
m.insert(128)
m.insert(183)
m.insert(8)
m.print()
