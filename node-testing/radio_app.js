var Radio = require('./radio.js');

var station = {
    name: 'City FM Radio'
};

var radio = new Radio(station);

radio.on('start', function(s) {
    console.log('%s "%s" STARTED', new Date(), s.name);
});

radio.on('next', function(s) {
    console.log('%s "%s" NEXT SONG', new Date(), s.name);
});

radio.on('close', function(s) {
    console.log('%s "%s" CLOSED', new Date(), s.name);
});