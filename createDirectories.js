#!/usr/bin/node
/* create a directory/folder if doesnt exists,
if it exists delete it */

const fs = require('fs');

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created successfully !');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Folder deleted successfully');
  });
}
