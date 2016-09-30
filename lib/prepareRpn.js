const ops = require('./opsConfig')

module.exports = ({input, ctx}) => {
  let output = []
  let opsStack = []
  
  input.forEach((symbol) => {
    if (typeof ctx[symbol] === 'number') {
      output.push(ctx[symbol])
    } else {
      if (ops[symbol].priority <= opsStack[opsStack.length - 1]) {
        output.push(opsStack.pop())
      }
      if (symbol === ')') {
        lastSymbol = opsStack.pop()
        while (lastSymbol !== '(') {
          output.push(lastSymbol)
          lastSymbol = opsStack.pop()
        }
        return
      }
      opsStack.push(symbol)
    }    
  })
  
  opsStack.reverse()
  return output.concat(opsStack)
}