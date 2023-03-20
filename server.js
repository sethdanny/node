#!/usr/bin/node
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Created server successfully!");
})

server.listen(3000, 'localhost', () => {
    console.log('listening requests on port 3000');
})