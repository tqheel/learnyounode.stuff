var map = require('through2-map');
var http = require('http');
var port = process.argv[2];
var input = process.argv[3];

var server = http.createServer(function(req, res){
	if(req.method != 'POST'){
		return res.end('I only do posts. Sorry!');
	}
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(port);
