var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");

    // http://localhost:3000/?foo=apple&bar=orange
    app.get("/", function(req, res) {
        res.send(req.query);
    });
});