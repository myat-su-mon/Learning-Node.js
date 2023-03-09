var express = require('express');
var app = express();

app.set('views', './views');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");

    app.get('/', function(req, res){
        // res.sendFile(__dirname + "/index.html");
        res.render("index.html");
    });

    app.get('/about', function(req, res){
        // res.sendFile(__dirname + "/about.html");
        res.render("about.html", {greeting: "Hello World!"});
    });
});