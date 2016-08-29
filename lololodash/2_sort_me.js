'use strict'

// include the Lo-Dash library
let _ = require('lodash')

let worker = function (listItems) {
  return _.sortBy(listItems, (i) => {
    return -i.quantity
  })
}

// export the worker function as a nodejs module
module.exports = worker
