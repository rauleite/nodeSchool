'use strict'

const _ = require('lodash')

let tempsort = function (item) {
  let result = {
    hot: [],
    warm: []
  }

  function checkTemp (item) {
    return item > 19
  }

  _.forEach(item, function (town, townName) {
    if (_.every(town, checkTemp)) {
      result.hot.push(townName)
    } else if (_.some(town, checkTemp)) {
      result.warm.push(townName)
    }
  })

  return result
}

module.exports = tempsort
