'use strict'

const _ = require('lodash')

let worker = function (comments) {
  let counted = []

  // Group by username
  comments = _.groupBy(comments, 'username')

  _.forEach(comments, function (item, name) {
    counted.push({
      username: name,
      comment_count: _.size(item)
    })
  })

  return _.sortBy(counted, 'comment_count').reverse()
}


module.exports = worker
