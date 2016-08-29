'use strict'

const _ = require('lodash')

let characters = [
  { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
  { 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }
]

let result = _.filter(characters, { 'pets': ['hoppy'] })

// [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]

console.log(result)
