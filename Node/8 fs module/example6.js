// example showing the concept of fs module 

var fs = require("fs");
var pathname = "myfile.txt";
var data = "Data is going to be overwrite";
// console.log("Before");
// fs.writeFileSync(pathname,data);
// console.log("Data inserted successfully");
// console.log("After");


console.log("Before");
fs.appendFileSync(pathname,data);
console.log("Data inserted successfully");
console.log("After");
