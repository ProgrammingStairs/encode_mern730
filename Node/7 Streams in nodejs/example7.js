// example 

var fs = require("fs");
var pathname = "folder1/file3.txt";

const writeStream = fs.createWriteStream(pathname);
const obj = {
    name : "Andrew Anderson",
    age : 56,
    salary : 67000,
    address : {
        city : "Indore",
        state : "Madhya Pradesh",
        toString(){
            return this.city +" "+ this.state;
        }
    }
}
writeStream.write(JSON.stringify(obj));
console.log("Data inserted successfully");

writeStream.close();
writeStream.on('finish',()=>{
    console.log("Data inserted completely");
});