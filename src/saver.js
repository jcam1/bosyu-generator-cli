module.exports = (function() {
	"use strict";

	const fs = require("fs");

	function canvasToBase64(canvas) {
		return canvas.toDataURL().split(",")[1];
	}

	function decodeWrite(base64, filepath, callback) {
		const buffer = new Buffer(base64, "base64");
		fs.writeFile(filepath, buffer, callback);
	}

	return {
		save: function(canvas, filepath, callback) {
			decodeWrite(canvasToBase64(canvas), filepath, callback);
		}
	};
})();
