#!/usr/bin/node
/* create a read stream from a big
chunk of file */
const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
readStream.on('data', (chunk) => {
  console.log('------- New Chunks -----');
  console.log(chunk);
});
