const { createCanvas } = require("canvas");

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
	return generator(title, body, width, height, backColor, fontColor, {
		titleSettings: this.titleSettings,
		bodySettings: this.bodySettings,
		padding: this.padding,
		margin: this.margin
	});
};

function generator(title, body, width, height, backColor, fontColor, settings) {
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext("2d");

	const lineWidth = width - settings.padding * 2;

	/* draw background color */
	ctx.fillStyle = backColor;
	ctx.fillRect(0, 0, width, height);

	/* set baseline */
	ctx.textBaseline = "top";

	/* draw title */
	ctx.font = settings.titleSettings.font;
	ctx.fillStyle = fontColor;

	const titleLines = splitByMeasureWidth(title, lineWidth, ctx);
	const titleLineCnt = titleLines.length;
	const titleHeight = titleLineCnt * settings.titleSettings.lineHeight;

	for (let index = 0; index < titleLineCnt; index++) {
		const element = titleLines[index];
		ctx.fillText(
			element,
			settings.padding,
			settings.padding + settings.titleSettings.lineHeight * index
		);
	}

	/* draw body */
	ctx.font = settings.bodySettings.font;
	ctx.fillStyle = fontColor;

	const bodyLines = splitByMeasureWidth(body, lineWidth, ctx);
	const bodyLineCnt = bodyLines.length;

	for (let index = 0; index < bodyLineCnt; index++) {
		const element = bodyLines[index];
		ctx.fillText(
			element,
			settings.padding,
			settings.padding +
				(titleHeight + settings.margin) +
				settings.bodySettings.lineHeight * index
		);
	}

	return canvas;
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
