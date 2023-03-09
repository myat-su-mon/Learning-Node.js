var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Home");
});

router.get("/about", function(req, res) {
    res.send("About Us");
});

module.exports = router;