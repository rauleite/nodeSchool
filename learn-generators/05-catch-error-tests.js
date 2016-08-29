'use strict'

function* dummy () {
  try {
    null.foo() // causes exception
  } catch (e) {
    console.log('Caught exception: %s', e)
  }
  yield 'Got here without crashing.'
}
dummy().next()
// Caught exception: TypeError: Cannot read property 'foo' of null
