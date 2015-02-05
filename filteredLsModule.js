var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(path.normalize(dir), function(err, list){
		if(!err){
			var fileArray = [];
			fileArray = list.filter(function(element, index, array){
					return (path.extname(element) === '.' + ext);
			});
			callback(null, fileArray);
		}
		else{
			callback(err);
		}
	});
}