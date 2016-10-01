const formulator = require('./lib/index.js')

let dataObj = {
  bookings: 60,
  clicks: 5
}
let config = {
    BTR: '30 / 3 * 100'
}

for (let metric in config) {
    dataObj[metric] = formulator({
        values: dataObj,
        formula: config[metric]
    })
}

console.log(dataObj.BTR)

module.exports = formulator