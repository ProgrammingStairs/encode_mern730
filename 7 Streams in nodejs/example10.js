// example 

var fs = require("fs");
var zlib = require("zlib");
var  zlibObj = zlib.createGzip();

var pathname1 = "folder1/file4.txt";
var pathname2 = "folder1/file4.txt.zip";

const readStream = fs.createReadStream(pathname1,'utf-8');
const writeStream = fs.createWriteStream(pathname2);

readStream.pipe(zlibObj).pipe(writeStream);
console.log("zip file created successfully");
