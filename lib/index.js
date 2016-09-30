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
      let secondOperand = sumStack.pop()
      let firstOperand = sumStack.pop()
      let res = ops[item].func(firstOperand, secondOperand)
      sumStack.push(res)
    } else {
      sumStack.push(item)
    }
  })
  return sumStack.pop()
}

module.exports = calcFormula