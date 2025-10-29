// example 

var fs = require("fs");
var pathname = "folder1/file3.txt";
var writeStream;
function writeContent(){
    writeStream = fs.createWriteStream(pathname,{flags:'a'});
    // console.log(writeStream);   
    writeStream.write(" Data is going to be override");
    console.log("Data inserted successfully");
}
if(fs.existsSync(pathname)){
    console.log("Already exist");
    writeContent();
}else{
    console.log("File is going to be create");
    writeContent();
}

writeStream.close();
writeStream.on('finish',()=>{
    console.log("Data inserted completely");
});