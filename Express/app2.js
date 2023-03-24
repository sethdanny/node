#!/usr/bin/node
// routing and html
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.listen(3000);