var net = require('net');

function createTimeString(){
	date = new Date();
	var y = date.getFullYear();
	var m = zeroPadIfNeeded(date.getMonth()+1);
	var d = zeroPadIfNeeded(date.getDate());
	var h = zeroPadIfNeeded(date.getHours());
	var min = zeroPadIfNeeded(date.getMinutes());
	var dash = '-';
	return y+dash+m+dash+d+' '+h+':'+min;

}
function zeroPadIfNeeded(input){
	return (input<10) ? '0' + input.toString() : input.toString();
}

var server = net.createServer(function(socket){
	socket.on('data', function(data){
		console.log('Received message: '+data + ' from '+socket.remoteAddress);
		var time = createTimeString();
		socket.write('At ' + time + ', you said, "'+data+'"');
	});
	
});
var port = 1337;
var host = '192.168.1.4';
server.listen(port,host);

console.log('Server listening on '+ host+':'+port);

