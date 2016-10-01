# Formulator

A library for calculating value by formula and objects with operands values. Based on Reverse Polish Notation algorithm.
Now supports +, -, *, /, sqrt, ^ and parenthesis.

## Usage

Formulas items must be a splitting by space `( a + b )`

#### Simple example
```
const formulator = require('formulator')

const values = {
  a: 5,
  b: 3,
  c: 2
}

const formula = '( a + b ) / ( a - c )'

const result = formulator({
  values: values,
  formula: formula
})

console.log(result) //2.6666666666666665
```

#### Example for <i>pistonsky</i> usecase
```
const formulator = require('formulator')

let dataObj = {
  bookings: 60,
  clicks: 5
}
let config = {
	BTR: 'bookings / clicks'
}

for (let metric in config) {
	dataObj[metric] = formulator({
		values: dataObj,
		formula: config[metric]
	})
}

console.log(dataObj.BTR) // 12
```

#### Really crazy example
```
const values = {
  a: 5,
  b: 3,
  c: 2,
  d: 4,
  e: 1
}

const formula = '( d ^ e + ( ( a - b ) + sqrt ( d ^ c + ( a + d ) ) ) ) / c'

const result = formulator({
  values: values,
  formula: formula
})

console.log(result) // 5.5
```
