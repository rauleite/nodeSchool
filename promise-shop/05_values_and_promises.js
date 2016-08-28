'use strict'

function attachTitle (arg) {
  return 'DR. ' + arg
}

const promise = new Promise(function (resolve, reject) {
  resolve('MANHATTAN')
})

promise
  .then(attachTitle)
  .then(console.log)
