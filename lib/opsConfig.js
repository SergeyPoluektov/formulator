const plus = (a, b) => (a + b)
const minus = (a, b) => (a - b)
const mult = (a, b) => (a * b)
const div = (a, b) => (a / b)

module.exports = {
  '+': {
    func: plus,
    priority: 1
  },
  '-': {
    func: minus,
    priority: 1
  },
  '*': {
    func: mult,
    priority: 2
  },
  '/': {
    func: div,
    priority: 2
  },
  '(': {
    func: null,
    priority: 0
  },
  ')': {
    func: null,
    priority: 11
  }
}