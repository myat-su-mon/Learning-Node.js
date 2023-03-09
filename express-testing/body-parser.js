var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");
    app.post('/', function(req, res) {
        res.send(req.body);
        console.log(req.body);
    });
});