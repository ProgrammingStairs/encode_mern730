// example 

var fs = require("fs");
fs.mkdir("folder1",(error)=>{
    if(error){
        console.log("Error : ",error);        
    }else{
        console.log("Folder created successfully");
    }
});