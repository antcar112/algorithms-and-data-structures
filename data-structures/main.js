const { DoublyLinkedList } = require('./index')

const list = new DoublyLinkedList()

list.push('hello')
list.push('there')
list.push('friendo')

// list.print()

const popped = list.pop()
// console.log(popped)
// list.print()

const shifted = list.shift()
// console.log(shifted)

list.unshift('HELLO')
list.unshift('GO!')
list.unshift('Set...')
list.unshift('ready..')
list.push('final')
// list.print()

const setted = list.set(4, 'Anthony')
list.insert(5, 'Caron')
list.print()

list.remove(2)
list.print()
const removed = list.remove(1)
list.remove(0)
list.print()
console.log(removed)
