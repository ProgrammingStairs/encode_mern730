// example 

var fs = require("fs");
var pathname1 = "folder1/file3.txt";
var pathname2 = "folder1/file4.txt";

const readStream = fs.createReadStream(pathname1,'utf-8');
const writeStream = fs.createWriteStream(pathname2,'utf-8');

readStream.pipe(writeStream);
console.log("data transfer successfully");
