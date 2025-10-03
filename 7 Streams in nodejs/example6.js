// example 

var fs = require("fs");
var pathname = "folder1/file3.txt";

const readStream = fs.createReadStream(pathname,'utf-8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
    // console.log(chunk+"");
    // console.log(chunk.toString()); 
});