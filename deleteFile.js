#!/usr/bin/node
/* Delete a file from a folder if exists */

const fs = require('fs');

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('File has been deleted successfully');
  });
}
