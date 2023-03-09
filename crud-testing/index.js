var express = require('express');
var parser = require('body-parser');
var api = require("./api.js");
var app = express();

app.use(parser.urlencoded({extended: true}));

app.use(express.static("./static"));
app.use("/api", api);

var server = app.listen(3000, function(){
    console.log("ExpressJS server running on port 3000...");
});

// GET localhost:3000/
// GET localhost:3000/about.html 
// GET localhost:3000/contact.html 

// GET localhost:3000/api/users
// POST localhost:3000/api/users
// GET localhost:3000/api/users/:id
// PUT localhost:3000/api/users/:id
// DELETE localhost:3000/api/users/:id