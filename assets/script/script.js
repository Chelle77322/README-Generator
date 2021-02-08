'use strict';
var express = require('express');
var path = require('path');

var app = express();


app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/file', function(req, res) {
  res.download('static/Michelle_Hall_Resume.pdf');
});

app.listen(5000, function() {
    console.info('Server listening on port 5000');
});
