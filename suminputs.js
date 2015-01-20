var i = 0;
var sum = 0;
var array = process.argv;
for(i=2;i<array.length;i++){
	sum += Number(array[i]);
}
console.log(sum);