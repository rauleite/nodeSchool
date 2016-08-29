'use strict'
let _ = require('lodash')

_.sortBy([1, 2, 3], function (num) { return Math.sin(num) })

// → [3, 1, 2]

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 },
  { 'name': 'barney', 'age': 26 },
  { 'name': 'fred', 'age': 30 }
]

_.sortBy(characters, 'age')

/*
[
    { name: 'barney', age: 26 },
    { name: 'fred',   age: 30 },
    { name: 'barney', age: 36 },
    { name: 'fred',   age: 40 }
]
*/
