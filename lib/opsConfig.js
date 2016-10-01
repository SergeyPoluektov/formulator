const plus = (a, b) => (a + b)
const minus = (a, b) => (a - b)
const mult = (a, b) => (a * b)
const div = (a, b) => (a / b)

module.exports = {
  'sqrt': {
    func: Math.sqrt,
    priority: 3,
    isUnary: true
  },
  '^': {
    func: Math.pow,
    priority: 3,
    isUnary: false
  },
  '+': {
    func: plus,
    priority: 1,
    isUnary: false
  },
  '-': {
    func: minus,
    priority: 1,
    isUnary: false
  },
  '*': {
    func: mult,
    priority: 2,
    isUnary: false
  },
  '/': {
    func: div,
    priority: 2,
    isUnary: false
  }
}