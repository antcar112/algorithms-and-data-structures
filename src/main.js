const { dynamicFib, nonDynamicFib } = require('./algorithms')

console.log('recursive: ', nonDynamicFib(30))
console.log('memoed: ', dynamicFib(100))
