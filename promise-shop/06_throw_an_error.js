'use strict'

const json = process.argv[2];

function parsePromised() {
    return new Promise(function(fulfill, reject) {
        try {
            fulfill(JSON.parse(json));
        } catch (error) {
            reject(error)
        }
    })
}

parsePromised().then(null, console.log) 