var fs = require('fs');
var fileName = process.argv[2];

function processFile(){
	fs.readFile(fileName, 'utf8', function (err, contents){
		if(!err){
			var contentsArray = contents.split('\n');
			outputResult(contentsArray);
		}
		else{
			console.log(err);
		}
		
	});
}

function outputResult(fileContents){
	var result = fileContents.length;
	console.log(result -1);
}

processFile(outputResult);




