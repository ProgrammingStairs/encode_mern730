// example 

var fs = require("fs");
var pathname = "folder1/file3.txt";

const readStream = fs.createReadStream(pathname,'utf-8');
readStream.on('data',(chunk)=>{
    const obj = JSON.parse(chunk);
    console.log("Name : "+obj.name);
    console.log("Age : "+obj.age);
    console.log("Salary : "+obj.salary);
    console.log("City : "+obj.address.city);
    console.log("State : "+obj.address.state);   
});