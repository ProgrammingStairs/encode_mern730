// example showing the concept of fs module 

var fs = require("fs");
var pathname = "file101.txt";
/*
fs.open(pathname,'w',(error)=>{
    if(error)
        console.log("Error : "+error);
    else
        console.log("File created successfully");
});
*/

fs.open(pathname,'wx',(error)=>{
    if(error){
        if(error.code=="EEXIST")
            console.log("File  Already Exist");
        else
            console.log("Error : ",error);
    }
    else
        console.log("File created successfully");
});