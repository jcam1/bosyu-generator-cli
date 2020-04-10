#!/usr/bin/env node

const program = require("commander");

const Bosyu = require("./bosyu");
const saver = require("./saver");

program
	.usage("-t TITLE -d DESCRIPTION -o /path")
	.version("0.0.1")
	.option("-t, --title <value>", "BOSYU Title", String, "TEST")
	.option(
		"-d, --description <value>",
		"BOSYU Description",
		String,
		"This is description."
	)
	.option("-sw, --width <size>", "Image Width", Number, 1024)
	.option("-sh, --height <size>", "Image Height", Number, 576)
	.option(
		"-bc, --backcolor <value>",
		"Image Background Color",
		String,
		"#FFF"
	)
	.option("-fc --fontcolor <value>", "Image Font Color", String, "#333")
	.option("-o, --out <path> ", "Image output path", String, process.cwd())
	.option("-n, --name <value>", "Image file name", String, "bosyu.png");

program.parse(process.argv);

const bosyu = new Bosyu();

const canvas = bosyu.generator(
	program.title,
	program.description,
	program.width,
	program.height,
	program.backcolor,
	program.fontcolor
);

saver(canvas, program.out + "/" + program.name);
