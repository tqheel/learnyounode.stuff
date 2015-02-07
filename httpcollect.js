var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
	var body = '';
	response.setEncoding('utf8');
	response.on('data', function(data){
		body+=data;
	});
	response.on('error', function(error){
		error.forEach(function(e){
			console.log(e);
		});
	});	
	response.on('end', function(){
		console.log(body.length);
		console.log(body);
	});
});