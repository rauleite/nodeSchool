'use strict'
require('es6-promise')

const promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    fulfill('RESOLVED!')
  }, 300)
});

promise.then(function (fulfilled) {
  console.log(fulfilled)
})