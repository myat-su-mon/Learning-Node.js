var express = require('express');
var homeRouter = require('./home-router.js');
var userRouter = require('./user-router.js');
var app = express();

app.use("/home", homeRouter);
app.use("/users", userRouter);

var server = app.listen(3000, function() {
    console.log("ExpressJS server running on port 3000...");
});