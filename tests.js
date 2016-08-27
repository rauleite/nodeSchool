'use strict'

let moment = require('moment');

const a = 1;
// a = 10100;
console.log(a);

var date = new Date();
var y = date.getFullYear
console.log(y);

let dateM = moment().format('YYYY-MM-DD hh:mm');

console.log(dateM);