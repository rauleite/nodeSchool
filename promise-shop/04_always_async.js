'use strict'

const promise = new Promise(function (resolve, reject) {
  resolve('SECOND')
})

promise.then(console.log)

console.log('FIRST')
