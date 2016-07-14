var numArr = process.argv;
var sum = 0;

for (var i  = 2; i < numArr.length; i++) {
	sum += +numArr[i];
}

console.log(sum);