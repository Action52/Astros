var express = require('express');
var path =  require('path');

var PORT = 8080;

var app=express()

app.use('/bootstrap-4.0.0-dist', express.static(path.join(__dirname, './bootstrap-4.0.0-dist')));

app.get('/', function (req, res) {
    res.sendFile('index.html'));
});

app.listen(PORT);

console.log('Running on port ' + PORT);
