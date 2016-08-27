'use strict'

const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const PATH = process.argv[3];

const server = http.createServer((req, res) => {
    const src = fs.createReadStream(PATH);
    src.pipe(res);    
})

server.listen(PORT)