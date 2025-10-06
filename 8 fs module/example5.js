// example showing the concept of fs module 

var fs = require("fs");
var pathname = "myfile.txt";
console.log("Before");

fs.readFile(pathname,'utf-8',(error,data)=>{
    if(error){
            console.log("Error : ",error);
    }
    else
        console.log(data);
});

console.log("After");
