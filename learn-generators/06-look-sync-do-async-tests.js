'use strict'

let fs = require('fs')

function run (generator) {
  let it = generator(go)

  function go (err, result) {
    if (err) return

    it.next(result)
  }

  go()
}

run(function * (done) {
  let exercises = yield fs.readdir('/home/raul/.nvm/versions/node/v4.5.0/lib/node_modules/learn-generators/', done)
  console.log(exercises)
})
