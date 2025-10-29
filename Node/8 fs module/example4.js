// example showing the concept of fs module 

var fs = require("fs");
var pathname = "myfile.txt";
var data = "Data is going to be overwrite";
// fs.writeFile(pathname,data,(error)=>{
//     if(error){
//             console.log("Error : ",error);
//     }
//     else
//         console.log("Data inserted successfully");
// });

fs.appendFile(pathname,data,(error)=>{
    if(error){
            console.log("Error : ",error);
    }
    else
        console.log("Data inserted successfully");
});