const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener Called.', arg);
});

logger.log('message');