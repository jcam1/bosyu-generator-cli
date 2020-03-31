const fs = require("fs");

function save(canvas, filepath) {
	const buffer = new Buffer.from(canvas.toDataURL().split(",")[1], "base64");

	fs.writeFile(filepath, buffer, error => {
		if (error) {
			console.error("An error has occured.");
			console.error(error);

			throw error;
		} else {
			console.info("BOSYU generation completed!");
		}
	});
}

module.exports = save;
