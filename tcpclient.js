var net = require('net');

var client = new net.Socket();
var host = '127.0.0.1';
var port = 6767;

client.connect(port, host, function(){
	console.log('Connected to: ' +host+':'+port);
});

client.on('data', function(data){
	console.log('The time is: ' + data);
	client.destroy();
});
client.on('close', function() {
    console.log('Connection closed');
});