// example showing the concept of fs module 

var fs = require("fs");
var pathname = "file101.txt";
fs.unlink(pathname,(error)=>{
    if(error){
        if(error.code=="ENOENT")
            console.log("File Not Exist");
        else
            console.log("Error : ",error);
    }
    else
        console.log("File deleted successfully");
});