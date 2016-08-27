'use strict'

function attachTitle(arg) {
    return 'DR. ' + arg
}

let execute = function (fulfill, reject) {
    fulfill('MANHATTAN');
}

const promise = new Promise(execute);

promise
    .then(attachTitle)
    .then(console.log)