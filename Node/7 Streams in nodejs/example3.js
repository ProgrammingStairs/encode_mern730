// example 

var fs = require("fs");
fs.mkdir("folder/folder3",{recursive:true},(error)=>{
    if(error){
        if(error.code=='EEXIST')
            console.log("Folder already exists");        
    }else{
        console.log("Folder created successfully");
    }
});