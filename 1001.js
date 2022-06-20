

var input = require("fs").readFileSync("arquivo","utf-8");
var lines = input.split("\n");

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
console.log(`X = ${a+b}`);
