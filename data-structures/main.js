const { Stack } = require('./index')

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.print()

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.print()
