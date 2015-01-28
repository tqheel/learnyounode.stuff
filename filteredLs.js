var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

function getFileListing(){
	fs.readdir(path.normalize(dir), function(err, list){
		if(!err){
			outputResults(function(list){
				return list.filter(function(element, index, array){
					return (path.extname(element) == '.' + ext);
				});
			});
		}
		else{
			console.log('There was an error: ' + err);
		}
	})
}

function outputResults(results){
	results.forEach(function(element, index){
		console.log(element + '\\n');
	});
}