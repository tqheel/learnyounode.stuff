var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	if(req.method != 'GET'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		return res.end('I only do GETS. Sorry!');
	}
	var reqUrl = url.parse(req.url, true);
	switch(reqUrl.pathname){
		case '/api/parsetime':
			if(!reqUrl.query.iso){
				res.status(400).send('"iso" parameter not found on request object');
				return;
			}
			res.writeHead(200, {'Content-Type': 'application/json'});
			
			var inTime = new Date(reqUrl.query.iso);
			var time = {
				hour: inTime.getHours(),
				minute: inTime.getMinutes(),
				second: inTime.getSeconds()
			};
			res.end(JSON.stringify(time));
			break;
		case '/api/unixtime':
			if(!reqUrl.query.iso){
				res.status(400).send('"unixtime" parameter not found on request object');
				return;
			}
			res.writeHead(200, {'Content-Type': 'application/json'});
			
			var	time = {
				unixtime: new Date(data).getTime()
			};
			
			res.end(JSON.stringify(time));
			break;
		default:
			res.writeHead(404);
			res.end();
	}
		
});

//first arg of call to http server has port number as the first argument
server.listen(process.argv[2]);