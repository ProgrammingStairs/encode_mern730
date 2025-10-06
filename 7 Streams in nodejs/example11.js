// example 

var fs = require("fs");
var zlib = require("zlib");
var  zlibObj = zlib.createGunzip();

var pathname1 = "folder1/file4.txt.zip";
var pathname2 = "folder1/file5.txt";

const readStream = fs.createReadStream(pathname1);
const writeStream = fs.createWriteStream(pathname2);

readStream.pipe(zlibObj).pipe(writeStream);
console.log("file unzip successfully");

readStream.on('error',(error)=>{
    console.log("-----------> ",error);
})

