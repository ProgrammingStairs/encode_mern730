// example showing the concept of fs module 

var fs = require("fs");
var pathname = "myfile.txt";
console.log("Before");

const data = fs.readFileSync(pathname,'utf-8');
console.log(data);

console.log("After");
