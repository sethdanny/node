#!/usr/bin/node
// Introduction to express framework

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<p> Welcome to Express Js  </p>');
});
app.listen(3000);
