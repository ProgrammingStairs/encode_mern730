// example 

var fs = require("fs");
var pathname = "folder/folder4/folder44";
if(fs.existsSync(pathname))
    console.log("Already exist");
else{
    fs.mkdir(pathname,{recursive:true},(error)=>{
        if(error){
           console.log("Error : ",error);        
        }else{
            console.log("Folder created successfully");
        }
    });
}
