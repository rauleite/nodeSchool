'use strict'

let _ = require('lodash')

module.exports = function (collection) {
  // add a size attribute to the collection based on the item's population
  return _.forEach(collection, function (item) {
    if (item.population > 1) {
      item.size = 'big'
    } else if (item.population > 0.5) {
      item.size = 'med'
    } else {
      item.size = 'small'
    }
  })
}
