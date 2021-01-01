const { HashTable } = require('./data-structures')

const table = new HashTable()

const i = HashTable.hash('pink')
const j = HashTable.hash('orange')
const k = HashTable.hash('red')
console.log(i, j, k)
