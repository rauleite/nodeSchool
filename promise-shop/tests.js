'use strict'

Promise.resolve(() => 'John')
.then(() => {
  throw new Error('ops')
})
.catch((ex) => {
  console.log(ex)
})
.then(() => {
  throw new Error('ups')
  console.log('Doe')
})
.catch((ex) => {
  console.log(ex)
})
