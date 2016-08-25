var http = require('http');
var bl = require('bl');

var listResponse = [];
var countCb = 0;

function httpGet(index) {
    http.get(process.argv[2 + index], (res) => {
        res.pipe(bl((err, data) => {
            listResponse[index] = data.toString();
        }));
        res.on('end', (x) => {
            end(++countCb);
        })
    })
}

function end(countCb) {
    if (countCb === 3) {

        listResponse.forEach((e) => {
            console.log(e);
        });    
    }
}

for(var i = 0; i < 3; i++) {
    httpGet(i);
}