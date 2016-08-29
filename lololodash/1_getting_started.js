'use strict'

// include the Lo-Dash library
let _ = require('lodash')

let worker = function (listUsers) {
  return _.filter(listUsers, {active: true})
}

// export the worker function as a nodejs module
module.exports = worker
