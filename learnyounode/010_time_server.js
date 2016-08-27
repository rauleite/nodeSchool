'use strict'

const net = require('net');
const port = process.argv[2];
const moment = require('moment');

const server = net.createServer((socket) => {
    console.log('client connected');
    var date = new Date();
    // socket.write(date);
    socket.end(moment().format('YYYY-MM-DD HH:mm'));
    
});

server.on('error', (e) => {
    console.error(e);
})

server.listen(port);

