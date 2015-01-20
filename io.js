var fs = require('fs');
var fileName = process.argv[2];
var fileContents = fs.readFileSync(fileName);
var str = fileContents.toString();
var arrayOfLines = str.split('\n');
var result = arrayOfLines.length;
console.log(result -1);
