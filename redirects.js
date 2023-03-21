#!/usr/bin/node

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  let path = './views/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;

    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;

      case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;

    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  // read and sending html pages
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(4000, 'localhost', () => {
  console.log('listening on port 4000');
});
