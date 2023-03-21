#!/usr/bin/node
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Welcome to NodeJs programming');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening requests on port 3000');
});
