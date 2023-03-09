var net = require('net');

var client = net.connect({port: 8124}, function() {
    console.log('connected to server!');
    client.write('Hi! \n');
});

client.on('data', function(data){
    console.log(data.toString);
    client.end();
});

client.on('end', function(){
    console.log('Disconnected from server');
});