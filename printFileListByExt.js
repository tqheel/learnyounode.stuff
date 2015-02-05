var fileFilter = require('./filteredLsModule.js');

var dir = process.argv[2];
var ext = process.argv[3];

fileFilter(dir, ext, function(err, files){
	if(err){
		console.log('There was an error: ' + err);
	}
	else{
		files.forEach(function(element, index){
			console.log(element );
		});
	}
	
});