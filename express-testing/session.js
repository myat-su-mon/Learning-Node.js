var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'secret'
}));

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");
    app.get('/', function(req, res) {
        if(req.session.view) {
            req.session.view += 1;
        } else {
            req.session.view = 1;
        }
        res.send(req.session);
    });
});