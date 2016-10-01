const prepareRpn = require('./prepareRpn.js')
const ops = require('./opsConfig')

const calcFormula = ({values, formula}) => {
	const rpn = prepareRpn({
		input: formula.split(' '),
		ctx: values
	})

	let sumStack = []
  rpn.forEach((item, i, arr) => {
    if (typeof ops[item] !== 'undefined') {
    	let res = 0
    	if (ops[item].isUnary) {
    		res = ops[item].func(sumStack.pop())
    	} else {
	      let secondOperand = sumStack.pop()
	      let firstOperand = sumStack.pop()
	      res = ops[item].func(firstOperand, secondOperand)
	    }
      sumStack.push(res)
    } else {
      sumStack.push(item)
    }
  })
  return sumStack.pop()
}

module.exports = calcFormula