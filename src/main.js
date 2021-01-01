const { HashTable } = require('./data-structures')

const table = new HashTable()

const i = table._hash('pink')
const j = table._hash('orange')
const k = table._hash('red')
console.log(i, j, k)
