// example showing the concept of fs module 

var fs = require("fs");
var pathname = new Date().getTime()+"_file.txt";
var recordfile = "recordFileName.txt";
var data = "Now data is going to be inserted into file";
fs.writeFile(pathname,data,(error)=>{
    if(error){
            console.log("Error : ",error);
    }
    else
        console.log("Data inserted successfully");
});
fs.appendFile(recordfile,pathname+"\n",(error)=>{
    if(error){
            console.log("Error : ",error);
    }
    else
        console.log("File name entry successfully done");    
})
