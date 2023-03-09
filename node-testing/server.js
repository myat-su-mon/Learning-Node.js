var net = require('net');
var server = net.createServer(function(conn) {
    console.log('Client connected');

    conn.on('end', function() {
        console.log('Client disconnected');
    });

    conn.write('Hello!\n');
    conn.pipe(conn);
});

server.listen(8124, function() {
    console.log('Server started at port 8124...');
});