#!/usr/bin/env node
"use strict";

const program = require("commander");
const Bosyu = require("./bosyu");

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
	.option("-w, --width <size>", "Image Width", Number, 1025)
	.option("-h, --height <size>", "Image Height", Number, 576)
	.option(
		"-bc, --backcolor <value>",
		"Image Background Color",
		String,
		"#FFF"
	)
	.option("-fc --fontcolor <value>", "Image Font Color", String, "#333")
	.option("-o, --out <path> ", "Image output path", String, ".");

program.parse(process.argv);

const bosyu = new Bosyu();

bosyu.generator(
	program.title,
	program.description,
	program.width,
	program.height,
	program.backcolor,
	program.fontcolor
);
