function Bosyu() {
	this.titleSettings = {
		font: 'bold 73px "Nano Sans CJK JP"',
		lineHeight: 80
	};

	this.bodySettings = {
		font: '35px "Nano Sans CJK JP"',
		lineHeight: 38
	};

	this.padding = 80;
	this.margin = 40;
}

Bosyu.prototype.generator = function(
	title,
	body,
	width,
	height,
	backColor,
	fontColor
) {
	generator(title, body, width, height, backColor, fontColor);
};

/* methods */
function generator(title, body, width, height, backColor, fontColor) {
	// TODO
}

function splitByMeasureWidth(str, maxWidth, context) {
	let chars = Array.from(str);
	let line = "";
	let lines = [];
	for (let index = 0; index < chars.length; index++) {
		if (maxWidth <= context.measureText(line + chars[index]).width) {
			lines.push(line);
			line = chars[index];
		} else {
			line += chars[index];
		}
	}
	lines.push(line);

	return lines;
}

module.exports = Bosyu;
