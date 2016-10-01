const ops = require('./opsConfig')

module.exports = ({input, ctx}) => {
  let output = []
  let opsStack = []
  
  input.forEach((symbol) => {
    if (typeof ctx[symbol] === 'number') {
      output.push(ctx[symbol])
    } else if (symbol.search(/\d+/) !== -1) {
    	output.push(+symbol)
    }	else {
    	if (symbol !== '(' && symbol !== ')') {
	    	let lastSymbolInStack = opsStack[opsStack.length - 1]
	      if (lastSymbolInStack 
	      			&& lastSymbolInStack !== '('
	      			&& ops[symbol].priority <= ops[lastSymbolInStack].priority)
	      {
	        output.push(opsStack.pop())
	      }
	    } else {
	      if (symbol === ')') {
	        let lastSymbol = opsStack.pop()
	        while (lastSymbol !== '(') {
	          output.push(lastSymbol)
	          lastSymbol = opsStack.pop()
	        }
	        return
	      }
	    }
      opsStack.push(symbol)
    }
  })
  
  opsStack.reverse()
  return output.concat(opsStack)
}