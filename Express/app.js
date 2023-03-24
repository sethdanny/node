#!/usr/bin/node
// Introduction to express framework

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> Welcome to Express Js  </h1>');
});
app.listen(3000);
