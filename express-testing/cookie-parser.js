var express = require('express');
var cookie = require('cookie-parser');
var app = express();

app.use(cookie());

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");
    app.get('/', function(req, res) {
        res.send(req.cookies);
        console.log(req.cookies);
    });
});