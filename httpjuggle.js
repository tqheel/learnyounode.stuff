var http = require('http');
var requests=[
	{
		url: process.argv[2],
		response: ''
	},
	{
		url: process.argv[3],
		response: ''
	},
	{
		url: process.argv[4],
		response: ''
	}
];

var counter = 0;

getData(requests[0].url, getData);

function logOutput(){
	requests.forEach(function(output){
		console.log(output.response);
	});
}
function getData(url, callback){	
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
			requests[counter].response = body;
			counter++;
			if(counter<=2){
				callback(requests[counter].url, getData);
			}
			else{
				logOutput();
			}			
		});
	});

}
