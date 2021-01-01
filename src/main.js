const {
  BinarySearchTree,
  DoublyLinkedList,
  Stack,
  PriorityQueue,
  HashTable,
} = require('./data-structures')

const table = new HashTable(17)

table.set('maroon', '#800000')
table.set('yellow', '#FFFF00')
table.set('olive', '#808000')
table.set('salmon', '#FA8072')
table.set('lightcoral', '#F08080')
table.set('mediumvioletred', '#C71585')
table.set('plum', '#DDA0DD')

console.log(table.get('maroon'))
console.log(table.get('yellow'))
console.log(table.get('gold'))
