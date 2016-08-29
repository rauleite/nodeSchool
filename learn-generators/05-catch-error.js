'use strict'

function * upper (items) {
  for (let item of items) {
    try {
      yield item.toUpperCase()
    } catch (err) {
      yield null
    }
  }
}

let badItems = ['a', 'B', 1, 'c']

for (let item of upper(badItems)) {
  console.log(item)
}
// want to log: A, B, null, C
