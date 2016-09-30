const formulator = require('./lib/index.js')

// for test
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

console.log(dataObj.BTR)

module.exports = formulator