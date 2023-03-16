#!/usr/bin/node

const fs = require('fs');

// reading file and its data
fs.readFile('./docs/hello.txt', (err, data) => { 
    if (err) {
        console.log(err);
    }
    //console.log(data); as a buffer
    console.log(data.toString()); //as a string
})