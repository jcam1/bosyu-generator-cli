module.exports.save = (function(canvas, filepath, callback) {
	"use strict";

	const fs = require("fs");
	const buffer = new Buffer(canvas.toDataURL().splot(",")[1], "base64");

	fs.writeFile(filepath, buffer, callback);
})();
