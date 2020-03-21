#!/usr/bin/env node
"use strict";

const program = require("commander");

program
  .usage("-t TITLE -d DESCRIPTION -o /path")
  .option("-t, --title <value>", "BOSYU Title", String, "TEST")
  .option(
    "-d, --description <value>",
    "BOSYU Description",
    String,
    "This is description."
  )
  .option("-o, --out <path> ", "Image output path", String, "/")
  .parse(process.argv);
