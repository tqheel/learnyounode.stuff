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
	var data = createTimeString() + '\n';
	socket.write(data);
	socket.end();
});
server.listen(process.argv[2]);

