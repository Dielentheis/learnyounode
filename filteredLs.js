var fs = require('fs');
var args = process.argv;
var pathname = args[2];
var ext = args[3];

fs.readdir(pathname, function(err, list) {
	if (err) {
		throw err;
	}
	for (var i = 0; i < list.length; i++) {
		if (list[i].includes("." + ext)) {
			console.log(list[i]);
		}
	}
});