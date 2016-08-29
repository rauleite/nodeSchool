'use strict'

const _ = require('lodash')

let worker = function (arr) {
  return _.chain(arr)
    .map(function (item) {
      return item + 'Chained'
    })
    .map(function (item) {
      return item.toUpperCase()
    })
    .sortBy()
    .value()
}

module.exports = worker
