var http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('UTF8');
    res.on('data', (d) => {
        console.log(d);
    })
})