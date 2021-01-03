const { naiveStringSearch } = require('./naiveStringSearch')

const str = 'hi hello howdy hell yeah helicopter hey'

console.log(naiveStringSearch(str, 'hell')) // 2
console.log(naiveStringSearch(str, 'hel')) // 3
console.log(naiveStringSearch(str, 'he')) // 4
console.log(naiveStringSearch(str, 'goodbye')) // 0
console.log(naiveStringSearch(str, ' ')) // 6
