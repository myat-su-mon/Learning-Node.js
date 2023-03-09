var express = require('express');
var app = express();

// app.use(express.static("static"));
app.use('static', express.static('static'));

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");
});