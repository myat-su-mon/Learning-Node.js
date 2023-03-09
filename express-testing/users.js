var express = require('express');
var app = express();

var server = app.listen(3000, function() {

    app.get("/users", function(req, res) { 
        console.log("Getting user list");
    });

    app.get("/users/:id", function(req, res) { 
        var userId = req.params.id; 
        console.log("Getting user %s", userId);
    });

    app.post("/users", function(req, res) { 
        console.log("Creating a new user");
    });
    app.put("/users/:id", function(req, res) { 
        var userId = req.params.id; 
        console.log("Updating user %s", userId);
    });

    app.delete("/users", function(req, res) { 
        console.log("Removing all users");
    });

    app.delete("/users/:id", function(req, res) { 
        var userId = req.params.id; 
        console.log("Removing user %s", userId);
    });

    // localhost:3000/users/john/profile/123
    app.get("/users/:name/:id", function(req, res) {
        var name = req.params.name;
        var id = req.params.id;
    });

    app.all("/users", function(req, res) {
        console.log("Request received");
        next();
    });

    app.route("users/")
        .get(function(req, res) {
            console.log("Getting user list");
        })
        .delete(function(req, res) {
            console.log("Removing all users");
        });
});