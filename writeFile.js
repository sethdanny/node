#!/usr/bin/node
/* writing content into the file
and if the file doesnt exists its created automatically */

const fs = require('fs');
fs.writeFile('./docs/blog.txt', 'Welcome to NodeJs programming', 
() => { console.log('file was written'); })