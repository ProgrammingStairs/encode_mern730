// example showing the concept of fs module 

var fs = require("fs");
var pathname = "file1.txt";
var newpathname = "myfile.txt";

fs.rename(pathname,newpathname,(error)=>{
    if(error){
        if(error.code=="ENOENT")
            console.log("File Not Exist");
        else
            console.log("Error : ",error);
    }
    else
        console.log("File rename successfully");
});