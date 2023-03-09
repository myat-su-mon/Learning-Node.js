var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Radio = function(station) {
    var self = this;

    setTimeout(function() {
        self.emit('start', station);
    }, 0);

    setTimeout(function() {
        self.emit('next', station);
    }, 5000);

    setTimeout(function() {
        self.emit('close', station);
    }, 10000);
};

util.inherits(Radio, EventEmitter);
module.exports = Radio;