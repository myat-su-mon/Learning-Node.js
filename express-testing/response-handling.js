var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    app.get('/', function(req, res) {
        // res.status(200).send("Response Body");
        // res.status(404).sendFile("./response-handling.js");

        // res.sendStatus(200);
        // res.sendStatus(403);
        // res.sendStatus(600);

        // res.set({
        //     'Content-Type': 'text/plain',
        //     'Content-Length': '123'
        // });

        // res.append('Content-Encoding', 'gzip');

        // res.attachment('./app.js');

        // res.type('html');
        // res.type('json');

        // res.cookie('foo', 'Apple', {expires: new Date().now + 3600});
        // res.cookie('bar', 'Orange', {maxAge: 3600});

        // res.clearCookie('bar');

        app.get("/about", function(req, res) {
            res.redirect("/home/about-us");
        });
    });
    console.log("Response Handling finished.")
});