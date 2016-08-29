'use strict'

function * foo () {
  yield 'inside foo'
}

var it = foo()

try {
  it.throw('BOOO from outside')
} catch (err) {
  console.log('Error: %s ', err) // Error: BOOO from outside
}
